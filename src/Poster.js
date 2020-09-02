import React, {Component} from 'react'

class Poster extends Component {
    render(){
        return(
        <div className="poster">
            <h2>WANTED</h2>
            <h3>{this.props.bounty.name}</h3>
            <h4>{this.props.bounty.reward}</h4>
        </div>)
    }
}

export default Poster