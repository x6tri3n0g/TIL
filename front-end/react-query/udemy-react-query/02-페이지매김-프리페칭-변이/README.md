# 02. 페이지 매김(Pagination), 프리페칭(Prefetching)과 변이(Mutations)

## Intro to Code Quizzes
- [Code Quizzes를 해결하라 #4 - 혼자 해결하기](https://github.com/x6tri3n0g/udemy-REACT-QUERY/pull/4)

## Query Key
- 이미 알려진 `queryKey`가 있는 경우(같은 `queryKey`를 사용하는 경우) 트리거가 있어야만 리페치가 가능함
 - 어떤 트리거들이 있을까?
  - component remount
  - window refocus
  - running refetch function
    - `useQuery`에서 반환되어 수동으로 `refetch`를 실행할 때
  - automated refetch
    - 지정된 간격으로 리페칭을 자동 실행할 때
  - query invalidation after a mutation
    - `Mutation`(변이)를 생성한 뒤 쿼리를 무효화 후 클라이언트의 데이터가 서버의 데이터와 불일치할 때

### Array as Query Key
: `queryKey`를 통해 연속된 리페치를 구분하는 방법
- `queryKey`에 문자열 대신 배열을 전달
  - 키가 변경될 때, 새로운 query가 생성됨
  ```ts
  const queryKey = ['comments', post.id];
  ```
  - 이렇게 `queryKey`를 query에 대한 의존성 배열로 취급하게 만듦
  - 따라서 키가 변경됨에 따라 query를 다시 불러올 수 있게 됨  
    - `post.id`가 업데이트되면 React Query가 새 query를 생성해서 staleTime과 cacheTime을 가지게 되고 의존성 배열이 다르다면 완전히 다른 것으로 간주함

## Pagination
React Query의 Pagination을 이용해서 페이지 매김을 구현해본다.
- 컴포넌트의 상태 중 `currentPage` 상태를 통해 현재 페이지를 파악하는 페이지 매김 스타일
- `queryKey`를 다루는 방식과 비슷하게 페이지마다 다른 쿼리 키가 필요함
  - `queryKey`를 배열로 업데이트해서 가져오는 페이지 번호를 포함하도록 함
- 사용자가 "next page" 혹은 "previous page" 버튼을 클릭
  - `currentPage` 상태를 업데이트
  - 그럼 React Query가 바뀐 `queryKey`를 감지하고 새로운 쿼리를 실행해서 새 페이지가 표시됨
- 구현 방법
```tsx
...

const { data, isError, error, isLoading } = useQuery(
  ['posts', currentPage],
  () => fetchPosts(currentPage),
  { staleTime: POSTS_STALE_TIME }
);

...

return (
  <>
    ...
    <button
      disabled={currentPage >= maxPostPage}
      onClick={() => setCurrentPage((prev) => prev + 1)}
    >
      next page
    </button>
  </>
)
```

## Prefetching
> Pagination을 구현한 위 결과물은 페이지 이동시 화면의 깜빡임임을 보여줘 사용자 경험이 좋지 않다. 다음 페이지에 대한 데이터 캐시가 없기 때문에 사용자는 "Next Page" 버튼을 누르고 잠시 로드되는 화면을 보게됩니다. Prefetching을 통해서 데이터를 미리 가져와 캐시에 넣어 사용자가 기다릴 필요가 없도록 해봅니다.

- `Prefetch`
  - 데이터를 캐시에 추가 구성해놓을 수 있지만 기본값으로 만료(stale) 상태
  - 데이터를 사용하고자 할 때 만료상태에서 데이터를 다시 가져옴
  - 데이터를 다시 가져오는 중에는 캐시에 있는 데이터를 이용해 앱에 먼저  노출
    - 물론 캐시가 만료되지 않았다는 가정하에...
    - 만약 `cacheTime`보다 더 "Next Page" 이전 페이지에 머물다가 다음 페이지로 넘어간다면 사용자는 loading 화면을 보게 될 것이다.
- **추후 사용자가 사용할 법한 모든 데이터에 프리페칭을 사용**
  - `Pagination` 뿐만 아니라 *다수의 사용자가 웹사이트 방문 시 통계적으로 특정 탭을 누를 확률이 높다면 해당 데이터를 미리 가져오는 게 좋을 것이다.*
- [TanStack Query v4 - Prefetching](https://tanstack.com/query/v4/docs/react/guides/prefetching)
- `prefetchQuery`는 `queryClient`의 메서드
```tsx
import { useQuery, useQueryClient } from 'react-query';

...

const queryClient = useQueryClient();

useEffect(() => {
  if (currentPage < maxPostPage) {
    const nextPage = currentPage + 1;
    queryClient.prefetchQuery(
      ['posts', nextPage], 
      () => fetchPosts(nextPage)
    );
  }
}, [currentPage, queryClient]);
...
```
- `useEffect`를 사용해서 페이지 최대값 이전까지 Prefetching를 할 수 있도록 구현
  - `queryClient.prefetchQuery()`
    - `prefetchQuery`에 필요한 파라미터는 `useQuery`와 동일하게 사용됨
- 이전 페이지로 돌아갔을 때 캐시에 해당 데이터가 있도록 만들고 싶은 경우
  - `useQuery`에  `keepPreviousData: true`로 데이터를 유지할 수 있음
```tsx
const { data, isError, error, isLoading } = useQuery(
  ['posts', currentPage],
  () => fetchPosts(currentPage),
  { 
    staleTime: POSTS_STALE_TIME,
    keepPreviousData: true,
  }
);
```
  
## isFetching vs. isLoading
- `isFetching`
  - 비동기 쿼리 함수가 아직 해결되지 않았을 때(`pending` 상태일때) true
  - 데이터를 가져오는 중
- `isLoading`
  - `isFetching`이 true이면서 쿼리에 대해 캐시된 데이터가 없는 상태를 뜻함
  - 캐시된 데이터가 없고 데이터를 가져오는 상황에 해당
- `isFetching`을 통해 로딩을 보여주게 되면 사용자는 캐시 데이터가 들어옴에 상관없이 로딩을 볼 수 있음
- `isFetching`은 prefetch 전에 사용될 수 있는데 즉, nextPage 데이터를 포함한 캐시를 미리 가져오기 전을 말함

## Mutations(변이)
- Mutation: 서버에 데이터를 업데이트하도록 서버에 네트워크 호출을 실시함 
  - 블로그 포스트를 추가, 삭제, 수정하는 것

## useMutaion
[React Query - useMutation](https://react-query-v3.tanstack.com/reference/useMutation)
- `useMutation`은 일부 예외를 제외하고 `useQuery`와 상당히 유사함
  - `mutate` 함수를 반환
    - 변경사항을 토대로 서버를 호출할 때 사용
  - 데이터를 저장하지 않으므로 쿼리 키는 필요하지 않음
  - `isLoading`은 존재하지만 `isFetching`은 없음
    - 변이에 관련된 캐시는 존재하지 않고 재시도 또한 기본값으로 존재하지 않음
  - 기본적으로 retry를 수행하지 않음
    - `useQuery`는 기본값으로 3회 재시도함
    - retry는 설정으로 제어할수 있음
```tsx
  const deleteMutation = useMutation((postId) => deletePost(postId));

...

  <button
    onClick={() => deleteMutation.mutate(post.id)}
  >
    Delete
  </button>
  {deleteMutation.isError && 
    <p style={{ color: 'red' }}>Error deleting the post.</p>
  }
  {deleteMutation.isLoading && 
    <p style={{ color: 'purple' }}>Deleting the post.</p>
  }
  {deleteMutation.isSuccess && 
    <p style={{ color: 'green' }}>Post has (not) been deleted.<p>
  }

...
```
- 위와 같이 mutate를 통해 변이 속성을 실행하여 변이의 호출을 조절할 수 쿼리에서 진행한 것과 유사한 방식으로 주기를 처리할 수 있음

## Code Quiz! "Update" Post Title
- `updatePost`와 함께 `useMutation`을 사용하여 버튼 `onClick`시 "Update title"하는 코드를 작성하라
- `useMutation`를 통해 update하는 방식도 delete와 비슷함
```tsx
...
const udpateMutation = useMutation((postId) => updatePost(postId));

return (
  <>
    <button
      onClick={() => udpateMutation.mutate(post.id)}
    >
      {udpateMutation.data.title}
    </button>
    {udpateMutation.isError && <p style={{ color: 'red' }}>Error updating the post.</p>}
    {udpateMutation.isLoading && <p style={{ color: 'purple' }}>Updating the post.</p>}
    {udpateMutation.isSuccess && <p style={{ color: 'green' }}>Post has (not) been updated.</p>}
  </>
)
...
```

## React Query 기초 총정리
- package를 설치하여 `QueryClient`를 생성하고 `QueryProvider`를 추가했다.
- `useQuery`를 통해 `isLoading`/`isFetching` 그리고 `error`과 같은 객체를 반환한다.
- `staleTime`은 `re-fetch`되기 전 (trigger에 의해) 데이터가 사용 가능한 상태로 유지되는 시간
  - 서버로 돌아가 데이터가 여전히 정확한지 확인해야 하는 시점까지
  - `staleTime` 만큼 `re-fetch`하지 않음
- `cacheTime`은 데이터가 비활성화된 이후 남아 있는 시간을 말함
  - 캐시된 데이터는 쿼리를 다시 실행했을 때 사용됨
  - 데이터가 최신 상태인지 서버에서 확인하는 동안 해당 위치에서 사용자에게 보여지게 됨
- dependency arrays를 통해 query keys를 관리
  - queryKey가 변경되면 useQuery hook은 쿼리를 반복
  - 데이터 함수가 바뀌면 queryKey도 데이터를 변경해야 하는 경우 다시 실행될 수 있도록 변경됨
- pagination and pre-fetching
  - pagination
    - 페이지를 넘기는 경우 컴포넌트에서 상태를 유지해야 할때 사용
  - pre-fetching
    - 추가 페이지(다음 페이지)를 pre-fetching
    - 서버에서 최신인지 확인하는 동안 캐시된 데이터가 보여질 수 있도록 사용됨
- `useMutation`을 통한 server side-effect들을 알아봄