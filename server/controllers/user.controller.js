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


export const changeEmployeeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { val } = req.body;
    const user = await User.findById(id);

    user.isActive = val;
    await user.save();

    return res
      .status(200)
      .send({
        ok: true,
        message: "Employee status changed",
        employeeStatus: val,
      });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "Something went wrong!" });
  }
};


