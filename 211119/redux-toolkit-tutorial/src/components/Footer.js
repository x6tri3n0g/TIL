import { useDispatch, useSelector } from 'react-redux';
import { filter as filterTodo } from '../state/todos';

const filterTypeSelector = (state) => state.todos.filterType;

function Footer() {
	const dispatch = useDispatch();
	const filterType = useSelector(filterTypeSelector);

	return (
		<footer className='footer'>
			<span className='todo-count'>
				<strong>0</strong> item left
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
			<button className='clear-completed'>Clear completed</button>
		</footer>
	);
}

export default Footer;
