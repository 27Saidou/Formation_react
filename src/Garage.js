import React from 'react';


class Garage extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const carname="Ford";
        return(
            <div>
            <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Garage;
