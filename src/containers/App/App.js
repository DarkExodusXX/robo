import React, {Component} from 'react';
import './App.css';
import CardList from '../../components/CardList/CardList';
import Scroll from '../../components/Scroll/Scroll';
import SearchBox from '../../components/SearchBox/SearchBox';
import ErrorBoundary from '../../components/ErrorBoundary/ErrorBoundary';
import {setSearchField, requestRobots} from '../../actions';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';

const mapStateToProps = (state) => {
  return {
    searchField: state.searchRobots.searchField,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }
  
  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props;
    const filteredRobots = robots.filter(robots => {
      return(
        robots.name.toLowerCase().includes(searchField.toLowerCase())
        || robots.email.toLowerCase().includes(searchField.toLowerCase())
      );
    });
    if (isPending) {
      return <h1>Loading...</h1>
    } else {
      return (
        <div className='tc'>
          <Header/>
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filteredRobots}/>
            </ErrorBoundary>
          </Scroll>
        </div>
      );
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);