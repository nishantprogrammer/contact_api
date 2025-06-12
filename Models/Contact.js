import mongoose from 'mongoose'
const contactschema = mongoose.Schema(
    {
        name:{type:String,require:true},
        email:{type:String,require:true},
        phonenumber:{type:String,require:true},
        type:{type:String,require:true},
        CreatedAt:{type:Date, default:Date.now,require:true},
        user:{type:mongoose.Schema.Types.ObjectId}
    }
)
export const Contactdata = mongoose.model("contactdata",contactschema)