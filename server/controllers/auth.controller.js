import expressAsyncHandler from 'express-async-handler';
import User from '../models/user.model.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).populate("tasks");
  if (!user) {
    return res.send({
      error: true,
      message: 'User with this email does not exist!',
    });
  }

  const isAuth = await bcrypt.compare(password, user.password);
  if (!isAuth) {
    return res.send({ error: true, message: 'Incorrect credentials!' });
  }
  const token = jwt.sign(
    {
      _id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: '100000m' }
  );

  return res.send({
    ok: true,
    message: 'User successfully logged in!',
    user,
    token,
  });
});

export const signup = expressAsyncHandler(async (req, res) => {
  const { name, email, phone, password, department, joiningDate } = req.body;

  const userExist = await User.findOne({ email });
  if (userExist) {
    return res.send({
      ok: false,
      message: 'User with this email already exist!',
    });
  }
  const hash = await bcrypt.hash(password, 10);
  const user = new User({
    email,
    password: hash,
    name,
    phone,
    department,
    joiningDate: joiningDate || new Date(),
  });
  await user.save();
  // const token = jwt.sign(
  //   {
  //     _id: user._id,
  //   },
  //   process.env.JWT_SECRET,
  //   { expiresIn: '10000m' }
  // );

  return res
    .status(200)
    .send({ ok: true, message: 'User created successfully!', token, user });
});


export const jwtVerify = async (req, res) => {
  const token = req.headers.authorization;
  console.log(`token: ${token}`);
  if (!token) {
    return res.send(null);
  }
  const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
  if (decodeToken) {
    const user = await User.findById(decodeToken._id).populate("tasks");
    return res.send({ user });
  }
  res.send(null);
};
