    import React from 'react';
    import axios from 'axios';
    import Carousel from 'react-bootstrap/Carousel';
    import { render } from '@testing-library/react';
    process.env.PORT || 3000;
    
    
    class Pet extends React.Component {
        constructor(props) {
            super(props);
          this.state = {
            pets: []
          }
        }
    }
    
    // axios? componentdidMount?//
    
    
    
    //* TODO: render all the books in a Carousel */
    
    render(){    
    return (
      <>
      <div style={{ display: 'block', width: 700, padding: 30 }}>
        <h4>Your Possible Pets!</h4>
        <Carousel>
    
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
    src="src/img/greyhound.jpg/"
              alt="Greyhound"
            />
            <Carousel.Caption>
              <h3>Pet #1</h3>
              {/* <p>Sample Text for Image One</p> data */}
              {/* //data// */}
                    {/* data   */}
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
    
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
    src="https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png"
              alt="Image Two"
            />
            <Carousel.Caption>
              <h3>Label for second slide</h3>
              <p>Sample Text for Image Two</p>
            </Carousel.Caption>
          </Carousel.Item>
          
        </Carousel>
      </div>
      </>
    );
    }
    