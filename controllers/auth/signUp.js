import bcryptjs from 'bcryptjs';
import User from "../../models/User.js"; // Asegúrate de tener tu modelo de User
import generateToken from '../../middlewares/generateToken.js'; // Asumiendo que ya tienes un middleware para generar el token

export default async (req, res, next) => {
    try {
        // Desestructuramos los datos de la solicitud
        const { email, password, firstName, lastName, country } = req.body;

        // Comprobamos si los campos necesarios están presentes
        if (!email || !password || !firstName || !lastName || !country) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        // Verificamos si el usuario ya existe
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        // Encriptamos la contraseña
        const hashedPassword = await bcryptjs.hash(password, 10);

        // Creamos un nuevo usuario
        const newUser = new User({
            firstname: res.body.firstname,
            lastname: res.body.lastname,
            email: res.body.email,
            password: res.body.password,
            photo: res.body.photo,
            country: res.body.country
});

        // Guardamos el nuevo usuario en la base de datos
        await newUser.save();

        // Generamos un token para el nuevo usuario
        const token = generateToken(newUser);

        // Enviamos la respuesta con los datos del usuario y el token
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
        next(error); // Pasamos el error al siguiente middleware de manejo de errores
    }
};
