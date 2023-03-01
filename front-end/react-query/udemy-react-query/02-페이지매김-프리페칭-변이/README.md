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