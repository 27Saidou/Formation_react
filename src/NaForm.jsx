import React,{ Component,useState,useEffect}from 'react';
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
        return (
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
export function Omar(){
    let[count,setCount]=useState(0)
    useEffect(()=>{

    })
    return<div>
        <p>{count}</p>
        <button onClick={()=>setCount(count+1)}></button>
    </div>
}
class FriendStatusWithCounter extends React.Component {
    constructor(props) {
    super(props);
    this.state = { count: 0, isOnline: null };
    this.handleStatusChange = this.handleStatusChange.bind(this);
}

componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
    ChatAPI.subscribeToFriendStatus(
    this.props.friend.id,
    this.handleStatusChange
    );
}

componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
}

componentWillUnmount() {
    ChatAPI.unsubscribeFromFriendStatus(
    this.props.friend.id,
    this.handleStatusChange
    );
}

handleStatusChange(status) {
    this.setState({
    isOnline: status.isOnline
    });
}
}