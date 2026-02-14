import { Model, Schema } from "mongoose";

const userSchema = new Schema({
    username:{type: String, required: true, unique: true},
    password:{type:String, required:true}
})

export const UserModel = new Model("User", userSchema)


// connectDB -> define Schema -> export Model -> use in Routes