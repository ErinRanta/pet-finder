import React from 'react';
import Button from 'react-bootstrap/Button'

import axios from 'axios'

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn:false,
            petResults:[]
        };
        this.server = '';
    }

    showSavedPets = (e) => {   
                
        axios.get(`${this.server}/saved`)
        .then(response => {
            this.setState({petResults:response});
        })
        .catch(err => {
            console.log('error SearchForm handleSubmit',err);
            this.setState({error:`Sorry, that search doesn't have any results! (${err.code}: ${err.message})`});
        })}

    render() {
        return(
            <>
                <h1>Pet-Finder</h1>
                <Button>Log in</Button>
                <Button onClick={this.showSavedPets}>Show saved pets</Button>
            </>
        );
    }
}

export default Header;
