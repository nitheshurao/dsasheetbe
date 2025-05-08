import { Schema, model } from 'mongoose';

const problemSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  youtubeLink: {
    type: String,
    default: ''
  },
  leetcodeLink: {
    type: String,
    default: ''
  },
  articleLink: {
    type: String,
    default: ''
  },
  level: {
    type: String,
    enum: ['EASY', 'MEDIUM', 'HARD'],
    required: true
  }
}, { _id: true });

const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  problems: {
    type: [problemSchema],
    default: []
  }
}, { timestamps: true });

export default model('Topic', topicSchema);
