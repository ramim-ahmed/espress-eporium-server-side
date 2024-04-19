const express = require("express");
const { coffeeController } = require("./coffee.controller");
const router = express.Router();

router.get("/", coffeeController.getAllCoffees);
router.get("/:id", coffeeController.getSingleCoffee);
router.post("/create-coffee", coffeeController.createCoffee);

module.exports.coffeeRoutes = router;
