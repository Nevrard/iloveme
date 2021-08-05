
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
        },
        moodByDateById: async(parent, { date, id }) => {
            //Get User by the provided ID
            const user = await User.findOne(
                { 
                    _id:id 
                }
            ).populate('moods');

            //Get properly formatted date => "2021-01-20"
            const compareDate = date.split('T')[0];

            let matchFlag = false;

            for (let i=0; i< user.moods.length; i++) {
                //Convert mood in array to same format as compareDate above
                let moodDate = user.moods[i].date.toJSON().split('T')[0];
                
                //If the comparison matches, filter the moods array to only include the mat
                if(moodDate === compareDate){
                    nums = [i];
                    user.moods = user.moods.filter((o,i) => nums.indexOf(i) > -1);
                    matchFlag = true;
                }
            }

            if(!matchFlag){
                user.moods[0].rating = -1;
                user.moods.splice(1, user.moods.length-1);
            }

            return user;
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