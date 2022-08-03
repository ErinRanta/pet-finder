import React from 'react';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';


class Pet extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        pets: []
      }
    }


async getPets() {
  let url = '';
  let response = await axios.get(url);
  this.setState({
    pets: response.data
  })
}

componentDidMount() {
  this.getPets()
}

render(){    
return (
    <>
    <h2>Your Possible Pets!</h2>
    {console.log(this.state.pets)}
    {this.state.pets.length ? (


    <Carousel onSlide={this.handleSlide}>
        {/* {this.state.pets.map(element => */}
      <Carousel.Item className="card-body">
        {/* (key above??) */}
        <img
          className="card-body"
          src="src/img/greyhound.jpg/"
          alt="Greyhound" 
          // (switch to results photos)
        />
      
        <Carousel.Caption>
          {/* <h3>{this.type}</h3>
          <h3>{this.kid}</h3>
          <h3>{this.allergy}</h3> */}
          <h3>Data of Pet here!</h3>
          <p>Your new Best Friend?</p> 
          {/* //data// */}
                {/* data   */}
        </Carousel.Caption>
        </Carousel.Item>
      
        <Carousel.Item className='card-body'>
        {/* (key above??) */}
        <img
          className="d-block w-60"
          src="src/img/greyhound.jpg/"
          alt="Greyhound" 
          // (switch to results photos)
      />
        <Carousel.Caption>
          <h3>{this.type}</h3>
          <h3>{this.kid}</h3>
          <h3>{this.allergy}</h3>
          <h3>Data of Pet here!</h3>
          <p>Your new Best Friend?</p> 
          {/* //data// */}
                {/* data   */}
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className='card-body'>
        {/* (key above??) */}
          <img
            className="d-block w-60"
            src="src/img/greyhound.jpg/"
            alt="Greyhound" 
          // (switch to results photos)
        />
          <Carousel.Caption>
            {/* <h3>{this.type}</h3>
            <h3>{this.kid}</h3>
            <h3>{this.allergy}</h3> */}
            <h3>Data of Pet here!</h3>
          <p>Your new Best Friend?</p> 
          {/* //data// */}
                {/* data   */}
        </Carousel.Caption>
        </Carousel.Item>
        
    </Carousel>
   
    ) : (
      
  <h4>No pets match!</h4>
 
    )}
   
    </>
)
}    
}



export default Pet;

