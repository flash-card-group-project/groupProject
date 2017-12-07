import React from 'react';

export default function Landing() {
    return (
        <main className='landing_body'>
            <section className='focal_point'>
                <h1>Flash Toolkit</h1>
                <h2>Create, Study, Shuffle, Repeat</h2>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In / Register</button></a>
            </section>
            <section className='steps'>
                <h2>Getting Started</h2>
                <img src='https://d4iqe7beda780.cloudfront.net/resources/static/main/image/aus062.jpg' alt='deck_image' className='card'/>
                {/* <h2>Create Deck</h2> */}
                <p className='card'>will explain how to create a deck?</p>
                <img src='https://d4iqe7beda780.cloudfront.net/resources/static/main/image/aus197.jpg' alt='card_image' className='card'/>
                {/* <h2>Create Card</h2> */}
                <p className='card'>will show how to create a card</p>
                <img src='http://dev2.bryanu.edu/wp-content/uploads/2017/06/Location-online.jpg' alt='study_image'className='card' />
                {/* <h2>Study</h2> */}
                <p className='card'>will show study, shuffle etc..</p>
            </section>
        </main>
    )
}

