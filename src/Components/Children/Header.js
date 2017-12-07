import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <section>
            <div className='nav_links'>
                <div><Link to='/home'>HOME</Link></div>
                <div><Link to='/my-decks/:id'>MY DECKS</Link></div>
                <div><Link to='/favorites'>FAVORITES</Link></div>
                <a href={process.env.REACT_APP_LOGOUT}><div>LOG OUT</div></a>
            </div>
        </section>
    )
}