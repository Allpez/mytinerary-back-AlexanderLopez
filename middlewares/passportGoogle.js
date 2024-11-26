import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20"; 
import User from "../models/User.js";
import bcryptjs from "bcryptjs";
import "dotenv/config.js"

export default passport.use(
    new GoogleStrategy(  
        {
            clientID: process.env.GOOGLE_CLIENT_ID,             
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,     
            callbackURL: process.env.GOOGLE_URI_BACK            
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await User.findOne({ email: profile.emails[0].value });
                
                if (!user) {
                    const hashedPassword = bcryptjs.hashSync(
                        profile.id, 
                        10
                    );
                    
                    user = new User({
                        firstname: profile.name.givenName,
                        lastname: profile.name.familyName,
                        email: profile.emails[0].value,
                        password: hashedPassword, 
                        photo: profile.photos ? profile.photos[0].value : "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png",
                        country: null,
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

