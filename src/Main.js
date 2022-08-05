import React from 'react';
import axios from 'axios';
import {withAuth0} from '@auth0/auth0-react'
import Header from './component/Header';
import SearchForm from './component/SearchForm';
import Pet from './component/Pet';
// import Footer from './component/Footer';



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: [],
            loggedIn: false,
            searchByCity:false,
            zip:'',
            cityName:'',
            hasKids:false,
            hasCat:false,
            hasDog:false,
            hasAllergy:false,
            // petResults:[],
            error:''
        }
        this.serverUrl = 'https://pet-finder-server.herokuapp.com'
        }


    handleSearch = async (searchQuery) => {
        if (this.props.auth0.isAuthenticated){
            let res = await this.props.auth0.getIdTokenClaims();

            let token = res.__raw;
            
            let searchUrl = `${this.serverUrl}${searchQuery}`;

            console.log(searchUrl);
            
            await axios.get(searchUrl, {headers: {"Authorization": `Bearer ${token}`}})
            .then(response => {
                    console.log('response.data',response.data);

                    this.setState({pets:response.data});

                })
                .catch(err => {
                        console.log('error SearchForm handleSubmit',err);
                        this.setState({error:`Sorry, that search doesn't have any results! (${err.code}: ${err.message})`});
                    })
            }}

    render () {

        console.log('Main render this.state.pets',this.state.pets);

        console.log('rendering main');

        return (
            <>
                <Header loggedIn={this.state.loggedIn}/>
                <SearchForm handleSearch={this.handleSearch} />
                <Pet pets={this.state.pets} />
                {/* <Footer /> */}
            </>
        );
    }
}

export default withAuth0(Main);
