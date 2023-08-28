import mongoose from 'mongoose'


export default async function connect(){
    await mongoose.createConnection("mongodb://127.0.0.1:27017")


    //mongodb+srv://omarikram55:admin123@cluster0.ylzfqay.mongodb.net/?retryWrites=true&w=majority
}