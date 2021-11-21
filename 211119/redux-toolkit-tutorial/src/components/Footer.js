import { useDispatch, useSelector } from 'react-redux';
import {
	filter as filterTodo,
	clearCompleted as clearCompletecTodo,
} from '../state/todos';

const filterTypeSelector = (state) => state.todos.filterType;
const todoCountSelector = (state) =>
	state.todos.items.filter((todo) => !todo.done).length;

function Footer() {
	const dispatch = useDispatch();
	const filterType = useSelector(filterTypeSelector);
	const todoCount = useSelector(todoCountSelector);

	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>{todoCount}</strong> item left
			</span>
			<ul className='filters'>
				<li>
					<a
						className={filterType === 'all' ? 'selected' : ''}
						href='#/'
						onClick={() => dispatch(filterTodo('all'))}>
						All
					</a>
				</li>
				<li>
					<a
						className={filterType === 'do' ? 'selected' : ''}
						href='#/active'
						onClick={() => dispatch(filterTodo('do'))}>
						Active
					</a>
				</li>
				<li>
					<a
						className={filterType === 'done' ? 'selected' : ''}
						href='#/completed'
						onClick={() => dispatch(filterTodo('done'))}>
						Completed
					</a>
				</li>
			</ul>
			<button
				className='clear-completed'
				onClick={() => dispatch(clearCompletecTodo())}>
				Clear completed
			</button>
		</footer>
	);
}

export default Footer;
