import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from '@reduxjs/toolkit';
import { checkAll } from '../../state/todos';
import Todo from './Todo';

const todosSelector = (state) => state.todos.items;
const filterTypeSelector = (state) => state.todos.filterType;

// createSelector는 selector들을 매개변수로 받고, 맨 마지막 매개변수는 이 selector들의 결과를 각각 순서에 맞게 매개변수로 받는 selector를 매개변수로 받습니다.
// 즉, (items, filterType) => ... 에서 items와 filterType은 todosSelector, filterTypeSelector의 리턴값이 들어옵니다.
const filteredTodosSelector = createSelector(
	todosSelector,
	filterTypeSelector,
	(items, filterType) => {
		switch (filterType) {
			case 'do':
				return items.filter((todo) => !todo.done);
			case 'done':
				return items.filter((todo) => todo.done);
			default:
				return items;
		}
	},
);

const isAllCheckedSelector = (state) =>
	state.todos.items.every((todo) => todo.done);

function Main() {
	const dispatch = useDispatch();
	const todos = useSelector(filteredTodosSelector);
	const Todos = todos.map((todo) => <Todo key={todo.id} {...todo} />);
	const isAllChecked = useSelector(isAllCheckedSelector);

	return (
		<section className='main'>
			<input
				id='toggle-all'
				className='toggle-all'
				checked={isAllChecked}
				type='checkbox'
				onChange={(e) => dispatch(checkAll(e.target.checked))}
			/>
			<label htmlFor='toggle-all'>Mark all as complete</label>
			<ul className='todo-list'>{Todos}</ul>
		</section>
	);
}

export default Main;
