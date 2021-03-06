import React,{ Component} from 'react';

export class AlphaForm extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName="",
            lastName=""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        const{name,value}=event.target
        this.setState({[name]:value})
    }
    render(){
        return(
            <div className="app">
            <form>
                <input type="text" value={this.state.firstName} name="firstName" placeholder="first Name" onChange={this.handleChange}/><br/>
                <input type="text" value={this.state.lastName} name="lastName" placeholder="last Name" onChange={this.handleChange}/>
                <h1>{this.state.firstName}{this.state.lastName}</h1>
            </form>
            </div>
        )
    }
}