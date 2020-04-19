const mongoose = require ('mongoose');
const Schema = mongoose.Schema;



// create a contact schema & model 
const ProjectSchema = new Schema({

    title: {
        type: String,
        required: [true, 'title is required']        //attach a defalut message 
    },

    content: {
        type: String,
        required: [true, 'type a content for your project'],       //attach a defalut message 
        max: 255     
    },

    posted_by: {
        type: String,
        default: 'author'
    },

    updated_at: { type: Date, default: Date.now },
});




const Project = mongoose.model('project', ProjectSchema);     //mongoose will make a collection of project(s) and take Driver as a model to represent drivers collection in the db as DriverSchema.

module.exports = Project;