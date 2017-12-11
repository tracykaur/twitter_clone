import React, { Component } from 'react';
import './App.css';
import TweetList from './components/TweetList';
import NewTweet from './components/NewTweet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NewTweet />
        <TweetList />
      </div>
    );
  }
}

export default App;
