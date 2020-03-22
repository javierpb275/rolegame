const handleSignin = (req, res, db, bcrypt) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json("incorrect form submission");
  }
  db.select("id_login", "email", "password")
    .from("login")
    .where("email", "=", email)
    .then(data => {
      const isValid = bcrypt.compareSync(password, data[0].password);
      if (isValid) {
        return db
          .select("*")
          .from("user_character")
          .where("id_login", "=", data[0].id_login)
          .then(userCharacter => {
            return db
              .select("id_class_type", "name")
              .from("class_type")
              .then(classTypeNames => {
                for (currentCharacter of userCharacter) {
                  for (className of classTypeNames) {
                    if (
                      currentCharacter["id_class_type"] ==
                      className["id_class_type"]
                    ) {
                      currentCharacter["class_type_name"] = className["name"];
                    }
                  }
                }
                res.json(userCharacter);
              });
          })
          .catch(err => res.status(400).json("unable to get user"));
      } else {
        res.status(400).json("wrong credentials");
      }
    })
    .catch(err => res.status(400).json("wrong credentials"));
};

module.exports = {
  handleSignin: handleSignin
};
