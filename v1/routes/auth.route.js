const router = require("express").Router();
const { useLogin } = require("../controllers/auth.controller");
router.post("/", useLogin);

module.exports = router;
