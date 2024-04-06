import User from "../Models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../Utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    const { firstname, lastname, dob, email, password } = req.body;
    const hashedPassword = await bcryptjs.hash(password, 10);
    const newUser = new User({ firstname, lastname, dob, email, password: hashedPassword });
    try {
        await newUser.save();
        res.status(201).json("User Created Successfully");
    } catch (error) {
        next(error);
        // res.json("user already there")
    }
}

export const login = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(404, "User not found!"));
        }
        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, "Invalid Password!"))
        }
        const token = jwt.sign({ id: validUser._id }, process.env.TOKEN_KEY);
        const { password:pass, ...restInfo} = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true }).status(200).json(restInfo);
    } catch (error) {
        next(error);
    }
}
