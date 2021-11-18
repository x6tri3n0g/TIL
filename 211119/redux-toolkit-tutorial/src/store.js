import { configureStore } from '@reduxjs/toolkit';
import todos from './state/todos';

// configureStore: 기존 Redux의 store를 쉽게 설정해주는 함수
export default configureStore({
	// reducer는 store의 상태를 구성한다.
	reducer: {
		todos,
	},
});
