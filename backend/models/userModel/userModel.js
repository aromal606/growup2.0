import mongoose, { Schema } from "mongoose";
const userSchema = new Schema({
     username: {
       type: String,
       required: true,
       unique: true,
       trim: true,
       minlength: 3
     },
     firstName: {
          type: String,
          required: true,
          trim: true,
          minlength: 3
        },
        lastName: {
          type: String,
          required: true,
          trim: true,
          minlength: 3
        },
     email: {
       type: String,
       required: true,
       unique: true,
       trim: true,
       match: [/.+\@.+\..+/, 'Please fill a valid email address']
     },
     password: {
       type: String,
       required: true,
       minlength: 6
     },
     emailStatus: {
      type: String,
      default:null
     
    },
     profilePicture: {
       type: String,
       default: ''
     },
     bio: {
       type: String,
       maxlength: 160,
       default: ''
     },
     location :{
          type:String
     },
     profession:{
          type:String
     },
     followers: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
       }
     ],
     following: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'user'
       }
     ],
     posts: [
       {
         type: mongoose.Schema.Types.ObjectId,
         ref: 'post'
       }
     ],
     createdAt: {
       type: Date,
       default: Date.now
     },
     updatedAt: {
       type: Date,
       default: Date.now
     }
   });
   
   // Middleware to update `updatedAt` field
   
   userSchema.pre('save', function(next) {
     this.updatedAt = Date.now();
     next();
   });
   
   // Create the User model

   const user = mongoose.model('user', userSchema);
   
export default user