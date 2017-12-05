module.exports= {
    allParentDecks: (req, res, next) => {
        const db = req.app.get('db')
        console.log(req.user)
        //([req.user.id])
        db.find_parent_decks([2])
        .then(decks => {
            // console.log(decks);
            res.status(200).send(decks)
            console.log('made it here?')
        }).catch(err => console.log(err));
    }
    // decksByCategory: (req, res, next) => {
    //     const db = req.app.get('db')
    //      db.decks_by_category
    // }
}