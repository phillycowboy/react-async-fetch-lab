// create your App component here

import React, { Component } from 'react'


class App extends Component{
    state = {
        people: []
    }

    componentDidMount(){
        fetch("http://api.open-notify.org/astros.json")
        .then(res => res.json())
        .then(people => this.setState({people: people.people}))
        console.log(this.state.people)
    }


    render(){
        return(
            <div>
                {this.state.people.map((p, id) => <h1 key={id}>{p.name}</h1>)}
            </div>
        )
    }
}
export default App;