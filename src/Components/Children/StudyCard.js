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
        // console.log(this.props);
        if (this.state.question === true) {
            return (
                <div className='container'>
                    <div className='card-cover-study'>
                        <div className='front'>
                            {this.props.question}
                        </div>
                    </div>
                    <div className='bottom_of_carousel'>
                        <div className='flip_btn'>
                            <button onClick={this.handleClick}>See Answer</button>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='container'>
                    <div className='card-cover-study'>
                        <div className='back'>
                            {this.props.answer}
                        </div>
                    </div>
                    <div className='bottom_of_carousel'>
                        <div className='flip_btn'>
                            <button onClick={this.handleClick}>See Question</button>
                        </div>
                    </div>
                </div>
            )
        }
    }
}