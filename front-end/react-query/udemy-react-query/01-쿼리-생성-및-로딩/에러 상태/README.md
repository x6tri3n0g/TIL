# 01. 쿼리 생성 및 로딩/에러 상태

## Client State vs. Server State
- `Client State`: 웹 브라우저 세션과 관련된 모든 정보를 의미합니다.
  - 웹 브라우저의 어떤 상태를 위한 값
  - 서버에서 일어나는 일과는 아무 관련이 없음
  - 단순히 사용자의 상태를 추적하는 역할을 함
- `Server State`: 서버에 저장되어있으며 클라이언트에 표시하는데 필요한 데이터
  - 데이터베이스에 저장하는 블로그 게시물 데이터 등
  - 서버에 저장되는 데이터는 여러 클라이언트에 보여지기 위해서 서버에 저장됨

## React Query가 서버 데이터를 사용하는 방법
`React Query`는 클라이언트 사이드에서 서버 데이터 캐시를 관리합니다.
React 코드에 서버 데이터가 필요할 때, Fetch나 Axios를 사용해 서버로 바로 이동하지 않고 React Query 캐시를 요청합니다. React Query의 역할은 React Query Client를 어떻게 구성했느냐에 따라 해당 캐시의 데이터를 유지 관리하는 것입니다. 데이터를 관리하는 것은 React Query지만 서버의 새 캐시를 업데이트하는 시기를 설정하는 것은 사용자의 몫입니다.

```
/* react query cache */
key: 'blog-posts',  // cache key
data: [
  1: {
    title: 'React Query',
    tagLine: 'What is this thing?'
  },
  2: {
    title: 'React Query Mutations',
    tagLine: 'Not just for ninja tutles',
  },
]
staleTiem: 30 seconds  // declaratively refetch 조건
```
- `key`를 기준으로 캐시 데이터를 할당
  - 데이터가 식별되는 방식
- 클라이언트 캐시에 있는 이 데이터가 서버와 일치하는지 확인해야 할때
  - `imperatively(명령형)`: 쿼리 클라이언트에 이 데이터를 무효화(invalidate)하고 캐시에 교체할 새 데이터를 서버에서 가져오게 지시하는 방법
  - `declaratively(선언형)`: Refetch를 트리거하는 조건을 구성하는 방법
    - 브라우저 창이 다시 포커스되는 경우

## 더해서...
React Query는 데이터 관리뿐만 아니라 서버 상태 관리에 도움되는 많은 도구가 함께 제공됩니다.
- `Loading/Error states`: 서버에 대한 모든 쿼리의 로딩 및 오류 상태
- `Pagination/infinite scroll`: 데이터에 대한 Pagination / Infininte scroll을 위해 데이터를 조각으로 가져올 수 있는 도구도 제공
- `Prefetching`: 사용자가 데이터가 언제 필요할지 예상하여 Prefetch 수행
  - 데이터를 미리 가져와서 캐시에 넣으면 사용자에게 데이터가 필요할 때 앱이 캐시에서 해당 데이터를 가져오기 때문에 사용자는 서버에 연결할 때까지 기다릴 필요없음
- `Mutations`: 데이터의 변이(Mutation)나 업데이트를 관리할 수 있음
- `De-duplication of requests`: 쿼리는 키로 식별되기 때문에 동일한 데이터를 요청하는 경우 React Query는 쿼리를 한 번에 보낼 수 있음. 기존 쿼리를 요청하여 다른 구성 요소가 데이터를 요청하는 경우 React Query는 중복 요청을 제거할 수 있음
- `Retry on error`: 서버에서 오류가 발생하는 경우에 대한 재시도를 관리할 수 있음
- `Callbacks`: 쿼리가 성공하거나 오류가 났을 때를 구별하여 조치를 취할 수 있도록 콜백을 전달할 수 있음

## First Project! Blog-em lpsum
- Get data from [jsonplaceholder](https://jsonplaceholder.typicode.com/)
- Very Simple, focus on React Query concepts
  - `Fetching data`
  - `Loading/error states`
  - `React Query dev tools`
  - `Pagination`
  - `Prefetching`
  - `Mutations`

### Getting Started
- `npm install react-query`
- Create `query client`
  - 쿼리와 서버의 데이터 캐시를 관리하는 클라이언트
- Apply `QueryProvider`
  - 자녀 컴포넌트에 캐시와 클라이언트 구성을 제공할 Provider
  - Takes query client as the value
- Run `useQuery`
  - 서버에서 데이터를 가져오는 hook

### QueryClientProvider 세팅하기
- `App.tsx`의 모든 컴포넌트를 감싸는 `QueryClientProvider`를 생성하고 client로 `QueryClient` 객체를 할당
```tsx
import { QueryClient, QueryClientProvier } from 'react-query';

...

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      ...
    </QueryClientProvider>
  )
}
```
- `QueryClientProvider`를 통해 App의 컴포넌트에 react query 캐시를 통해 데이터를 제공할 세팅을 한다.

### Posts 컴포넌트에서 posts 데이터 불러오기
- `useQuery`를 통해서 데이터를 불러오기 위해서 hook의 parameters를 살펴본다. 
```ts
import { useQuery } from 'react-query';

...

const { data } = useQuery('posts', fetchPosts);
```
- `useQuery`는 다양한 속성을 가진 개체를 반환함
- 첫번째 인자는 *query key*로 쿼리의 이름을 뜻함
- 두번째로는 *query function*으로 이 쿼리에 대한 데이터를 가져오는 함수
  - 데이터를 가져오는 비동기 함수여야 함
  - `fetchPosts` 함수는 비동기이기 때문에 반환된 `data`는 처음에 `undefined`일 것이다.

### useQuery에서 반환되는 속성들
[Tanstack reference - useQuery](https://tanstack.com/query/v4/docs/react/reference/useQuery)
  
- `isLoading`, `isError` 속성 살펴보기
  - `isLoading`: data fetch가 아직 로드중인 상태(Boolean)
  - `isError`: data fetch 중 error인 상태(Boolean)

#### `isFetching` vs. `isLoading`
- `isFetching`
  - false, 비동기 쿼리가 해결되지 않았음(**hasn't yet resolved**)
    - Fetching이 완료되지 않았음 => pending
  - `isLoading`를 감싸는 상위 상태(super set)
- `isLoading`
  - 가져오는 상태에 있음을 의미
  - `isFetching`의 하위 상태(sub set)
  - **데이터를 가져오는 중이고 표시할 캐시 데이터도 없음**
    - 쿼리 함수가 아직 해결되지 않는 것
    - 캐시 된 데이터가 없음
      - 이 쿼리를 만든 적이 없음
* 큰 차이가 없어 보일 수 있지만 Pagination 시 *캐시된 데이터가 있을 때와 없을 때를 구분해야 한다*는 것을 알게될 것이다.

#### `error` 객체
- `error` 객체를 통해서 error 상태의 구체적인 데이터를 볼수 있음
- `onError`라는 것을 통해 error 시 callback 함수를 실행할 수도 있음

### React Query Devtools
[React Query Devtools](https://tanstack.com/query/latest/docs/react/devtools)
- `react-query/devtools`에 위치함
```ts
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      ...
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```
- React Query Dev Tools는 앱에 추가할 수 있는 컴포넌트로 개발중인 상태를 표시함
  - 이를 통해 예상되지 않는 동작에 대한 문제를 해결하는데 도움이 될 수도 있음
- 알 수 있는 것
  - 쿼리 키를 통해 쿼리를 표시함
    - 활성(active), 비활성(inactive), 만료(stale) 등 쿼리의 모든 상태를 알려줌
    - 마지막으로 업데이트된 타임스탬프
  - 쿼리에 의해 업데이트된 데이터 탐색기(Data explorer)
  - 쿼리를 볼 수 있는 쿼리 탐색기(Query explorer)

### Stale Time vs. Cache Time
#### Stale Data: 만료된 데이터
- 오래된 식빵
- 데이터 리페칭(refetching)은 만료된 데이터에서만 실행됨
  - 이외에도 리페칭에는 여러 트리거가 있음 - 트리거일뿐
    - 컴포넌트가 다시 마운트되거나(component remount)
    - 윈도우가 다시 포커스되었을 때(window refocus)
- `staleTime`: 데이터를 허용하는 'max age'
  - 데이터가 만료됐다고 판단하기 전까지 허용하는 시간
```tsx
const { data, isError, error, isLoading } = useQuery('posts', fetchPosts, { 
  staleTime: 2000,
});
```
- 보통은 리페칭이 실행되는 경우라도 데이터가 만료되지 않으면 리페칭은 실행되지 않음
  - 데이터가 만료된 경우에만 실행됨
- 그렇다면 왜 staleTime의 default value는 `0`일까?
  >React Query 개발자 Tanner Linsley : "Why is my data not updating?!"
  - 데이터는 항상 만료 상태이므로 서버에서 다시 가져와야 한다는 의미

#### staleTime vs. cacheTime
- `staleTime`은 **리페칭할때 고려사항**
- **캐시는 나중에 다시 필요할 수도 있는 데이터용**
  - 특정 쿼리에 대한 활성 `useQuery`가 없는 경우, 해당 데이터는 "콜드 스토리지"로 이동
  - 구성된 `cacheTime`이 지나면 캐시의 데이터가 *만료*(기본은 5분, 5000ms)
    - cacheTime이 관찰하는 시간의 양은 특정 쿼리에 대한 `useQuery`가 활성화된 후 경과한 시간
  - 캐시가 만료되면 가비지 컬렉션이 실행
    - 클라이언트는 (캐시되었던) 데이터를 더이상 사용할 수 없음
- 데이터가 캐시에 있는 동안에는 페칭(Fetching)할 때 사용될 수 있음 => `캐시 데이터를 재사용`
  - 페칭을 멈추는 것이 아니기 때문에 서버의 최신 데이터로 새로고침이 가능한 것
  - 만료된 데이터가 클라이언트에 꼭 보여지지 않아야한다면, `cacheTime`을 0으로 설정하는 것도 가능
