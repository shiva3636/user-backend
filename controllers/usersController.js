const asyncHnadler = require("express-async-handler");
const User = require("../models/userModel");

//@desc Get all users
//@route GET /api/users
//@access  public

const getUsers = asyncHnadler(async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
});

//@desc  create new users
//@route POST /api/users
//@access  public

const createUser = asyncHnadler(async (req, res) => {
  console.log("create user body : ", req.body);
  const { name, email, image, gender } = req.body;
  if (!name || !email || !image || !gender) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await User.create({
    name,
    email,
    image,
    gender,
  });
  res.status(201).json(user);
});

//@desc  Get user
//@route GET /api/users/:id
//@access  public

const getUser = asyncHnadler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  res.status(200).json(user);
});

//@desc  update user
//@route PUT /api/users/:id
//@access  public

const updateUser = asyncHnadler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedUser);
});

//@desc  delete user
//@route DELETE /api/users/:id
//@access  public

const deleteUser = asyncHnadler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) {
    res.status(404);
    throw new Error("user not found");
  }
  await User.deleteOne();
  res.status(200).json(user);
});

module.exports = { getUsers, createUser, getUser, updateUser, deleteUser };
