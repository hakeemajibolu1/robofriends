import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import { robots } from './robots'; //Moved from 'index.js' here so we have access to it
import './App.css';



class App extends Component {
    constructor() {
        super()
        this.state = { //state is what describes our app i.e. can change and affect 
                       //the app and they usually live in the parent components.  
                       //The data they pass down to the children are props 
                       //(properties) i.e. that never change
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount() {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(response=> response.json())
            .then(users => this.setState({ robots: users })); 
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value }); //Always use (this.setState)  
                                                            //anytime you want to change state
    }

    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        //In case of a lag from the server and there are many users, then using tenary:
        return !robots.length ? 
        <h1>loading...</h1> : 
        (
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots} /> 
                </Scroll>
            </div>
        );

    }
}

export default App;