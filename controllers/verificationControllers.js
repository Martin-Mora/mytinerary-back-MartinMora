import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const verificationControllers = {
  singUp: async (req, res, next) => {
    try {
      const ExistEmail = await User.findOne({ email: req.body.email });

      if (!ExistEmail) {
        const passwordHash = bcrypt.hashSync(req.body.password, 10);
        console.log(passwordHash);
        let body = { ...req.body };
        body.password = passwordHash;

        const newUser = await User.create(body);

        const userResponse = {
          email: newUser.email.toLowerCase(),
          avatar: newUser.avatar,
          nameUser: newUser.nameUser,
          _id: newUser._id,
        };

        const token = jwt.sign(
          { email: newUser.email, avatar: newUser.avatar },
          process.env.Token
        );
        return res.json({
          success: true,
          userData: userResponse,
          token: token,
          message: "Sign up successfully",
        });
      }
      return res.json({
        success: true,
        message: "Email already exist",
      });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  singIn: async (req, res, next) => {
    try {
      let { email: emailBody, password } = req.body;

      const userInDb = await User.findOne({ email: emailBody });

      if (!userInDb) {
        res.status(403).json({
          message: ["no user exist whith this email"],
        });
      }

      let passwordValidator = bcrypt.compareSync(password, userInDb.password);

      if (!passwordValidator) {
        res.status(403).json({
          message: ["User invalidated, check email or password"],
        });
      }

      const userResponse = {
        email: userInDb.email,
        avatar: userInDb.avatar,
        nameUser: userInDb.nameUser,
        _id: userInDb._id,
      };

      const token = jwt.sign({ email: userInDb.email }, process.env.Token);

      return res.json({ success: true, user: userResponse, token: token });
    } catch (error) {
      console.log(error);
      next(error);
    }
  },

  loginWithToken: (req, res) => {
    const userResponse = {
      email: req.user.email,
      avatar: req.user.avatar,
      nameUser: req.user.nameUser,
      _id: req.user._id,
    };
    res.json({
      success: true,
      userData: userResponse,
      message: "Sign in successfully",
    });
  },
};

export default verificationControllers;
