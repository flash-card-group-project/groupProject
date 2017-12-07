import React, { Component } from 'react';

class CreateCard extends Component {
    render() {
        return (
            <main className='create_card_bod'>
                <section className='box1'>
                    <textarea placeholder='please enter your question here..'className='card2' />
                    <div className='btn_positioning'>
                        <button className='med_btn'>MC</button>
                        <button className='med_btn'>URL</button>
                    </div>
                </section>
                <section className='box1'>
                    <textarea placeholder='please enter your answer here...'className='card2' />
                    <div className='btn_positioning'>
                        <button className='lrg_btn'>save</button>
                    </div>
                </section>
            </main>
        )
    }
}

export default CreateCard;