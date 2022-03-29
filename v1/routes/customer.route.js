const router = require("express").Router();
const CustomerCtrl = require("../controllers/customer.controller");

router.post("/", CustomerCtrl.createCustomer);
router.put("/:id", CustomerCtrl.updateCustomer);
router.delete("/:id", CustomerCtrl.deleteCustomer);
router.get("/:id", CustomerCtrl.getSingleCustomer);
router.get("/", CustomerCtrl.getAllCustomers);

module.exports = router;
