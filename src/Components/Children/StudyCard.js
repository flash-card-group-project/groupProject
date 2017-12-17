import React, { Component } from 'react';

export default class StudyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState({
            question: !this.state.question
        })
    }

    render() {
        console.log(this.props);
        if (this.state.question === true) {
            return (
                <div>
                    <div className='card-cover'>
                        <div className='card-question'>
                            {this.props.question}
                        </div>
                    </div>
                    <div className='flip_btn_section'>
                        <button onClick={this.handleClick} className='flip_btn'>See Answer</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <div className='card-cover'>
                        <div className='card-question'>
                            {this.props.answer}
                        </div>
                    </div>
                    <div className='flip_btn_section'>
                        <button onClick={this.handleClick} className='flip_btn'>See Question</button>
                    </div>
                </div>
            )
        }
    }
}