import React from 'react';

import { Form, Button, Dropdown } from 'react-bootstrap';
import { Tooltip, Overlay, OverlayTrigger } from 'react-bootstrap';

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
            petResults:[],
            error:''
        }
        this.serverUrl = 'serverUrl'
    }

    renderTooltip = (props) => (
        <Tooltip id="stateTooltip" {...props}>
            Search by 2-letter state code (WA, NY, etc.)
        </Tooltip>
    );

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
        let hasKids = this.state.hasKids ? `&good_with_children=true` : '';
        let hasCat = this.state.hasCat ? `&good_with_cats=true` : '';
        let hasDog = this.state.hasDog ? `&good_with_dogs=true` : '';
        
        let searchQuery = `/pets?${location}${hasKids}${hasCat}${hasDog}`;
        
        console.log(searchQuery);

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
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={this.renderTooltip}
                                >
                                    <Form.Control type="text" name="stateName" placeholder="State" onChange={this.handleChange} />
                                </OverlayTrigger>
                            </>
                        : 
                            <Form.Control type="text" name="zip" placeholder="Zip Code" onChange={this.handleChange} />
                        }
                </Form.Group>
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

                        </Dropdown.Menu>
                    </Dropdown>
                </Form.Group>
                <Button className="pink" type="submit" onClick={this.handleSubmit}>Search</Button>
            </Form>)}
}

export default SearchForm;
