import React from 'react';
import Button from 'react-bootstrap/Button'

import axios from 'axios'

import './Header.css'

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

    toggleLogin = (e) => {
        this.state.loggedIn === false ? this.setState({loggedIn:true}) : this.setState({loggedIn:false});
    }

    render() {
        return(
            <>
                <div id='headerButtons'>
                    {this.state.loggedIn ? 
                        <><Button className="orange" onClick={this.showSavedPets}>Show saved pets</Button>
                        <Button className="orange" onClick={this.toggleLogin}>Log Out</Button></>
                    :
                        <Button className="orange" onClick={this.toggleLogin}>Log in</Button>
                    }
                </div>
                <div id='pageTitle'>
                    <h1>Pet-Finder</h1>
                </div>
            </>
        );
    }
}

export default Header;
