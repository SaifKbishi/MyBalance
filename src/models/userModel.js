const mongoose = require('mongoose');
const validator = require('validator');

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      validate(value) {
          if (!validator.isEmail(value)) {
              throw new Error('Email is invalid')
          }
      }
  },
    password: {
      type: String,
      required: true,
      minlength: 7,
      trim: true,
      validate(value) {
          if (value.toLowerCase().includes('password')) {
              throw new Error('Password cannot contain "password"')
          }
      }
  },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = User;