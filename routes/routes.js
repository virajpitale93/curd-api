const router = require('express').Router();
const productController = require("../controller/productController");

router.post("/createproducts", productController.product_create);
router.get("/", productController.product_all);
router.get("/prodkey?", productController.product_details);
router.put("/:updateproduct", productController.product_update);
router.delete("/:_id", productController.product_delete);

module.exports = router;