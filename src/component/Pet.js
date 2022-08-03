import React from 'react';
import axios from 'axios';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';



class Pet extends React.Component {
    constructor(props) {
        super(props);
      this.state = {
        // pets: [],
        show: false,
      }
    }






// async getPets() {
//   let url = '';
//   let response = await axios.get(url);
//   this.setState({
//     pets: response.data
//   })
// }



// componentDidMount() {
//   this.getPets()
// }

handleNew = (e) => {
  // e.preventDefault();
  this.setState({ show: true });
}



render(){    
return (
    <>
    <h2>Your Possible Pets!</h2>
    <Button onClick={this.handleNew}>See your choices!</Button>
    {/* {console.log(this.state.pets)} */}
    {this.props.pets.length ? (


    <Carousel onSlide={this.handleSlide}>
        {this.props.pets.map(element => (
      <Carousel.Item className="card-body">
        {/* (key above??) */}
        <img
          className="card-body"
          src="https://place-hold.it/2000x400/blue/white"
          alt="placeholder" 
          // (switch to results photos)
        />
      
        <Carousel.Caption>
          <h3>{element.type}</h3>
          <h3>{this.kid}</h3>
          <h3>{this.allergy}</h3>
          <h3>Data of Pet here!</h3>
          <p>Your new Best Friend?</p> 
          {/* //data// */}
                {/* data   */}
        </Carousel.Caption>
        </Carousel.Item>
        ))}
      
     
    </Carousel>
   
    ) : (
      
  <h4>No pets match!</h4>
 
    )}
   
    </>
)
}    
}



export default Pet;
