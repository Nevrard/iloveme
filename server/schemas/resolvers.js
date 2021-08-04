
const { User, Habit, Mood } = require('../models');

// import authentication utility and error
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        meById: async (parent, {_id}) => {

            return await User.findOne( {_id:_id} ).populate('habits moods');
    
        },
        me: async (parent, args, context) => {

            if (context.user) {
                return await User.findOne({ _id: context.user._id })
                .select('-__v -password');
            }

            throw new AuthenticationError('Not logged in');
        },
        moodByDate: async (parent, args, context) => {

            if (context.date) {
                return await Mood.findOne({ date: context.date });
            }

            throw new AuthenticationError('Not logged in');
        }
    },
    Mutation: {
        login: async (parent, { email, password }) => {
            const user = await User.findOne( { email });
            if (!user) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const correctPw = await user.isCorrectPassword(password);
            if(!correctPw) {
                throw new AuthenticationError('Incorrect credentials')
            }
            const token = signToken(user);
            return { token, user };
        },

        addUser: async (parent, {username,email,password}) => {
            const user = await User.create({username,email,password});
            const token = signToken(user)
            return { token, user };
        },

        addHabit: async (parent, { name, rating}, context) => {

            const habit= await Habit.create({name,rating});

            if (id) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id:context.user._id },
                    { $addToSet: {habits: habit} },
                    { new: true }
                ).populate('habits')
                return updatedUser;
            }
           // throw new AuthenticationError('You need to be logged in!')

        },

        addHabitById: async (parent, { name, rating, id}) => {

            const habit= await Habit.create({name,rating});

            if (id) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id:id },
                    { $addToSet: {habits: habit} },
                    { new: true }
                ).populate('habits')
                return updatedUser;
            }
           // throw new AuthenticationError('You need to be logged in!')

        },

        addMood: async (parent, { description, rating}, context) => {
            
            const mood= await Mood.create({description,rating});
            if (id) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id:context.user._id },
                    { $addToSet: {moods: mood} },
                    { new: true }
                ).populate('moods')
                return updatedUser;
            }
            //throw new AuthenticationError('You need to be logged in!')

        },
        addMoodById: async (parent, { description, rating, id}) => {
            
            const mood= await Mood.create({description,rating});
            if (id) {
                const updatedUser = await User.findOneAndUpdate(
                    { _id:id },
                    { $addToSet: {moods: mood} },
                    { new: true }
                ).populate('moods')
                return updatedUser;
            }
            //throw new AuthenticationError('You need to be logged in!')

        },
        
    }
}
module.exports = resolvers;