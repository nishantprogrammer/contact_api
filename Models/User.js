    import mongoose from 'mongoose'
    const userschema = mongoose.Schema(
        {
            name:{type:String, require:true},
            email:{type:String, require:true},
            password:{type:String, require:true},
            CreatedAT:{type:Date, default:Date.now}
        }
    )
    export const User = mongoose.model("Userapi",userschema)