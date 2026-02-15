import { model, Schema } from "mongoose";

const userSchema = new Schema({
    username:{type: String, required: true, unique: true},
    password:{type:String, required:true},
    firstName:{type: String, required: true, minlength:3, maxlength:10},
    lastName:{type: String, required: true, minlength:3, maxlength:10}
})

export const UserModel = model('User', userSchema)


// connectDB -> define Schema -> export Model -> use in Routes