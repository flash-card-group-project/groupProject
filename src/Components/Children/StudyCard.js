import React, { Component } from 'react';

export default class StudyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: true
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState({
            question: !this.state.question
        })
    }

    render() {
        console.log(this.props);
        if (this.state.question === true) {
            return (
                <div>
                    <div>
                        {this.props.question}
                    </div>
                    <button onClick={this.handleClick} >Flip</button>
                </div>
            )
        } else {
            return (
                <div>
                    <div>
                        {this.props.answer}
                    </div>
                    <button onClick={this.handleClick} >Flip</button>
                </div>
            )
        }
    }
}