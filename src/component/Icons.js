import React from 'react'

import './Icons.css'

class Icons extends React.Component {


    render(){
        return(
        <div className="icons">
            <div className="x b d">
                <img className="y a e" src={require('../img/cat-pink.png')} alt="cat" />
            </div>
            <div className="x c e">
                <img className="y b f" src={require('../img/dog-orange.png')} alt="dog" />
            </div>
            <div className="x a f">
                <img className="y c d" src={require('../img/rabbit.png')} alt="rabbit" />
            </div>
            <div className="x c f">
                <img className="y b d" src={require('../img/cat.png')} alt="cat" />
            </div>
            <div className="x a d">
                <img className="y a e" src={require('../img/dog-pink.png')} alt="dog" />
            </div>
            <div className="x b e">
                <img className="y c f" src={require('../img/rabbit-orange.png')} alt="rabbit" />
            </div>
            <div className="x a e">
                <img className="y c f" src={require('../img/cat-orange.png')} alt="cat" />
            </div>
            <div className="x b f">
                <img className="y a d" src={require('../img/dog.png')} alt="dog" />
            </div>
            <div className="x c d">
                <img className="y b e" src={require('../img/rabbit-pink.png')} alt="rabbit" />
            </div>
        </div>
        )
    }

}

export default Icons;
