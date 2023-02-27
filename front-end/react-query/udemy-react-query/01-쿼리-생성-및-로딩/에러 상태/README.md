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