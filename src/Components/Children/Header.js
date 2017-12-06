import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
            I am The header
            <div>
                <ul>
                    <Link to='/home'><li>HOME</li></Link>
                    <Link to='/my_decks'><li>MY DECKS</li></Link>
                    <Link to='/favorites'><li>FAVORITES</li></Link>
                    <Link to='/'><li>LOG OUT</li></Link>
                </ul>
            </div>
        </div>
    )
}