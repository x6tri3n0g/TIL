import { createSlice } from '@reduxjs/toolkit';

let uniqId = 0;

const todoSlice = createSlice({
	name: 'todos',
	initialState: {
		filterType: 'all',
		items: [],
	},
	reducers: {
		// todo 추가하기
		add: {
			reducer: (state, action) => {
				state.items.push(action.payload);
			},

			prepare: (text) => {
				return {
					payload: {
						id: ++uniqId,
						done: false,
						text,
					},
				};
			},
		},

		// todo done으로 상태 변경하기
		check: (state, action) => {
			// 변경되는 아이템의 id와 체크 상태인 checked 값을 받아서 적용
			const { id, checked } = action.payload;

			// immer를 사용하고 있기 때문에 `state.item = `와 같이 사용해야함(기존 상태는 유지해야하므로)
			state.items = state.items.map((todo) =>
				todo.id === id ? { ...todo, done: checked } : todo,
			);
		},

		// todo의 text 상태 변경하기
		edit: (state, action) => {
			const { id, text } = action.payload;

			state.items = state.items.map((todo) =>
				todo.id === id ? { ...todo, text } : todo,
			);
		},

		// todo 삭제하기
		remove: (state, action) => {
			const id = action.payload;

			state.items = state.items.filter((todo) => todo.id !== id);
		},

		// done 상태에 따라 목록 필터링하기
		filter: (state, action) => {
			state.filterType = action.payload;
		},

		// todo done 상태 목록 제거하기
		clearCompleted: (state) => {
			state.items = state.items.filter((todo) => !todo.item);
		},

		// todo 목록의 done 상태 변경하기(모두 done: true로 변경하거나 false로 변경하는 기능)
		checkAll: (state, action) => {
			const done = action.payload;

			state.items = state.items.map((todo) => ({
				...todo,
				done,
			}));
		},
	},
});

export const { add, check, edit, remove, filter, clearCompleted, checkAll } =
	todoSlice.actions;

// add('Hello'); { type: 'todos/add', payload: { id: 1, done: false, text: 'Hello' }

export default todoSlice.reducer;

// initialState : reducer의 state의 값을 정의
// (state, action) => ... 의 state가 바로 최초 initialState
// action이 dispatch 될 때마다 reducer가 동작하여 계속 state를 바꾸는 식으로 Redux는 작동

// redux toolkit에서는 기본적으로 immer가 내장되어 있어 push가 사용가능
// 기존 redux에서는 immutable하게 작성해야 했음

// prepare는 payload를 한 번 거치는 미들웨어 같은 함수
// action을 dispatch 할 때, action은 매개변수를 받는데, 이 매개변수의 값을 '전처리'하는 역할
// 일반적으로 prepare가 없는 형태가 일반적

// action 함수를 전처리해야 한다면 reducer와 prepare를 정의하고, 그렇지 않다면 기본값이 reducer
