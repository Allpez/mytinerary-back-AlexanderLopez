import { Schema, model } from "mongoose";

// Modelo de Usuario de la app.
let collection = 'users'
let schema = new Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String },
    online: { type: Boolean }
}, {
    timestamps: true
})

let User = model(collection, schema)

export default User