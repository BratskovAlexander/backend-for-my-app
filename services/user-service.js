const User = require("../models/userModel");
const bcrypt = require("bcrypt");

const getAllUsers = async () => {
  const result = User.aggregate([
    {
      $lookup: {
        from: "countries",
        localField: "countryID",
        foreignField: "_id",
        as: "country"
      }
    },
    {
      $project: {
        name: "$name",
        login: "$login",
        age: "$age",
        gender: "$gender",
        country: "$country.country",
      }
    }
  ]);
  return result;
};

const getUser = async req => {
  console.log(req.user.login);
  const result = await User.aggregate([
    {
      $match: { login: req.user.login }
    },
    {
      $lookup: {
        from: "countries",
        localField: "countryID",
        foreignField: "_id",
        as: "country"
      }
    }
  ]);
  return result;
};

const addUser = async body => {
  try {
    console.log(body);
    console.log(body.password);
    let salt = bcrypt.genSaltSync(10);
    let password = bcrypt.hashSync(body.password, salt);
    console.log(password);
    const user = await new User(body);
    console.log("пользователь", user);
    return await user.save();
  } catch (error) {
    console.log({ msg: error.message });
    throw new Error({ msg: error.message });
  }
};

const updateUser = async (data, id) => {
  try {
    if (data.password) {
      data.password = bcrypt.hashSync(data.password);
    }
    return await User.findByIdAndUpdate(
      { _id: id },
      { ...data },
      { new: true }
    );
  } catch (error) {
    throw new Error("Есть какая-то ошибка в изменении пользователя");
  }
};

const deleteUser = async id => {
  return await User.findByIdAndDelete(id);
};

module.exports = {
  getAllUsers,
  getUser,
  addUser,
  updateUser,
  deleteUser
};
