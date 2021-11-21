import { useSelector } from 'react-redux';
import Todo from './Todo';

const todosSelector = (state) => state.todos.items;

function Main() {
	const todos = useSelector(todosSelector);
	const Todos = todos.map((todo) => <Todo key={todo.id} {...todo} />);

	return (
		<section className='main'>
			<input id='toggle-all' className='toggle-all' type='checkbox' />
			<label htmlFor='toggle-all'>Mark all as complete</label>
			<ul className='todo-list'>{Todos}</ul>
		</section>
	);
}

export default Main;
