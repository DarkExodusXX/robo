import React, {Component} from 'react';
import './App.css';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundry from '../../components/ErrorBoundry/ErrorBoundry';
import {setSearchField} from '../../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchField
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value))
  };
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      robots: []
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {this.setState({robots: users})});
  }
  
  render() {
    const {robots} = this.state;
    const {searchField, onSearchChange} = this.props;
    const filteredRobots = robots.filter(robots => {
      return robots.name.toLowerCase().includes(searchField.toLowerCase())
    });
    if (!robots.length) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <h1 className='f1'>Robo Friends</h1>
          <SearchBox searchChange={onSearchChange}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);