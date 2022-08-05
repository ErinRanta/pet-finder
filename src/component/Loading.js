import React from 'react';
// import { Toast, ToastContainer } from 'react-bootstrap';
import { Alert } from 'react-bootstrap';

class Loading extends React.Component {
  
  render(){
    return (
        <Alert variant="info" id="loading-alert">
            Search results loading...
        </Alert>
    // <ToastContainer position="top-center">
    //     <Toast className="loading-toast" position="top-center">
    //     <Toast.Header>
    //         <strong >Loading search results</strong>
    //     </Toast.Header>
    //     <Toast.Body>
    //         Please wait...<br />
    //     </Toast.Body>
    //     </Toast>
    // </ToastContainer>
  );
}
}

export default Loading;