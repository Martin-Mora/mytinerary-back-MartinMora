import {Schema,model} from "mongoose";

const citySchema= Schema({
  image:{type:String, require:true},
  city:{type:String, require:true},
  country:{type:String, require:true},
  description:{type:String, require:true}
},
{
  timestamps:true
}
);

const City = model('city',citySchema);

export default City;

