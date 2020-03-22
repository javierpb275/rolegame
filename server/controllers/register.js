const handleRegister = (req, res, db, bcrypt) => {
  const { email, name, password, idclasstype } = req.body;
  if (!email || !name || !password) {
    return res.status(400).json("incorrect form submission");
  }

  const hash = bcrypt.hashSync(password);

  /*db("class_type")
    .where({ id_class_type: Number(idclasstype) })
    .then(rows => console.log(rows));*/

  db.transaction(trx => {
    return db("login")
      .transacting(trx)
      .insert({ email: email, password: hash })
      .returning("id_login")
      .then(idLogin => {
        return db("class_type")
          .transacting(trx)
          .where({ id_class_type: Number(idclasstype) })
          .then(rows => {
            return db("user_character")
              .transacting(trx)
              .insert({
                name: name,
                attack: rows[0].attack,
                hp: rows[0].hp,
                experience: 0,
                level: 1,
                joined: new Date(),
                id_login: Number(idLogin),
                id_class_type: rows[0].id_class_type
              })
              .then(trx.commit)
              .catch(trx.rollback);
          })
          .then(trx.commit)
          .catch(trx.rollback);
      })
      .then(trx.commit)
      .catch(trx.rollback);
  })
    .then(function() {
      res.status(200).json("Bien");
    })
    .catch(function(err) {
      res.status(400).json("Error");
    });
};

module.exports = {
  handleRegister: handleRegister
};
