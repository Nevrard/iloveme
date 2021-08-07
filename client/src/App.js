import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from '@apollo/client';
import Navbar from './components/login/Navbar';
import { setContext } from '@apollo/client/link/context';

import MoodForm from './components/mood/Mood';
import Hub from './components/main/Hub';
import Auth from './utils/auth';
import Footer from './components/footer/Footer'
// import CalendarPage from './components/calander/Calendar'
// import Home from './components/home/Home';
// import Dashboard from './components/habitDash/habitDashboard';
// import Habits from './components/habits/Habits';
// import habits from './habitExamples'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Navbar />
        
      {Auth.loggedIn() ? (
                <>
                <Hub />                    
                </>
              ) : (
                <div className="flex-column justify-center align-center min-100-vh">
                <h2>How Are You Doing Today?</h2>
                <p>iLove.me is your place to answer that question.</p>
                <p>Keep track of your mood, and track habits you want to adapt all in one handy application.</p>
                </div>
              )}
      </Router>
      <Footer />
    </ApolloProvider>
  );
}

export default App;
