function Todo(props) {
	return (
		<li className='completed'>
			<div className='view'>
				<input className='toggle' type='checkbox' checked />
				<label>Taste JS</label>
				<button className='destroy' />
			</div>
			<input className='edit' value='Create a TodoMVC template' />
		</li>
	);
}

export default Todo;
