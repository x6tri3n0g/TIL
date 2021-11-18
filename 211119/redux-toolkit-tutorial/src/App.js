import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Info from './components/Info';

function App() {
	return (
		<React.Fragment>
			<section className='todoapp'>
				<Header />
				<Main />
				<Footer />
			</section>
			<Info />
		</React.Fragment>
	);
}

export default App;
