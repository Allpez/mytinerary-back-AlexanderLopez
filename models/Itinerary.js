import { Schema,model } from "mongoose"; //Usamos modelo y esquema para guardar la informacion en la base de datos.

//Definimos una coleccion, como se agruparan los datos.
let collection = "itineraries" //Modelo de a que colección pertenece.
let schema = new Schema({ // Los datos de cual es el esquema de cada modelo.
    name:{type:String,required:true},
    photo:{type:String,required:true},
    price:{type:Number,required:true},
    duration:{type:Number,required:true},
    likes:{type:Number,required:true},
    hashtags:{type:[String],required:true},
    city: {type: Schema.Types.ObjectId, ref:'cities',required:true } //Propidad de tipo objectID, referenciada a la data cities 
    //Relaciones: para hacer la relacion de la ciudad con los itinerarios
},{
    timestamps:true // Este objeto guarda la fecha de creacion y modificación de cada objeto en el.
})

let Itinerary = model(collection,schema) //Creacion de esquema para cada modelo, a que coleccion pertenece y sus datos.

export default Itinerary 
