import React, { Component } from 'react';
import { createCard } from '../../ducks/reducer';
import { connect } from 'react-redux';

class CreateCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentCard: {},
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
            multiple1:'',
            multiple2: '',
            multiple3: '',
            multiple4: ''
        }
        this.props.createCard(body);
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
                        <button className='lrg_btn'
                            onClick={this.sendCard}>save</button>
                    </div>
                </section>
            </main>
        )
    }

}
function mapStateToProps(state) {
   return {
       card:state.currentCard
   } 
}

export default connect(mapStateToProps, { createCard })(CreateCard);