import { Schema, model } from "mongoose";

const userSchema = Schema({
  email: {type: String, require:true },
  password: {type: String, require:true },
  nameUser: {type: String, require:true },
  avatar: {type: String, default:"https://static.vecteezy.com/system/resources/previews/007/933/996/non_2x/ninja-logo-silhouette-of-japanese-fighter-vector.jpg"},
  country: {type: String},
 

},
{
  timestamps:true
})

const User = model('user', userSchema)

export default User;