const { Schema, model } = require('mongoose');

const habitSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now
    
  },
  rating: {
    type: String,
    required: true,
    
  },
  


});

const Habit = model('Habit', habitSchema);

module.exports = Habit;
