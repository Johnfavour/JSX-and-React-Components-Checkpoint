import React from 'react'
import './App.css';
import Description from './Description';
import Name from './Name';
import Price from './Price';
import Image from './Image';
import {Card} from 'react-bootstrap';
import './style.css';


function App() {
  const firstName = 'Favour';
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>
           <Name/>
          </Card.Title>
          <Card.Text>
            <Description/>
            <Price/>
            <Image/>
          </Card.Text>
        </Card.Body>
      </Card>
    <p className='greetings'>
        Hello, {firstName ? firstName : 'there'}!
    </p>
    
    </div>
  );
}

export default App;
