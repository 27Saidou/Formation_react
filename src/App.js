import React from 'react';
import {Example} from './Example'
import  {Example2} from './Example2'
import {Alpha} from './Alpha'
import Garage from './Garage'
import {Car} from './Car'
import {NaForm} from './NaForm'
import List from './List'


function App() {
  return (
    <div>
    <Example/>
    <Example2/>
    <Alpha/>
    <Garage name="alpha developpeur django" />
    <Car/>
    <NaForm/>
    <List/>
    </div>
  )
}

export default App;
