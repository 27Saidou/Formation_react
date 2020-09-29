import React from 'react';
import {Example} from './Example'
import  {Example2} from './Example2'
import {Alpha} from './Alpha'
function Welcome(props){
  return <h1>Hello, {props.name}</h1>;
}
function App() {
  return (
    <div>
    <Example/>
    <Example2/>
    <Alpha/>
    <Welcome name="alpha"/>
    </div>
  )
}

export default App;
