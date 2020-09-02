import React, {Component} from 'react'

class Poster extends Component {
    render(){
        return(<h1>{this.props.bounty.name}</h1>)
    }
}

export default Poster