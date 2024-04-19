const httpStatus = require("http-status");
const { coffeeService } = require("./coffee.service");

const createCoffee = async (req, res) => {
  try {
    const data = req.body;
    const result = await coffeeService.createCoffee(data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "created new coffee succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "created new coffee failed!!",
      error,
    });
  }
};

const getAllCoffees = async (req, res) => {
  try {
    const result = await coffeeService.getAllCoffees();
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch all coffee succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch all coffee failed!!",
      error,
    });
  }
};

const getSingleCoffee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await coffeeService.getSingleCoffee(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch coffee succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch coffee failed!!",
      error,
    });
  }
};

const udpateCoffee = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = await coffeeService.udpateCoffee(id, data);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Fetch coffee succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Fetch coffee failed!!",
      error,
    });
  }
};

const deleteCoffee = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await coffeeService.deleteCoffee(id);
    res.status(httpStatus.OK).json({
      success: true,
      message: "Updated coffee succesfully!!",
      data: result,
    });
  } catch (error) {
    res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "Udpated coffee failed!!",
      error,
    });
  }
};
module.exports.coffeeController = {
  createCoffee,
  getAllCoffees,
  getSingleCoffee,
  deleteCoffee,
  udpateCoffee,
};
