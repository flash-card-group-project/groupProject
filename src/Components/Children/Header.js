import React from 'react';
import { Link } from 'react-router-dom';

export default function Header(props){

    return (
        <section>
            <nav className='nav_links'>
                <div><Link to='/home'>H</Link></div>
                <div><Link to='/search'>SEARCH</Link></div>                
                <div><Link to='/my-decks/:id'>MD</Link></div>
                <div><Link to='/favorites'>FAV</Link></div>
                <a href={process.env.REACT_APP_LOGOUT}><div>OUT</div></a>
            </nav>
        </section>
    )
}