import React, { Component } from 'react';
import { createCard } from '../../ducks/reducer';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CreateCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questionInput: '',
            answerInput: ''
        }

        this.handleQuestion = this.handleQuestion.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.sendCard = this.sendCard.bind(this);
    }
    handleQuestion(e) {
        this.setState({
            questionInput: e.target.value
        })
    }
    handleAnswer(e) {
        this.setState({
            answerInput: e.target.value
        })
    }
    sendCard(e) {
        let body = {
            question: this.state.questionInput,
            answer: this.state.answerInput,
            multiple1: null,
            multiple2: null,
            multiple3: null,
            multiple4: null
        }
        this.props.createCard(body, this.props.match.params.deck_id);
    }

    render() {
        return (
            <main className='create_card_bod'>
                <section className='box1'>
                    <textarea placeholder='please enter your question here..'
                        className='card2'
                        onChange={this.handleQuestion} />
                    <div className='btn_positioning'>
                        <button className='lrg_btn'>MC</button>
                        <button className='lrg_btn'>URL</button>
                    </div>
                </section>
                <section className='box1'>
                    <textarea placeholder='please enter your answer here...'
                        className='card2'
                        onChange={this.handleAnswer} />
                    <div className='btn_positioning'>
                        <button  className='lrg_btn'
                            onClick={this.sendCard}>Create Card</button>
                        <Link to={`/viewer/${this.props.currentDeck.deck_id}`}><button className='lrg_btn'>Back to Deck</button></Link>
                    </div>
                </section>
            </main>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentDeck: state.currentDeck
    };
}

export default connect(mapStateToProps, { createCard })(CreateCard);