
// import gql tagged template function
const { gql } = require('apollo-server-express');

// create typeDefs
const typeDefs = gql`
    type Mood {
        _id: ID
        description:String
        date: String
        rating: String
       
    }
    type Habit {
        _id: ID
        name:String
        date: String
        rating: String
    }
    type User {
        _id: ID
        username: String
        email: String
        moods:[Mood]
        habits: [Habit]
    }
    type Auth {
        token: ID!
        user: User
    }
    type Query {
        me: User
        meById(_id:String): User
        moodByDate(date: String): User
        moodByDateById(date: String, id: String): User
        getHabits: User
        getHabitsById(id: String): User
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth

        addHabit(name:String, rating:String, id:String): User
        addHabitById(name:String, rating:String, id:String): User

        addMood(description:String, rating:String, id:String): User
        addMoodById(description:String, rating:String, id:String): User
    }
    
`;

// export the typeDefs
module.exports = typeDefs;