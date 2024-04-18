const express = require("express");
const { coffeeRoutes } = require("../modules/coffee/coffee.route");
const router = express.Router();

const moduleRoutes = [
  {
    path: "/coffees",
    route: coffeeRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route?.route);
});

module.exports.applicationRoutes = router;
