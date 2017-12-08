import React from 'react';

export default function Landing() {
    return (
        <main className='landing_body'>
            <nav className='nav_links'/>
            <section className='focal_point'>
                <h1>Flash Toolkit</h1>
                <h2>Create, Study, Shuffle, Repeat</h2>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In / Register</button></a>
            </section>
            <section className='steps'>
                <h2>Getting Started</h2>
                <img  alt='deck_image' className='card'/>
                {/* <h2>Create Deck</h2> */}
                <p className='card'>will explain how to create a deck?</p>
                <img alt='card_image' className='card'/>
                {/* <h2>Create Card</h2> */}
                <p className='card'>will show how to create a card</p>
                <img alt='study_image'className='card' />
                {/* <h2>Study</h2> */}
                <p className='card'>will show study, shuffle etc..</p>
            </section>
        </main>
    )
}

