import React from 'react';
// import axios from 'axios';

import { Form, Button } from 'react-bootstrap';

import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchByCity:false,
            zip:'',
            cityName:'',
            hasKids:false,
            hasCat:false,
            hasDog:false,
            hasAllergy:false,
            petResults:[],
            error:''
        }
        this.serverUrl = 'serverUrl'
    }

    handleChange = (e) => {
    
        // let {name, value} = e.target;
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
        console.log('handleChange this.state',this.state);
    }

    handleSubmit = (e) => {
        e.preventDefault();

        let location = this.state.searchByCity ? `cityName=${this.state.cityName}` : `zip=${this.state.zip}`;
        // location is set to search by either zip code or cityName
        let hasKids = this.state.hasKids ? `&hasKids=true` : '';
        let hasCat = this.state.hasCat ? `&hasCat=true` : '';
        let hasDog = this.state.hasDog ? `&hasDog=true` : '';
        let hasAllergy = this.state.hasAllergy ? `&hasAllergy=true` : '';

        let searchUrl = `${this.serverUrl}/pets?${location}${hasKids}${hasCat}${hasDog}${hasAllergy}`;

        console.log(searchUrl);

        // axios.get(searchUrl)
        // .then(response => {
        //     this.setState({petResults:response});
        // })
        // .catch(err => {
        //     console.log('error SearchForm handleSubmit',err);
        //     this.setState({error:`Sorry, that search doesn't have any results! (${err.code}: ${err.message})`});
        // })
    }

    render() {
        return(
            <Form id="searchForm">
                <Form.Group id="cityOrZip">
                    <Form.Select name="searchByCity" onChange={this.handleChange}>
                        <option value="false">Search by zip code</option>
                        <option value="true">Search by city</option>
                    </Form.Select>
                    <div className="searchBy">
                        {this.state.searchByCity ? 
                            <Form.Control type="text" name="cityName" placeholder="City" onChange={this.handleChange} />
                        : 
                            <Form.Control type="text" name="zip" placeholder="Zip Code" onChange={this.handleChange} />
                        }
                    </div>
                </Form.Group>
                <Form.Group>
                    <Form.Check 
                        name="hasKids"
                        label="I need a pet who's good with kids"
                        onChange={this.handleChange}
                        />
                    <Form.Check 
                        name="hasCat"
                        label="I need a pet who's good with other cats"
                        onChange={this.handleChange}
                        />
                    <Form.Check 
                        name="hasDog"
                        label="I need a pet who's good with other dogs"
                        onChange={this.handleChange}
                        />
                    <Form.Check 
                        name="hasAllergy"
                        label="I need a pet who's hypo-allergenic"
                        onChange={this.handleChange}
                        />
                    <Button variant="primary" type="submit" onClick={this.handleSubmit}>Search</Button>
                </Form.Group>
              </Form>)}
}

export default SearchForm;
