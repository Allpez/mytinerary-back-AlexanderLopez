import { Router } from "express";
import { allUser, usersByID, usersByName } from "../controllers/users/read.js";
import register from "../controllers/users/register.js"
import update from "../controllers/users/update.js"
import { deleteOne, deleteManyUsers } from "../controllers/users/delete.js"
import validator from "../middlewares/validator.js";
import schemaUsersRegister from "../schemas/users/create.js";
import schemaUsersUpdate from "../schemas/users/update.js";
import accountExists from "../middlewares/accountExists.js";
import createHash from "../middlewares/createHash.js";
import passport from "../middlewares/passport.js";

const routerUsers = Router()

routerUsers.get('/all', passport.authenticate('jwt', { session: false }), allUser)                  //No estamos usando sesiones de express
routerUsers.get('/id/:id', passport.authenticate('jwt', { session: false }), usersByID)
routerUsers.get('/name/:name', passport.authenticate('jwt', { session: false }), usersByName)
routerUsers.post('/register', validator(schemaUsersRegister), accountExists, createHash, register)
routerUsers.put('/update', passport.authenticate('jwt', { session: false }), validator(schemaUsersUpdate), createHash, update)
routerUsers.delete('/deleteOne', passport.authenticate('jwt', { session: false }), deleteOne)
routerUsers.delete('/deleteMany', passport.authenticate('jwt', { session: false }), deleteManyUsers.destroy)

export default routerUsers