import mongoose, {Schema,model} from "mongoose";

const tinerarySchema= Schema({
  tineraryTitle: {type:String, require: true},
  tineraryImage: {type:String, require:true},
  imagePublisher:{type:String, require:true},
  namePusblisher:{type:String, require:true},
  price:{type:Number,require:true,validator: (v) => v > 0 && v < 6 },
  duration: {type:Number,require:true},
  likes: {type:Number, require:true,default:0},
  hashtags: {type:String,requiere:true},
  city: {type:mongoose.Types.ObjectId, ref:'City', require:true}
},
{
  timestamps:true
}
);

const Tinerary = model('Tinerary',tinerarySchema)

export default Tinerary;