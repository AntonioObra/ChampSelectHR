import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/users.js";
import Build from "../models/builds.js";

export const signIn = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const existingUser = await User.findOne({ userName });
    if (!existingUser) {
      return res.status(404).json({ message: "User doesn't exist." });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { userName: existingUser.userName, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (err) {
    res.status(5000).json({ message: "Something went wrong." });
  }
};

export const signUp = async (req, res) => {
  const { email, password, userName, confirmedPassword } = req.body;

  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: "User already exist." });
  }
  if (password !== confirmedPassword) {
    return res.status(400).json({ message: "Passwords don't match." });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await User.create({
    email,
    password: hashedPassword,
    userName: userName,
  });

  try {
    const token = jwt.sign({ email: result.email, id: result._id }, "test", {
      expiresIn: "1h",
    });

    res.status(200).json({ result, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const starGuide = async (req, res) => {
  const { id } = req.params;
  // console.log(req.body);
  // console.log(id);
  const build = await Build.findById(id);
  // console.log(build);
  // console.log(req.body.result._id);
  const user = await User.findById(req.body._id);
  // user.starGuides = [];
  user.starGuides.push(build);
  await user.save();
  // console.log(user);

  const token = jwt.sign({ userName: user.userName, id: user._id }, "test", {
    expiresIn: "1h",
  });

  res.status(200).json({ result: user, token });

  // res.status(200).json({ user });
};

export const unStarGuide = async (req, res) => {
  const { id } = req.params;
  const build = await Build.findById(id);
  const user = await User.findById(req.body._id);
  // user.starGuides = [];
  // console.log(user);
  const newStarGuides = user.starGuides.remove(id);
  // console.log(newStarGuides);

  user.starGuides = newStarGuides;
  await user.save();
  // console.log(user);

  const token = jwt.sign({ userName: user.userName, id: user._id }, "test", {
    expiresIn: "1h",
  });

  res.status(200).json({ result: user, token });
};

export const getUser = async (req, res) => {
  const { id } = req.params;
  const user1 = await User.findById(id)
    .populate("starGuides")
    // .populate("guides")
    .populate({ path: "guides", populate: { path: "user" } });
  console.log(user1);

  res.status(200).json(user1);
};
