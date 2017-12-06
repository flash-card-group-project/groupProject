module.exports = {
    //

    //all Decks to search through:
    getAllPublicDecks: (req, res, next) => {
        const db = req.app.get('db')

        db.get_all_decks()
        .then(decks => {
            res.status(200).send(decks)
        }).catch(err => res.status(500).send(err));
        
    },

    //decks that a User created:
    allParentDecks: (req, res, next) => {
        const db = req.app.get('db')
        // const { params } = req;

    // console.log("hi", req.body.user)

        db.find_parent_decks([2])   //test again after login is working
             .then(decks => {
                res.status(200).send(decks)
            }).catch(err => console.log(err));
        },

    decksByCategory: (req, res, next) => {
        const db = req.app.get('db')
        const { query } = req;
        // console.log("Hi", req);

        db.decks_by_category(query.term)
            .then(deck => {
                res.status(200).send(deck)
            }).catch(err => res.status(500).send(err));
    },

    userDecks: (req, res, next) => {
        const db = req.app.get('db')
        const {params} = req;
        // console.log("gets here")

        db.get_user_decks([params.id])
            .then(decks => {
                res.status(200).send(decks)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    createDeck: (req, res, next) => {
        const db = req.app.get('db')
        const { deck_name, category, deck_card, public } = req.body

        db.create_deck([name, category, deck_card, public])
            .then(deck => {
                res.status(200).send(deck)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    deleteDeck: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.delete_deck([params.id])
            .then(() => {
                res.status(200).send("Deleted!")
                    .catch((err) => res.status(500).send(err));
            })
    },

    editDeck: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.edit_deck([params.id])
            .then(deck => {
                res.status(200).send(deck)
                    .catch((err) => res.status(500).send(err));
            })
    }, 

    getFavorites: (req, res, next) => {
        const db = req.app.get('db')
        const {params} = req;
    
        db.get_favorites([params.id])
            .then(favs => {
                res.status(200).send(favs)
            }).catch(err => console.log(err));
    },

    // getStudy:(req, res, next) => {
    //     const db = req.app.get('db')
       
    //     db.get_study([])
    //         .then(deck => {
    //             res.status(200).send(deck)
    //         }).catch(err => console.log(err));
    // },

    // getChildren: (req, res, next) => {
    //     const db = req.app.get('db')
        
    //     db.find_parent_decks()
    //         .then(decks => {
    //             res.status(200).send(decks)
    //         }).catch(err => console.log(err));
    // }
}