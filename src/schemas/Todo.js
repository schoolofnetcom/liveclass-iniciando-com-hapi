import mongoose from 'mongoose';

const Schema = mongoose.Schema({
    title: { type: String },
    check: { type: Boolean, default: false }
});

export default mongoose.model('Todo', Schema);