import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
    "google-register",
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_REGISTER_CALLBACK_URI,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Verificar si el usuario ya existe
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    // Crear un nuevo usuario si no existe
                    user = new User({
                        // name: profile.displayName,
                        name: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: profile.id, //falta hashear el password, video 5:40
                        photo: profile.photos[0].value,
                        online: false,
                    });
                    await user.save();
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport.authenticate("google-register", { session: false });
