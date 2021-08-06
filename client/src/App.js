import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
// import Navbar from './components/login/Navbar';

// import MoodForm from './components/mood/Mood';
import Hub from './components/main/Hub';
// import CalendarPage from './components/calander/Calendar'
// import Home from './components/home/Home';
// import Dashboard from './components/habitDash/habitDashboard';
// import Habits from './components/habits/Habits';
// import habits from './habitExamples'

const client = new ApolloClient({
  request: operation => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
  });
  },
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        {/* <Navbar /> */}
        <Hub/>
            
        {/* <div className="flex-column justify-center align-center min-100-vh bg-primary">
          <Switch>
            <Route exact path="/">
              <Home />
                 <MoodForm/>
            </Route>
            <Route exact path="/matchup">
              <Matchup />
            </Route>
            <Route exact path="/matchup/:id">
              <Vote />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </div> */}
      </Router>
    </ApolloProvider>
  );
}

export default App;
