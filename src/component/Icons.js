import React from 'react'

import './Icons.css'

class Icons extends React.Component {


    render(){
        return(
        <div className="x">
            <img className="y" src="../img/cat.png" alt="cat" />
            <img className="y" src="../img/dog.png" alt="dog" />
            <img className="y" src="./../img/rabbit.png" alt="rabbit" />

        </div>
        )
    }

}

export default Icons;
