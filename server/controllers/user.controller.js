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

    return res.status(200).send({
      ok: true,
      message: "Employee status changed",
      employeeStatus: val,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "Something went wrong!" });
  }
};

export const editUserProfile = async (req, res) => {
  try {
    console.log("hello i am hrererere");
    const { id } = req.params;
    const { name, department } = req.body;
    console.log(req.file, "rjfsehwiekfhwe");

    const user = await User.findById(id);
    if (!user) {
      return res.send({ ok: false, message: "User not found!" });
    }
    if (req.file) {
      user.profilePic = {
        path: req.file.path,
        filename: req.file.filename,
      };
    }
    user.name = name;
    user.department = department;

    await user.save();

    return res.status(200).send({
      ok: true,
      message: "Profile edited successfully!",
      user,
    });
  } catch (err) {
    console.log(err);
    return res.status(400).send({ message: "Something went wrong!" });
  }
};
