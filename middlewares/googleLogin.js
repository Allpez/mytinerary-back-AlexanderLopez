//Middleware de Login o SignIn para google

import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import User from "../models/User.js";

passport.use(
    "google-login",
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_LOGIN_CALLBACK_URI,
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                // Buscar si el usuario existe
                let user = await User.findOne({ email: profile.emails[0].value });
                if (!user) {
                    return done(null, false, { message: "You don't have a Google account created, Please sign up." });
                }
                return done(null, user);
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

export default passport.authenticate("google-login", { session: false, scope: ['profile', 'email'] });
