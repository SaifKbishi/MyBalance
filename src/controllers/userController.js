exports.allAccess = (req, res) => {
 res.status(200).send("Public Content. controllers/userController");
};

exports.userBoard = (req, res) => {
 res.status(200).send("User Content. controllers/userController");
};

exports.adminBoard = (req, res) => {
 res.status(200).send("Admin Content. controllers/userController");
};
