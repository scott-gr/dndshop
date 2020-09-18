const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require ('../models/user.js')

passport.use(new LocalStrategy((username,password)))