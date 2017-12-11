import React from 'react';
import Typist from 'react-typist';
export default function Landing() {
    return (
        <main className='landing_body'>
            <section className='focal_point'>
            <Typist>
                <h1 className='title_bg'>Flash Toolkit</h1>
                
                <h2 className='title_sml'>Create, Study, Shuffle, Repeat</h2>
                </Typist>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In / Register</button></a>
            </section>
            <section className='steps'>
                <h2 className='title_sml'>Getting Started</h2>
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

