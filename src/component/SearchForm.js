import React from 'react';

import { Form, Button, Dropdown } from 'react-bootstrap';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import './SearchForm.css'

class SearchForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            searchByCity:false,
            zip:'',
            cityName:'',
            stateName:'',
            type:'all',
            otherType:'',
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
        let hasKids = this.state.hasKids ? `&hasKids=true` : '';
        let hasCat = this.state.hasCat ? `&hasCat=true` : '';
        let hasDog = this.state.hasDog ? `&hasDog=true` : '';
        
        let type = ''
        if(this.state.type === "cat" || this.state.type === "dog"){
            type = `&type=${this.state.type}`;
        }
        else if(this.state.type === "other"){
            type=`&type=${this.state.otherType}`;
        }
        
        let searchQuery = `/pets?${location}${type}${hasKids}${hasCat}${hasDog}`;
        
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
                        <option value="city">Search by zip</option>
                        <option value="zip">Search by city</option>
                    </Form.Select>
                    {this.state.searchByCity ? 
                            <>
                                <Form.Control 
                                    type="text" 
                                    name="cityName"
                                    id="cityNameControl" 
                                    placeholder="City" 
                                    onChange={this.handleChange} 
                                    />
                                <OverlayTrigger
                                    placement="top"
                                    delay={{ show: 250, hide: 400 }}
                                    overlay={this.renderTooltip}
                                    >
                                    <Form.Control 
                                        type="text" 
                                        name="stateName" 
                                        id="stateNameControl" 
                                        placeholder="State" 
                                        onChange={this.handleChange} 
                                    />
                                </OverlayTrigger>
                            </>
                        : 
                            <Form.Control 
                                type="text" 
                                name="zip" 
                                id="zipControl"
                                placeholder="Zip Code" 
                                onChange={this.handleChange} />
                        }
                </Form.Group>
                <Form.Group id="speciesButtons" >
                    <ToggleButtonGroup name="type" id="toggleGroup">
                        <ToggleButton
                            key={`all-button-key`}
                            id={`all-button`}
                            type="radio"
                            name="type"
                            onChange={this.handleChange}
                            value="all"
                            checked={this.state.type === "all"}
                            className="pink toggle"
                        >
                            All
                        </ToggleButton>
                        <ToggleButton
                            key={`cat-button-key`}
                            id={`cat-button`}
                            type="radio"
                            name="type"
                            onChange={this.handleChange}
                            value="cat"
                            checked={this.state.type === "cat"}
                            // active={this.state.type === "cat"}
                            className="pink toggle"
                        >
                            Cat
                        </ToggleButton>
                        <ToggleButton
                            key={`dog-button-key`}
                            id={`dog-button`}
                            type="radio"
                            name="type"
                            onChange={this.handleChange}
                            value="dog"
                            checked={this.state.type === "dog"}
                            className="pink toggle"
                        >
                            Dog
                        </ToggleButton>
                        <ToggleButton
                                key={`other-button-key`}
                                id={`other-button`}
                                type="radio"
                                name="type"
                                onChange={this.handleChange}
                                value="other"
                                checked={this.state.type === "other"}
                                className="pink toggle"
                            >
                                Other
                            </ToggleButton>
                    </ToggleButtonGroup>
                    <Form.Control 
                        type="text" 
                        id="otherTypeInput"
                        name="otherType" 
                        placeholder="Other"
                        disabled={this.state.type !== 'other'}
                        onChange={this.handleChange}
                        />
                </Form.Group>
                <Form.Group>
                <Dropdown>
                    <Dropdown.Toggle className="pink" id="advancedSearch">
                        More Options
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
