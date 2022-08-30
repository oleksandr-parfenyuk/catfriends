import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';

export interface Robot {
    id: number;
    name: string;
    username: string;
    email: string;
}


class App extends Component<{}, {robots: Robot[], searchfield: string}> {
  constructor(props: any) {
    super(props)
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { setTimeout(() => this.setState({ robots: users}), 1000) });
  }

  onSearchChange = (event: any) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robot: Robot) =>{
      return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    return !robots.length ?
      <h1 className='tc'>Loading</h1> :
      (
        <div className='tc'>
          <h1 className='f1'>CatFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <CardList robots={filteredRobots} />
          </Scroll>
        </div>
      );
  }
}

export default App;