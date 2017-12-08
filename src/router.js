import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CreateCard from './Components/View/CreateCard';
import Favorites from './Components/View/Favorites';
import Landing from './Components/View/Landing';
import Home from './Components/View/Home';
import MyDecks from './Components/View/MyDecks';
import Search from './Components/View/Search';
import Wrapper from './Components/View/Wrapper';


export default (
    <div>
        <Switch>
            <Route exact path='/' component={Landing} />
            <Route path='/home' component={Home} />
            <Route path='/my-decks/:id' component={MyDecks} />
            <Route path='/favorites' component={Favorites} />
            <Route path='/search' component={Search} />
            <Route path='/create-card' component={CreateCard} />
            <Route path='/viewer' component={Wrapper} />
        </Switch>
    </div>
)

