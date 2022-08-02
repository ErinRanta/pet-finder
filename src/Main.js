import React from 'react';

import SearchForm from './SearchForm'
import Pet from './component/pet'

class Main extends React.Component {

    render () {
        return (
            <>
            <SearchForm />
            <Pet />
            </>
        )
    }
}

export default Main;
