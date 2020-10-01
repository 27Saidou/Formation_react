import React,{ Component} from 'react';

export class Car extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            brand: "Toyota",
            model: "developpeur web springBoot",
            color: "red",
            year: 1964
        };
    }
    changeColor=()=>{
        this.setState({ color:'Orange'})
    }
    render() {
        return(
            <div>
            <h2>{this.state.brand}</h2>
            <p>{this.state.model}</p>
            <p>{this.state.color}</p>
            <p>{this.state.year}</p>
            <button onClick={this.changeColor}>Changez couleur</button>
            </div>
        )
    }
}

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            favoritecolor: "red"
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                favoritecolor: "yellow"
            })
        }, 1000)
    }
    render() {
        return ( <h1> mon couleur favori est {this.state.favoritecolor}</h1>
        );
    }
}
