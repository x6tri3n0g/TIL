function Todo({ id, done, text }) {
	return (
		<li className={done ? 'completed' : ''}>
			<div className='view'>
				<input checked={done} className='toggle' type='checkbox' />
				<label>{text}</label>
				<button className='destroy' />
			</div>
			<input className='edit' value='Create a TodoMVC template' />
		</li>
	);
}

export default Todo;
