import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
  },
  department: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  joiningDate: {
    type: Date,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

const User = mongoose.model("User", UserSchema);

export default User;
