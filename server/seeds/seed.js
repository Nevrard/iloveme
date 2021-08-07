const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/habitTrackerApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
});


const seedUser = {
    username: "Belinda Singh",
    email: 'bsingh@email.com',
    password: 'password123',
}
const seedHabits = [
    {

        name: 'MakeBed',
        rating: "3"

    },
    {

        name: 'BrushTeeth',
        rating: "5"
    },
    {

        name: 'FoldLaundry',
        rating: "2"
    },
    {

        name: 'PracticeCompassion',
        rating: "3"
    },
    {

        name: 'Walk',
        rating: "4"
    },
    {

        name: 'Meditate',
        rating: "3"
    },
    {

        name: 'DoSomethingNice',
        rating: "5"
    },
]
const seedMoods = [];

for (let i = 0; i < 300; i++) {
    const mood = {
        date: new Date(new Date().setDate(new Date().getDate() - i)),
        rating: (Math.floor(Math.random() * 4)+1).toString(),
        description: "You are the best"
    };
    seedMoods.push(mood)
};

const seedDatabase = async () => {

    await db.Habit.deleteMany();
    await db.Mood.deleteMany();
    await db.User.deleteMany();

    const habits = await db.Habit.insertMany(seedHabits);
    const moods = await db.Mood.insertMany(seedMoods);
    const user = await db.User.create(seedUser);

    for (let i = 0; i < habits.length; i++) {
        user.habits.push(habits[i]._id);
    }

    for (let i = 0; i < moods.length; i++) {
        user.moods.push(moods[i]._id)
    }
    await user.save()
    console.log('all done!');
    process.exit(0);
};

seedDatabase();