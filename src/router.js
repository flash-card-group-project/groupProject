import React from 'react';
import {Route, Switch} from 'react-router-dom';
import CreateCard from './Components/View/CreateCard';
import DeckViewerM from './Components/View/DeckViewerM';
import DeckViewerD from './Components/View/DeckViewerD';
import Favorites from './Components/View/Favorites';
import Landing from './Components/View/Landing';
import Home from './Components/View/Home';
import MyDecks from './Components/View/MyDecks';
import Search from './Components/View/Search';

export default(
    <div>
        <Switch>
            <Route exact path='/' component={Landing}/>
            <Route path='/home' component={Home}/>
            <Route path='/my_decks' component={MyDecks}/>
            <Route path='/favorites' component={Favorites}/>
            <Route path='/search' component={Search}/>
            {/* <Route path='' component={}/>
            <Route path='' component={}/>
            <Route path='' component={}/> */}
        </Switch>
    </div>
)

