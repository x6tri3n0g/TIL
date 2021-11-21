import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { add as addTodo } from '../state/todos';

function Header() {
	const [input, setInput] = useState('');

	const dispatch = useDispatch();

	const handleAddTodo = (e) => {
		if (!(e.keyCode === 14 || e.key === 'Enter')) {
			return;
		}

		const text = input.trim();
		if (text === '') {
			return;
		}

		setInput('');
		dispatch(addTodo(text)); // dispatch()를 통해서 add()를 리턴. store의 state를 업데이트 한다.
	};

	return (
		<header className='header'>
			<h1>todos</h1>
			<input
				autoFocus
				className='new-todo'
				onInput={(e) => setInput(e.target.value)}
				onKeyDown={handleAddTodo}
				placeholder='What needs to be done?'
				value={input}
			/>
		</header>
	);
}

export default Header;
