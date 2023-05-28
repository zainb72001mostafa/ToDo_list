const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    listId:{
        type: mongoose.Schema.Types.ObjectId,
        requird: true
    }
});
module.exports = mongoose.model('Task',TaskSchema);