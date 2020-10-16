import React,{ Component}from 'react';
export class NaForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value:''
        }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value:e.target.value});
    }
    handleSubmit(e) {
        alert('nom envoyer avec success:'  + this.state.value);
        e.preventDefault();
    }
    render() {
        return(
            <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
        )
    }
}