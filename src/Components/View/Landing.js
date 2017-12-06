import React, { Component } from 'react';


class Landing extends Component {
    render() {

        return (
            <main>
                <section>
                    <h1>Flash Toolkit</h1>
                   
                     <h2>Create,Study,Shuffle,Repeat</h2> 
                    <a href={process.env.REACT_APP_LOGIN}><button>login</button></a>
                </section>
                <section>
                    <h2>Getting Started</h2>
                    <div>
                        <img alt='deck_image' />
                        <h2>Create Deck</h2>
                        <p>Lorem ipsum will explain how to
                      create a deck?
                  </p>
                        <img alt='card_image' />
                        <h2>Create Card</h2>
                        <p>will show how to create a card</p>
                        <img alt='study_image' />
                        <h2>Study</h2>
                        <p>will show study, shuffle etc..</p>
                    </div>
                </section>
            </main>
        )
    }
}

export default Landing;