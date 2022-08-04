import React from 'react';
import axios from 'axios';

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

    
    handleSearch = (searchQuery) => {
        let searchUrl = `${this.serverUrl}${searchQuery}`;

        // let location = this.state.searchByCity ? `?cityName=${this.state.cityName}` : `?zip=${this.state.zip}`;
        // // location is set to search by either zip code or cityName
        // let hasKids = this.state.hasKids ? `&hasKids=true` : '';
        // let hasCat = this.state.hasCat ? `&hasCat=true` : '';
        // let hasDog = this.state.hasDog ? `&hasDog=true` : '';
        // let hasAllergy = this.state.hasAllergy ? `&hasAllergy=true` : '';
        
        let searchUrl = `${this.serverUrl}/pets`;

        
        console.log(searchUrl);
        
        axios.get(searchUrl)
        .then(response => {
                console.log('response.data',response.data);

                this.setState({pets:response.data});

            })
            .catch(err => {
                    console.log('error SearchForm handleSubmit',err);
                    this.setState({error:`Sorry, that search doesn't have any results! (${err.code}: ${err.message})`});
                })
            }

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

export default Main;
