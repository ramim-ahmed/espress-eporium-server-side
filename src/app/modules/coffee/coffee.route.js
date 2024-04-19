const express = require("express");
const { coffeeController } = require("./coffee.controller");
const router = express.Router();

router.get("/", coffeeController.getAllCoffees);
router.post("/create-coffee", coffeeController.createCoffee);
router.get("/:id", coffeeController.getSingleCoffee);
router.patch("/:id", coffeeController.udpateCoffee);
router.delete("/:id", coffeeController.deleteCoffee);

module.exports.coffeeRoutes = router;
