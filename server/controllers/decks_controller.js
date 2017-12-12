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

        let decks = await db.get_user_decks([req.params.id]);
        if (decks.length > 0) {
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

    // Mark - Dec 6 - get all user favorited decks and their associated cards
    getFavoriteDecks: async (req, res, next) => {
        const db = req.app.get('db');
        let favArr = await db.get_fav_decks([req.params.id]);
        if (favArr[0].favorites.length > 0) {
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
        // console.log(favArr[0].favorites);
        let newFavArr = favArr[0].favorites.concat([req.params.deckId]);
        // console.log(newFavArr, "Hi");
        db.update_favorite_deck([newFavArr, req.user.id])
            .then(arr => {
                // console.log("Favorite Array:", arr)
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
        // console.log(favArr[0].favorites);
        let newFavArr = favArr[0].favorites.filter(e => e !== Number(req.params.deckId));
        // console.log(newFavArr, "Hi");
        db.update_favorite_deck([newFavArr, req.user.id])
            .then(arr => {
                // console.log("Favorite Array:", arr)
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
        db.find_parent_decks([req.params.id])
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
        const { deck_name, category } = req.body

        db.create_deck([deck_name, category])
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
        const { params } = req;

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
