const Coffee = require("./coffee.model");

const createCoffee = async (data) => {
  const result = await Coffee.create(data);
  return result;
};

const getAllCoffees = async () => {
  const result = await Coffee.find({}).sort({ createdAt: "desc" });
  return result;
};

const getSingleCoffee = async (id) => {
  const result = await Coffee.findOne({ _id: id });
  return result;
};

const udpateCoffee = async (id, data) => {
  const result = await Coffee.updateOne({ _id: id }, data);
  return result;
};

const deleteCoffee = async (id) => {
  const result = await Coffee.deleteOne({ _id: id });
  return result;
};

module.exports.coffeeService = {
  createCoffee,
  getAllCoffees,
  getSingleCoffee,
  deleteCoffee,
  udpateCoffee,
};
