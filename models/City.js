import mongoose, {Schema,model} from "mongoose";

const citySchema= Schema({
  image:{type:String, require:true},
  city:{type:String, require:true},
  country:{type:String, require:true},
  description:{type:String, require:true},
  tineraries: [{ type: mongoose.Types.ObjectId, ref:'Tinerary' }]
},
{
  timestamps:true
}
);

const City = model('City',citySchema);

export default City;

