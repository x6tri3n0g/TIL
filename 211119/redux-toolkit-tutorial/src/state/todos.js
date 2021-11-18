import { createSlice } from '@reduxjs/toolkit';

let uniqId = 0;

const todoSlice = createSlice({
	name: 'todos',
	// initialState : reducer의 state의 값을 정의
	// (state, action) => ... 의 state가 바로 최초 initialState
	// action이 dispatch 될 때마다 reducer가 동작하여 계속 state를 바꾸는 식으로 Redux는 작동
	initialState: {
		filterType: 'all',
		items: [],
	},
	reducers: {
		// todos/add
		add: {
			reducer: (state, action) => {
				// redux toolkit에서는 기본적으로 immer가 내장되어 있어 push가 사용가능
				// 기존 redux에서는 immutable하게 작성해야 했음
				state.items.push(action.payload);
			},
			// prepare는 payload를 한 번 거치는 미들웨어 같은 함수
			// action을 dispatch 할 때, action은 매개변수를 받는데, 이 매개변수의 값을 '전처리'하는 역할
			// 일반적으로 prepare가 없는 형태가 일반적
			prepare: (text) => {
				// action 함수를 전처리해야 한다면 reducer와 prepare를 정의하고, 그렇지 않다면 기본값이 reducer
				return {
					payload: {
						id: ++uniqId,
						done: false,
						text,
					},
				};
			},
		},
	},
});

export const { add } = todoSlice.actions;

// add('Hello'); { type: 'todos/add', payload: { id: 1, done: false, text: 'Hello' }

export default todoSlice.reducer;
