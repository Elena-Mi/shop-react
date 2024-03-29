import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import Home from './Home';
import About from './About'
import Contacts from './Contacts';
import AboutProduct from './AboutProduct';

function App() {
  
  return (
		<Router>
			<nav>
				<Link to='/' className='link'>
					Main page
				</Link>
				<Link to='about' className='link'>
					About
				</Link>
				<Link to='contacts' className='link'>
					Contacts
				</Link>
				<Link to='/:title' className='link'>
					About Product
				</Link>
			</nav>

			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/contacts' element={<Contacts />} />
				<Route path='/:title' element={<AboutProduct />} />
			</Routes>
		</Router>
	)
}

export default App;
