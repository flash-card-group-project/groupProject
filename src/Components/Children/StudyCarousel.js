import React, { Component } from 'react';
import { connect } from 'react-redux';
import Carousel from 'nuka-carousel';
import StudyCard from './StudyCard';

class StudyCarousel extends Component {
    render() {
        console.log('CURRENT_DECK', this.props.currentDeck);
        const cardList = this.props.currentDeck.cards
            ? this.props.currentDeck.cards.map((card, i) => {
                return (
                    <div key={i}>
                        <StudyCard
                            question={card.question}
                            answer={card.answer}
                        />
                    </div>
                )
            })
            : <h3>'Please create cards for this deck.'</h3>;
        return (
            <div className='carousel'>
                <Carousel>
                    {cardList}
                </Carousel>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck
    };
}

export default connect(mapStateToProps, {})(StudyCarousel);