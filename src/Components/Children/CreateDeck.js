//erin flesh out starting 12/7
import React, { Component } from 'react';

class CreateDeck extends Component {
    render() {
        return (
            <div>
                <div>
                    <input placeholder="What do you want to call your deck?" className="title-input"/>
                    <input placeholder="What category is this in?" className="category-input" />
                    <div className="buttons">
                        <button>Cancel</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateDeck;