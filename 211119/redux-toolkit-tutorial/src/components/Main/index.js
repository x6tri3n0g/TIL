import Todo from './Todo';

function Main() {
	return (
		<section className='main'>
			<input id='toggle-all' className='toggle-all' type='checkbox' />
			<label htmlFor='toggle-all'>Mark all as completed</label>
			<ul className='todo-list' />
		</section>
	);
}

export default Main;
