const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

    email: {
        type: String,
        required: true,
        max: 255,
        min: 2
    },

    password: {
        type: String, 
        required: true,
        max: 1024,
        min: 6
    },

    username: {
        type: String,
        required: true,
    },


    date:{
        type: Date,
        default: Date.now
    }
})



const User = mongoose.model('user', userSchema);     //mongoose will make a collection of user(s) and take Driver as a model to represent users collection in the db as userSchema.

module.exports = User;