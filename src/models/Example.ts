const mongoose = require('mongoose');
const { Schema } = mongoose;

const exampleSchema = new Schema({
    example: {
        type: String,
    }
},{ 
    timestamps: true,
});

module.exports = mongoose.model('example', exampleSchema);