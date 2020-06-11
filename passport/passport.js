const passport = require('passport');
const passportJWT = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const helper = require('../utils/helper');
require('dotenv').config();


const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;

passport
    .use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password'
    },
        (username, password, done) => {
            User.findOne({ email: username}, (error, user) => {
                if (!user) {
                    return done(null, false, { message: 'Incorrect password or username' });
                }

                if(error) {
                    return done(error);
                }

                if(!helper.validatePassword(password, user.password)) {
                    return done(null, false, { message: 'Incorrect password or username' });
                }

                return done(null, user);
            });
        }
    ));


passport
    .use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.SECRET
    }, async (jwtPayload, done) => {
        try {
            const user = await User.find(jwtPayload._id);
            return done(null, user)
        } catch(error) {
            done(error);
        }
    }));

