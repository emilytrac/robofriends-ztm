import React, {Component} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './app.css';

// const state = {
//     robots: robots,
//     searchfield: ''
// }

class App  extends Component{
    constructor() {
        super()
        // describe app and can change and effect the app
        // app owns the state
        // virtual DOM collects the state and React uses to render
        this.state = {
            robots: [],
            searchfield: ''
        }
        // console.log('1');
    }

    // make requests
    componentDidMount() {
        // fetch allows you to make requests on servers
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {this.setState({robots: users})});
        // console.log('2');
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })
        // ternary operator
        return !robots.length ?
            <h1>Loading</h1> :
        (
        // console.log('3');
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                {/* runs function when event occurs and updates the state */}
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        );
    }    
}


export default App;