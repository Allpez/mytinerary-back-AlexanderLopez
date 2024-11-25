import bcryptjs from 'bcryptjs';
import User from "../../models/User.js"; 
import generateToken from '../../middlewares/generateToken.js';

export default async (req, res, next) => {
    try {
        const { email, password, firstName, lastName, country } = req.body;

        if (!email || !password || !firstName || !lastName || !country) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const hashedPassword = bcryptjs.hashSync(
            res.body.password,
            10
        );    

        const newUser = new User({
            firstname: res.body.firstname,
            lastname: res.body.lastname,
            email: res.body.email,
            password: hashedPassword,
            photo: res.body.photo,
            country: res.body.country
});

        await newUser.save();

        const token = generateToken(newUser);

        return res.status(201).json({
            success: true,
            message: 'User successfully created',
            user: {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                country: newUser.country
            },
            token: token
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};
