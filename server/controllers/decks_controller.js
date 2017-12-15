module.exports = {

    getUserInfo: (req, res, next) => {
        const db = req.app.get('db');

        db.get_user_info([req.params.id]).then(response => {
            res.status(200).send(response)
        }).catch(err => res.status(500).send(err))
    },

    //Mark - Dec 6 - get all user created decks and cards
    getUserDecks: async (req, res, next) => {
        const db = req.app.get('db');

        let decks = await db.get_user_decks([req.user.id]);  
        if (decks.length ) {
            let deckIDs = decks.map(deck => deck.deck_id);
            await db.cards.find({ parent_id: deckIDs })
                .then(cards => {
                    let fullDecks = decks.map(deck => {
                        deck.cards = cards.filter(card => card.parent_id === deck.deck_id)
                        return deck;
                    })
                    res.status(200).send(fullDecks);
                })
        } else {
            res.status(200).send('No decks found.');
        }
    },


    getCurrentDeck: async (req, res, next) => {
        const db = req.app.get('db');

        let deck = await db.get_current_deck([req.params.deck_id, req.user.id]);
      
      let cards = await db.cards.find({ parent_id: deck[0].deck_id })
      deck[0].cards = cards;
            res.status(200).send(deck)
    },
 



    // Mark - Dec 6 - get all user favorited decks and their associated cards
    getFavoriteDecks: async (req, res, next) => {
        const db = req.app.get('db');
        let favArr = await db.get_fav_decks([req.user.id]);
        if ( favArr.length ){
            // console.log('favArray: ', favArr[0].favorites)
            let favDecks = await db.decks.find({ deck_id: favArr[0].favorites });
            await db.cards.find({ parent_id: favArr[0].favorites })
                .then(cards => {
                    let fullFavDecks = favDecks.map(deck => {
                        deck.cards = cards.filter(card => card.parent_id === deck.deck_id)
                        return deck;
                    })
                    res.status(200).send(fullFavDecks);
                })
        } else {
            res.status(200).send('No decks found.');
        }
    },



    // this controller uses the same sql query (update_favorite_deck) as add_favorites (above)
    addToFavorites: async (req, res, next) => {
        const db = req.app.get('db');
        let favArr = await db.get_fav_decks([req.user.id]);
        console.log(req.user.id, 'This is from the addToFavorites endpoint.');
        let newFavArr = favArr[0].favorites.concat([req.params.deckId]);
        db.update_favorite_deck([newFavArr, req.user.id])
            .then(arr => {
                res.status(200).send(arr)
            })
            .catch(err => res.status(500).send("Bye")
            )
    },

    deleteFromFavorites: async (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.user.id);
        let favArr = await db.get_fav_decks([req.user.id]);
        console.log(req.user)
        let newFavArr = favArr[0].favorites.filter(e => e !== Number(req.params.deckId));
        db.update_favorite_deck([newFavArr, req.user.id])
            .then(arr => {
                res.status(200).send(arr)
            })
            .catch(err => res.status(500).send("Bye")
            )
    },



    //all Decks to search through:
    getAllPublicDecks: (req, res, next) => {
        const db = req.app.get('db')

        db.get_all_decks()
            .then(decks => {
                res.status(200).send(decks)
            }).catch(err => res.status(500).send(err));

    },

    privateToggle: (req, res, next) => {
        const db = req.app.get('db')

        db.private_toggle([req.params.deckid])
            .then(toggle => {
                res.status(200).send(toggle)
            }).catch(err => res.status(500).send(err));
    },

    //decks that a User created:
    allParentDecks: (req, res, next) => {
        const db = req.app.get('db')
// console.log("USER", req.user)
        db.find_parent_decks([req.user.id])   
            .then(decks => {
                res.status(200).send(decks)
            }).catch(err => console.log(err));
    },

    decksByCategory: (req, res, next) => {
        const db = req.app.get('db')
        const { query } = req;

        db.decks_by_category(query.term)
            .then(deck => {
                res.status(200).send(deck)
            }).catch(err => res.status(500).send(err));
    },

    userDecks: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;
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
        const { deck_name, category, deck_card, parent_id } = req.body

        db.create_deck([deck_name, category, deck_card, req.user.id, parent_id])
            .then(deck => {
                res.status(200).send(deck)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    deleteDeck: (req, res, next) => {
        const db = req.app.get('db')

        db.delete_deck([req.params.deckId, req.user.id])
            .then(() => {
                res.status(200).send(req.params.deckId)   

            }).catch((err) => res.status(500).send(err));
    },

    editDeck: (req, res, next) => {
        const db = req.app.get('db')
        const { category, deck_name } = req.body;
        console.log('are we getting to the server?', req.body);

        db.edit_deck([category, deck_name, Number(req.params.deck_id)])
            .then(deck => {
                res.status(200).send(deck)
            }).catch((err) => res.status(500).send(err));
    },

    getFavorites: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.get_favorites([params.id])
            .then(favs => {
                res.status(200).send(favs)
            }).catch(err => console.log(err));
    },
}
