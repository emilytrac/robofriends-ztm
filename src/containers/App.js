import React, { useState, useEffect } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
// import { robots } from "./robots";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";
import './app.css';

function App() {
    // constructor() {
    //     super()
    //     // describe app and can change and effect the app
    //     // app owns the state
    //     // virtual DOM collects the state and React uses to render
    //     this.state = {
    //         robots: [],
    //         searchfield: ''
    //     }
    //     // console.log('1');
    // }

    // set to initial state
    const [robots, setRobots] = useState([])
    const [searchfield, setSearchField] = useState('')
    const [count, setCount] = useState(0)

    // componentDidMount() {
    //     // fetch allows you to make requests on servers
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => {this.setState({robots: users})});
    //     // console.log('2');
    // }

    // by default runs after rendering
    // componentDidMount shortcut with []
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {setRobots(users)});
        console.log(count)
    },[count]) // only run if count changes

    const onSearchChange = (event) => {
        // this.setState({searchfield: event.target.value})
        setSearchField(event.target.value)
    }

    // const { robots, searchfield } = this.state;
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
            <button onClick={()=>setCount(count+1)}>Click me</button>
            {/* runs function when event occurs and updates the state */}
            {/* no longer in a class - don't need this keyword */}
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <ErrorBoundary>
                    <CardList robots={filteredRobots}/>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
        
}

export default App;