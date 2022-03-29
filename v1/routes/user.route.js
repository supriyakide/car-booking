const router = require("express").Router();
const UserCtrl = require("../controllers/user.controller");

router.post("/", UserCtrl.createUser);
router.put("/:id", UserCtrl.updateUser);
router.delete("/:id", UserCtrl.deleteUser);
router.get("/:id", UserCtrl.getSingleUser);
router.get("/", UserCtrl.getAllUser);

module.exports = router;
