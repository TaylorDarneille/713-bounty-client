import React, {Component} from 'react'

class NewBountyForm extends Component {

    state={
        name: this.props.current.name || '',
        wantedFor: this.props.current.wantedFor || '',
        client: this.props.current.client || '',
        reward: this.props.current.reward || 0,
        ship: this.props.current.ship || '',
        captured: this.props.current.captured || false,
        id: this.props.current._id || ''
    }

    render(){
        return(
            <div className='bounty-form'>
                <form>
                    <div>
                        <label for="name">Name:</label>
                        <input name="name" onChange={this.storeInput} value={this.state.name}/>
                    </div>
                    <div>
                        <label for="wantedFor">Wanted For:</label>
                        <input name="wantedFor" onChange={this.storeInput} value={this.state.wantedFor}/>
                    </div>
                    <div>
                        <label for="client">Client:</label>
                        <input name="client" onChange={this.storeInput} value={this.state.client}/>
                    </div>
                    <div>
                        <label for="reward">Reward:</label>
                        <input name="reward" onChange={this.storeInput} value={this.state.reward}/>
                    </div>
                    <div>
                        <label for="ship">Ship:</label>
                        <input name="ship" onChange={this.storeInput} value={this.state.ship}/>
                    </div>
                    <div>
                        <label for="captured">Captured:</label>
                        <input type="checkbox" name="captured" onChange={this.storeInput} checked={this.state.captured?"checked":""}/>
                    </div>
                    <input type="submit" value="Bountify!"/>
                </form>
            </div>
        )
    }
}

export default NewBountyForm