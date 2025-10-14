🧮 알고리즘 복잡도

## 1️⃣ 탐색 (Search)

| 알고리즘      | 평균 시간 복잡도 | 최악 시간 복잡도 | 공간 복잡도 | 비고                        |
| ------------- | ---------------- | ---------------- | ----------- | --------------------------- |
| Linear Search | O(n)             | O(n)             | O(1)        | 순차 탐색                   |
| Binary Search | O(log n)         | O(log n)         | O(1)        | 정렬된 데이터 필요          |
| Hash Search   | O(1)             | O(n)             | O(n)        | 해시 충돌 발생 시 최악 O(n) |

---

## 2️⃣ 정렬 (Sorting)

| 알고리즘       | 평균 시간  | 최악 시간  | 공간 복잡도 | 비고                     |
| -------------- | ---------- | ---------- | ----------- | ------------------------ |
| Bubble Sort    | O(n²)      | O(n²)      | O(1)        | 안정 정렬                |
| Insertion Sort | O(n²)      | O(n²)      | O(1)        | 거의 정렬된 경우 효율적  |
| Selection Sort | O(n²)      | O(n²)      | O(1)        | 교환 횟수 최소           |
| Merge Sort     | O(n log n) | O(n log n) | O(n)        | 안정 정렬                |
| Quick Sort     | O(n log n) | O(n²)      | O(log n)    | 불안정 정렬 (pivot 영향) |
| Heap Sort      | O(n log n) | O(n log n) | O(1)        | 불안정 정렬              |

---

## 3️⃣ 그래프 (Graph)

| 알고리즘             | 평균 시간  | 최악 시간  | 공간 복잡도 | 비고              |
| -------------------- | ---------- | ---------- | ----------- | ----------------- |
| BFS (너비 우선 탐색) | O(V + E)   | O(V + E)   | O(V)        | 큐 기반           |
| DFS (깊이 우선 탐색) | O(V + E)   | O(V + E)   | O(V)        | 재귀 또는 스택    |
| Dijkstra             | O(E log V) | O(E log V) | O(V + E)    | 우선순위 큐 사용  |
| Bellman-Ford         | O(V × E)   | O(V × E)   | O(V)        | 음수 가중치 허용  |
| Floyd–Warshall       | O(V³)      | O(V³)      | O(V²)       | 모든 쌍 최단 경로 |
| Kruskal (MST)        | O(E log E) | O(E log E) | O(V)        | Union-Find 필요   |
| Prim (MST)           | O(E log V) | O(E log V) | O(V + E)    | PQ + 인접 리스트  |

---

## 4️⃣ 트리 (Tree)

| 알고리즘                   | 평균 시간 | 최악 시간 | 공간 복잡도 | 비고           |
| -------------------------- | --------- | --------- | ----------- | -------------- |
| 트리 순회 (DFS/BFS)        | O(n)      | O(n)      | O(h)        | h: 트리 높이   |
| 이진 탐색 트리 탐색        | O(log n)  | O(n)      | O(1)        | 불균형 시 O(n) |
| AVL / Red-Black Tree 연산  | O(log n)  | O(log n)  | O(1)        | 균형 트리      |
| Segment Tree 쿼리/업데이트 | O(log n)  | O(log n)  | O(n)        | 구간합, RMQ 등 |

---

## 5️⃣ 다이나믹 프로그래밍 (Dynamic Programming)

| 알고리즘                    | 평균 시간 | 최악 시간 | 공간 복잡도 | 비고           |
| --------------------------- | --------- | --------- | ----------- | -------------- |
| Fibonacci (DP)              | O(n)      | O(n)      | O(n)        | 메모이제이션   |
| Knapsack (0/1)              | O(n × W)  | O(n × W)  | O(n × W)    | W: 용량        |
| LCS (최장 공통 부분수열)    | O(n × m)  | O(n × m)  | O(n × m)    | 2D DP 테이블   |
| Matrix Chain Multiplication | O(n³)     | O(n³)     | O(n²)       | DP 테이블 기반 |

---

## 6️⃣ 탐욕 (Greedy)

| 알고리즘           | 평균 시간  | 최악 시간  | 공간 복잡도 | 비고        |
| ------------------ | ---------- | ---------- | ----------- | ----------- |
| Activity Selection | O(n log n) | O(n log n) | O(1)        | 정렬 필요   |
| Huffman Coding     | O(n log n) | O(n log n) | O(n)        | PQ(힙) 기반 |
| Kruskal / Prim     | O(E log V) | O(E log V) | O(V)        | MST 문제    |

---

## 7️⃣ 문자열 (String)

| 알고리즘                 | 평균 시간 | 최악 시간 | 공간 복잡도          | 비고                |
| ------------------------ | --------- | --------- | -------------------- | ------------------- |
| Naive Pattern Matching   | O(n × m)  | O(n × m)  | O(1)                 | 기본 비교           |
| KMP (Knuth–Morris–Pratt) | O(n + m)  | O(n + m)  | O(m)                 | 접두사 테이블       |
| Rabin–Karp               | O(n + m)  | O(n × m)  | O(1)                 | 해시 충돌 시 O(n×m) |
| Trie 탐색                | O(L)      | O(L)      | O(ALPHABET_SIZE × L) | L: 단어 길이        |

---

## 8️⃣ 분할 정복 (Divide & Conquer)

| 알고리즘               | 평균 시간  | 최악 시간  | 공간 복잡도 | 비고                           |
| ---------------------- | ---------- | ---------- | ----------- | ------------------------------ |
| Binary Search          | O(log n)   | O(log n)   | O(1)        | 배열 절반 분할                 |
| Merge Sort             | O(n log n) | O(n log n) | O(n)        | 안정 정렬                      |
| Quick Sort             | O(n log n) | O(n²)      | O(log n)    | 피벗 영향                      |
| Closest Pair of Points | O(n log n) | O(n log n) | O(n)        | 분할 정복의 대표 기하 알고리즘 |

---

## 9️⃣ 백트래킹 (Backtracking)

| 알고리즘       | 평균 시간 | 최악 시간 | 공간 복잡도 | 비고           |
| -------------- | --------- | --------- | ----------- | -------------- |
| N-Queens       | O(N!)     | O(N!)     | O(N²)       | 제약 조건 탐색 |
| 순열/조합 생성 | O(n!)     | O(n!)     | O(n)        | 재귀 깊이 n    |
| Sudoku Solver  | O(9ⁿ)     | O(9ⁿ)     | O(n²)       | 제약 충족 탐색 |

---

## 🔟 기타 (유니온파인드 / 위상정렬 등)

| 알고리즘                  | 평균 시간 | 최악 시간 | 공간 복잡도 | 비고               |
| ------------------------- | --------- | --------- | ----------- | ------------------ |
| Union-Find (Disjoint Set) | O(α(n))   | O(α(n))   | O(n)        | α(n): 거의 O(1)    |
| Topological Sort          | O(V + E)  | O(V + E)  | O(V + E)    | DAG 전용           |
| Sliding Window            | O(n)      | O(n)      | O(1~k)      | 부분 구간 처리     |
| Two Pointers              | O(n)      | O(n)      | O(1)        | 배열 내 구간 합 등 |

---

## 🧾 복잡도 요약 맵 (한눈에 보기)

| 알고리즘 분류 | 평균 시간 복잡도  | 공간 복잡도 |
| ------------- | ----------------- | ----------- |
| 탐색          | O(log n) ~ O(n)   | O(1)        |
| 정렬          | O(n log n)        | O(1)~O(n)   |
| 그래프        | O(V + E) ~ O(V³)  | O(V)~O(V²)  |
| 트리          | O(log n) ~ O(n)   | O(h)~O(n)   |
| DP            | O(n²) ~ O(n³)     | O(n²)       |
| 탐욕          | O(n log n)        | O(n)        |
| 문자열        | O(n + m) ~ O(n×m) | O(m)        |
| 분할정복      | O(n log n)        | O(n)        |
| 백트래킹      | O(n!)             | O(n²)       |
| 기타          | O(V + E) ~ O(1)   | O(n)        |
