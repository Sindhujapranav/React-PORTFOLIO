import React from 'react';
import Background from "./images/yeh.jpeg";
import './Header.css';



const bgimage = {
    backgroundImage: `url( ${Background})`,
    height: '35vh',
    BackgroundSize: 'cover'

}

class Landing extends React.Component {

    render() {
        return (
            <div>
                <header style={bgimage}>
                    <h1>SINDHUJA GANESAN</h1>
                    <p>Hi! To know more about me!!!</p>
                    <a href="#button"> Click Here!! </a>
                </header>

            </div>
        );
    };
};

export default Landing