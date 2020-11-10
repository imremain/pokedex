import React from 'react';
import { Link } from 'react-router-dom';

const Menu = (props) => {
    <nav>
        <ul id='navigation'>
            <li className='active'><Link to='/'>Home</Link></li>
            <li><Link to='/pokemon'>Abilities</Link></li>
            <li className='button-header'><Link to='/' className='btn btn3'>Start</Link></li>
        </ul>
    </nav>
}

export default Menu;