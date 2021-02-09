import react,{Component} from 'react'

export class List extends React.Component{
    constructor(props) {
        super()
        this.state = {
        displayBio:false
        }
        this.toggleDisplayBio=this.toggleDisplayBio.bind(this)
    }
    toggleDisplayBio() {
        this.setState({displayBio:!this.state.displayBio})
    }
    render() {
        return (
        <div>
            <p>mon grd frere adore django et python</p>
            <button onClick={this.toggleDisplayBio}>Valider</button>
        </div> 
        );
    }
}