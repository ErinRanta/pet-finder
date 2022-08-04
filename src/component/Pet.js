import React from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import './Pet.css';



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
    {console.log(this.props.pets)}
    {this.props.pets.length ? (


    <Carousel> 
        {this.props.pets.map((element,i) => (
      <Carousel.Item key={i} className="cardBody">
        {/* (key above??) */}
        <img className="petImage"
          src={element.picture}
          alt="placeholder" 
          // (switch to results photos)
        />
      
        <Carousel.Caption>
          <h3>{element.name}</h3>
          <h3>{element.species}</h3>
          <h3>{element.breed}</h3>
          <h3>Data of Pet here!</h3>
          <p>Your new Best Friend?</p> 
          
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
