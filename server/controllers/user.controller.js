import User from "../models/user.model.js";

export const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ isAdmin: false });
    return res.status(200).send({
      ok: true,
      message: "Employees fetched successfully!",
      employees,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "Something went wrong!" });
  }
};
