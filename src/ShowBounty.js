import React, {Component} from 'react'

class ShowBounty extends Component {
    render(){
        let display = <h3>Crime is on the rise!</h3>
        if(this.props.current.name){
            display = (
                <div className="show-bounty">
                    <h2>{this.props.current.name}</h2>
                    <h3>Wanted For:{this.props.current.wantedFor}</h3>
                    <p>Last seen on the <strong>{this.props.current.ship || 'unknown'}</strong></p>
                    <p><strong>STATUS:</strong> {this.props.current.captured ? 'CAUGHT':'AT LARGE'} </p>
                </div>
            )
        }
        return(
            <>
            {display}
            </>
        )
    }
}

export default ShowBounty