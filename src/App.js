import React from 'react';
import {Example} from './Example'
import  {Example2} from './Example2'
import {Alpha} from './Alpha'
import Garage from './Garage'
import {Car} from './Car'



function App() {
  return (
    <div>
    <Example/>
    <Example2/>
    <Alpha/>
    <Garage name="alpha developpeur django" />
    <Car/>
    </div>
  )
}

export default App;
