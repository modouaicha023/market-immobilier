import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';

export const signup = async (req, res) => {
    const { username, firstname, lastname, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, firstname, lastname, email, password: hashedPassword });
    try{
        await newUser.save();
        res.status(201).json("User Created successfully");
    }
    catch(error){
        res.status(500).json(error.message);

    }
};