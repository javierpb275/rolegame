/*
const handleProfileGet = (req, res, db) => {
    const { id_user } = req.params;
    db.select('*').from('user_character').where({id_user})    
    .then(user => {
        if (user.length) {
       res.json(user[0]);
    } else {
        res.status(400).json('Not found');
      }
    })
    .catch(err => res.status(400).json('error getting user'));
}

module.exports = {
    handleProfileGet: handleProfileGet
};
*/