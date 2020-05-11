import React , { Component } from 'react';
import CardList from './CardList';
import SerachBox from './SerachBox'
import axios from 'axios';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
class App extends React.Component{    

    constructor(){
        super()
        this.state ={
            robots:[],
            search :''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => response.data)
            .then(users => this.setState({robots:users}));
      

    }

    onserchchange = (event) => {
        this.setState({search:event.target.value})        
    }
    render() {
        const filteredrobots = this.state.robots.filter(robot=>{
            return  robot.name.toLowerCase().includes(this.state.search.toLowerCase());
        })
        if (this.state.robots.length === 0) {
            return <h1>Loading</h1>
        } else {
            return(
                <div className="tc">
                <h1>ROBOFRIENDS</h1>
                <SerachBox serachchange = {this.onserchchange}/>
                <Scroll>
                <ErrorBoundry>
                <CardList robots={filteredrobots}/>
                </ErrorBoundry>
                </Scroll>
                </div>
            );
        }
        
    }
   
    
    }
    
    export default App;