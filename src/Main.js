import React from 'react';

import Header from './component/Header'
import SearchForm from './component/SearchForm'
import Pet from './component/Pet'
import Footer from './component/Footer'



class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            pets: []
        }
    }

    render () {
        return (
            <>
                <Header />
                <SearchForm />
                <Pet pets={this.state.pets} />
                {/* <Footer /> */}
            </>
        )
    }
}

export default Main;
