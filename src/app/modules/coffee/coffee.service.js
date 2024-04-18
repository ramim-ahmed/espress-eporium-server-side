const Coffee = require("./coffee.model");

const createCoffee = async (data) => {
  const result = await Coffee.create(data);
  return result;
};

const getAllCoffees = async () => {
  const result = await Coffee.find({}).sort({ createdAt: "desc" });
  return result;
};

module.exports.coffeeService = {
  createCoffee,
  getAllCoffees,
};
