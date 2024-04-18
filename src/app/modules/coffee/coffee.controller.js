const httpStatus = require("http-status");
const { coffeeService } = require("./coffee.service");

const createCoffee = async (req, res) => {
  try {
    const data = req.body;
    const result = await coffeeService.createCoffee(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "created new coffe succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "created new coffe failed!!",
      error,
    });
  }
};

const getAllCoffees = async (req, res) => {
  try {
    const result = await coffeeService.getAllCoffees();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch all coffe succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch all coffe failed!!",
      error,
    });
  }
};

module.exports.coffeeController = {
  createCoffee,
  getAllCoffees,
};
