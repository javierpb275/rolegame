/*
const handleRegisterClass = (req, res, db) => {
    const { id_class_type } = req.body;
    db.transaction(trx => {
        trx.insert({
            id_class_type: id_class_type, 
        })
        .into('user_character')
        .returning('id_class_type')
        .then(idclasstype => {
            return trx('user_character')
            .returning('*')
            .insert({
                id_class_type: idclasstype[0],
            })
            .then(user_character => {
                res.json(user_character[0]);
            })
        })
        .then(trx.commit)
        .catch(trx.rollback)
    })
    .catch(err => res.status(400).json('unable to register'));
}

module.exports = {
    handleRegisterClass: handleRegisterClass,
};

*/