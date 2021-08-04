const { Schema, model } = require('mongoose');

const moodSchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required:true,
    default: Date.now
    
  },
  
});

const Mood = model('Mood', moodSchema);

module.exports = Mood;
