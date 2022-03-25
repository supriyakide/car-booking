const router = require("express").Router();
const UserCtrl = require("../controllers/user.controller");

router.post("/", UserCtrl.createUser);
router.put("/:id", UserCtrl.updateUser);
router.delete("/:id", UserCtrl.deleteUser);
router.get("/:id", UserCtrl.getSingleUser);
router.get("/", UserCtrl.getAllUser);

module.exports = router;
UserModel.findOne({ _id: id })
.then((result) => {
  res.status(200).send({ data: result, message: "User record" });
})
.catch((err) => {
  res.status(404).send({ error: err, message: "the user not available" });
});

// http://localhost:8888/api/v1/users
