import React, {Component} from 'react';
import './App.css';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      robots: [],
      searchField: ''
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
  }
  
  onSearchChange = (event) => {
    this.setState({searchField: event.target.value});
  }
  
  render() {
    const {robots, searchField} = this.state;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>RoboFriends</h1>
          <SearchBox searchChange={this.onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

export default App;