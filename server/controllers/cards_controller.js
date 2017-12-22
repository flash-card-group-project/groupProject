
module.exports = {


    createCard: (req, res, next) => {
        const db = req.app.get('db');
        const { question, answer, multiple1, multiple2, multiple3, multiple4 } = req.body;
        const deck_id = Number(req.params.deck_id);
        // console.log("create card back end",question, answer, multiple1, multiple2, multiple3, multiple4 ,deck_id)
        db.create_card([deck_id,question, answer, multiple1, multiple2, multiple3, multiple4])
            .then(card => {
                res.status(200).send(card)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    // editCard: (req, res, next) => {
    //     const db = req.app.get('db')
    //     const { params } = req;

    //     db.edit_card([params.id])
    //         .then(card => {
    //             res.status(200).send(card)
    //                 .catch((err) => res.status(500).send(err));
    //         })
    // },

    deleteCard: (req, res, next) => {
        const db = req.app.get('db')
        db.delete_card([req.params.cardId])
            .then(card => {
                res.status(200).send(card)
            })
            .catch((err) => res.status(500).send(err));
    }

}