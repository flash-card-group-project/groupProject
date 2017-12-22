const data = require('./data.js');
//Natalia's
module.exports={
    searchForDecks: (input) => {
        let found = data.filter(item=>{
            let name = item.deck_name.toLowerCase();
            let newInput = input.toLowerCase()
            return name.includes(newInput)
        })
        return found[0].deck_name;
    }, 

    searchForPublic: () => {
        let publicDecks = data.map(item => {
            return item.public===true;
        })
        return publicDecks[0];
    },

    searchForObject: () => {
        let publicDecks = data.map(item => {
            return item.public===true;
        })
        return typeof(publicDecks);
    }

}
