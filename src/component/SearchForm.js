import React from 'react';
// import axios from 'axios';

import { Form, Button, ToggleButton, ToggleButtonGroup, Dropdown } from 'react-bootstrap';

import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchByCity:false,
            zip:'',
            cityName:'',
            stateName:'',
            species:'',
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
        let name = e.target.name;
        let value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        this.setState({ [name]: value });
    }
    
    handleSelectChange = (e) => {
        let value = e.target.value;
        value === 'zip' ? this.setState({searchByCity:true}) : this.setState({searchByCity:false});
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        let location = this.state.searchByCity ? `location=${this.state.cityName}, ${this.state.stateName}` : `location=${this.state.zip}`;
        // location is set to search by either zip code or cityName
        let species = this.state.species ? `&species=${this.state.species}` : '';
        let hasKids = this.state.hasKids ? `&hasKids=true` : '';
        let hasCat = this.state.hasCat ? `&hasCat=true` : '';
        let hasDog = this.state.hasDog ? `&hasDog=true` : '';
        let hasAllergy = this.state.hasAllergy ? `&hasAllergy=true` : '';
        
        let searchQuery = `/pets?${location}${species}${hasKids}${hasCat}${hasDog}${hasAllergy}`;
        
        console.log(searchQuery);
        // return(searchQuery);

        this.props.handleSearch(searchQuery);

        }
            
    render() {
        console.log('SearchForm render this.state',this.state);
        console.log('SearchForm render this.state.searchByCity',this.state.searchByCity);
        return(
            <Form id="searchForm">
                <Form.Group id="cityOrZip">
                    <Form.Select name="searchByCity" onChange={this.handleSelectChange}>
                        <option value="city">Search by zip code</option>
                        <option value="zip">Search by city</option>
                    </Form.Select>
                        {this.state.searchByCity ? 
                            <>
                            <Form.Control type="text" name="cityName" placeholder="City" onChange={this.handleChange} />
                            <Form.Control type="text" name="stateName" placeholder="State" onChange={this.handleChange} />
                            </>
                        : 
                            <Form.Control type="text" name="zip" placeholder="Zip Code" onChange={this.handleChange} />
                        }
                </Form.Group>

                {/* <ToggleButtonGroup name="species" onChange={this.handleChange}>
                    <ToggleButton
                        key={`cat-button-key`}
                        id={`cat-button`}
                        type="radio"
                        // name="species"
                        value="cat"
                        checked={this.state.species === "cat"}
                    >
                        Cat
                    </ToggleButton>
                    <ToggleButton
                        key={`dog-button-key`}
                        id={`dog-button`}
                        type="radio"
                        // name="species"
                        value="dog"
                        checked={this.state.species === "dog"}
                    >
                        Dog
                    </ToggleButton>
                    <ToggleButton
                        key={`other-button-key`}
                        id={`other-button`}
                        type="radio"
                        // name="species"
                        value="other"
                        checked={this.state.species === "other"}
                    >
                        Other
                    </ToggleButton>
                </ToggleButtonGroup> */}

                <Form.Group>
                <Dropdown>
                    <Dropdown.Toggle className="pink" id="advancedSearch">
                        Advanced Search
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
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
                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button className="pink" type="submit" onClick={this.handleSubmit}>Search</Button>
            </Form>)}
}

export default SearchForm;
