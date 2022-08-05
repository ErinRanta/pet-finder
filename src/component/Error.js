import React from 'react';
import Alert from 'react-bootstrap/Alert';

class Error extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
        error:this.props.error
    }
  }
  
  render(){
    console.log('Error render this.state.error',this.state.error);
    return (
    <Alert>
        Error! Please try your search again.<br />
        {`${this.state.error}`}
    </Alert>
  );
}
}

export default Error;