import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
            <section>
                <div className='nav_links'>
                    <Link to='/home'><div>HOME</div></Link>
                    <Link to='/my-decks/:id'><div>MY DECKS</div></Link>
                    <Link to='/favorites'><div>FAVORITES</div></Link>
                    <a href={process.env.REACT_APP_LOGOUT}><div>LOG OUT</div></a>
                </div>
            </section>
    )
}