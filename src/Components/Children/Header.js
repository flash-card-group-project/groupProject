import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
            <div>
                <ul className='nav_links'>
                    <Link to='/home'><li>HOME</li></Link>
                    <Link to='/my_decks'><li>MY DECKS</li></Link>
                    <Link to='/favorites'><li>FAVORITES</li></Link>
                    <a href={process.env.REACT_APP_LOGOUT}><p>LOG OUT</p></a>
                </ul>
            </div>
    )
}