import React from 'react';
import Typist from 'react-typist';

export default function Landing() {
    return (
        <main className='landing_body'>
            <section className='focal_point'>
                <h1 className='title_bg'>Flash Toolkit</h1>
                <Typist>
                    <h2 className='title_md'>Create, Study, Shuffle, Repeat</h2>
                </Typist>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In / Register</button></a>
            </section>
            <section className='steps'>
                <h2 className='title_md'>Getting Started</h2>
                <h2 className='title_sml'>Create Deck</h2>
                <img src='https://ecdn.teacherspayteachers.com/thumbitem/Blank-Card-game-template-1268828-1402170315/original-1268828-1.jpg'alt='deck_image' className='img_card' />
                <p className='description_card'>  
                </p>
                <h2 className='title_sml'>Create Card</h2>
                <img  src='http://www.clker.com/cliparts/g/y/g/4/r/h/tan-index-card.svg' alt='card_image' className='img_card' />
                <p className='description_card'>
                </p>
                <h2 className='title_sml'>Study</h2>
                <img src='https://www.simplebackpain.com/images/computeruser.jpg'alt='study_image' className='img_card' />
                <p className='description_card'>
                </p>
            </section>
        </main>
    )
}

