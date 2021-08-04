const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from habit and mood
/* const Habit = require('./habit');
const Mood = require('./mood'); */

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    // set habits to be an array of data that adheres to the habitSchema
    habits:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Habit'
      }
    ],
  
    // set mood to be an array of data that adheres to the mood
    moods:[
      {
        type: Schema.Types.ObjectId,
        ref: 'Mood'
      }
    ]
  },

);

// hash user password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// get the mood count for the user
userSchema.virtual('moods_count').get(function () {
  return this.moods.length;
});
// get the last mood
userSchema.virtual('last_mood').get(function () {
  return this.moods[this.moods.length - 1];
});
userSchema.virtual('all_moods').get(function () {
  return this.moods;
});

const User = model('User', userSchema);

module.exports = User;
