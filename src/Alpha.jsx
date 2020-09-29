import React, { Component } from 'react'
export class Alpha extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`;
  }
  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`;
  }

  render() {
    return (
      <div>
        <p>Vous avez cliquez {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
        Envoyer
        </button>
      </div>
    );
  }
}