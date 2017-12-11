module.exports = {

    getUserCard: (req, res, next) => {
        const db = req.app.get('db');
        console.log(req.body);

        db.get_user_card([req.params.id])
        .then(card => {
            res.status(200).send(card)
        })
        .catch((err) => {
            res.status(500).send(err)
        })
    },

    getCard: (req, res, next) => {
        const db = req.app.get('db')
        console.log("gets here")

        db.get_card([params.id])
            .then(card => {
                res.status(200).send(card)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    createCard: (req, res, next) => {
        const db = req.app.get('db')
        const { deck_id, question, answer, multiple1, multiple2, multiple3, multiple4 } = req.body

        db.create_card([deck_id, question, answer, multiple1, multiple2, multiple3, multiple4])
            .then(card => {
                res.status(200).send(card)
            })
            .catch((err) => {
                res.status(500).send(err)
            })
    },

    editCard: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.edit_card([params.id])
            .then(card => {
                res.status(200).send(card)
                    .catch((err) => res.status(500).send(err));
            })
    },

    deleteCard: (req, res, next) => {
        const db = req.app.get('db')
        const { params } = req;

        db.delete_card([params.id])
            .then(() => {
                res.status(200).send("Deleted!")
                    .catch((err) => res.status(500).send(err));
            })
    }

}