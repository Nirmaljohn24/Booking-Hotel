import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
  user : {type: String, ref : "User" , required : true},
  room : {type: String, ref : "User" , required : true},
  hotel : {type: String, ref : "User" , required : true},
  checkInData: {type: String, ref : "User" , required : true},
  checkOutDate : {type: String, ref : "User" , required : true},
  totalPrice : {type: String, ref : "User" , required : true},
  guests : {type:Number,required:true},
  status : {
    type: String,
    enum:["pending","confirmed","cancelled"],
    default:"pending"
  },
  paymentMethod : {
    type: String,
    required:true,
    default:"Pay At Hotel"
  },
  isPaid:{type:Boolean,default: false}
},{timestamps:true});


const Booking = mongoose.model("Booking", bookingSchema)


export default Booking;