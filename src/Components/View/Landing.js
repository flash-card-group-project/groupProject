import React from 'react';
import Typist from 'react-typist';
import cardDeck from '../Assets/flashcards-deck.jpg';

export default function Landing() {
    return (
        <main className='landing_body'>
            <section className='focal_point'>
                <h1 className='title_bg'>Tech Decks</h1>
                <Typist>
                    <h2 className='title_md'>Build it, Practice it, Ace it</h2>
                </Typist>
                <a href={process.env.REACT_APP_LOGIN}><button>Sign In / Register</button></a>
            </section>
            <article className='steps'>
                <h2 className='title_md'>Getting Started</h2>
                <div className="create_deck_desc">
                    <img src={cardDeck} alt='deck_image' className='img_card' />
                    <div>
                        <h2 className='title_sml'>Create Deck</h2>
                        <p>Start by naming a new deck and giving it a category. You can add as many cards and sub-decks as you want! </p>
                    </div>
                </div>
                <div className="create_card_desc">
                    <div className="card_desc">
                        <h2 className='title_sml'>Create Card</h2>
                        <p>For every card, add a question on the front and the answer on the back.</p>
                    </div>
                    <div className="card_example">
                        <p className='description_card'> What does .reverse() do?</p>
                        <img src='http://www.clker.com/cliparts/g/y/g/4/r/h/tan-index-card.svg' alt='card_image' className='img_card' />
                        <p className="answer_desc">.reverse() is a prototype method that reverses the order of an array</p>
                    </div>
                </div>
                <section className="study_desc">
                    <div>
                        <h2 className='title_sml'>Study</h2>
                        <p> Once your deck is filled up with your custom-made cards, you can study them by viewing each card one at a time.
                    </p>
                    </div>
                    <img src='https://www.simplebackpain.com/images/computeruser.jpg' alt='study_image' className='img_card' />
                </section>
            </article>
        </main>
    )
}

