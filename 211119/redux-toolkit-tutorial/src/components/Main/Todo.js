import { useDispatch } from 'react-redux';
import { check as checkTodo, remove as removeTodo } from '../../state/todos';

function Todo({ id, done, text }) {
	const dispatch = useDispatch();

	return (
		<li className={done ? 'completed' : ''}>
			<div className='view'>
				<input
					checked={done}
					className='toggle'
					onChange={(e) =>
						dispatch(checkTodo({ id, checked: e.target.checked }))
					}
					type='checkbox'
				/>
				<label>{text}</label>
				<button
					className='destroy'
					onClick={() => dispatch(removeTodo(id))}
				/>
			</div>
			<input className='edit' value='Create a TodoMVC template' />
		</li>
	);
}

export default Todo;
