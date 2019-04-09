import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { robots } from './robots'; //Moved from 'index.js' here so we have access to it



class App extends Component {
    constructor() {
        super()
        this.state = { //state is what describes our app i.e. can change and affect 
                       //the app and they usually live in the parent components.  
                       //The data they pass down to the children are props 
                       //(properties) i.e. that never change
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); //Always use (this.setState)  
                                                            //anytime you want to change state
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots} /> 
            </div>
        );
    }
}

export default App;