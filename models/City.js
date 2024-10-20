import { Schema,model } from "mongoose"; //Usamos modelo y esquema para guardar la informacion en la base de datos.

//Definimos una coleccion, como se agruparan los datos.
let collection = "cities" //Modelo de a que colección pertenece.
let schema = new Schema({ // Los datos de cual es el esquema de cada modelo.
    name:{type:String,required:true},
    photo:{type:String,required:true},
    country:{type:String,required:true},
    continent:{type:String,required:true},
    description:{type:String,required:true},
    isVisaRequired:{type:Boolean,required:true},
    currency:{type:String,required:true},
    language:{type:String,required:true},
    averageHotelCost:{type:Number,required:true},
    averageTemperature:{type:Number,required:true}
},{
    timestamps:true // Este objeto guarda la fecha de creacion y modificación de cada objeto en el.
})

let City = model(collection,schema) //Creacion de esquema para cada modelo, a que coleccion pertenece y sus datos.

export default City 
