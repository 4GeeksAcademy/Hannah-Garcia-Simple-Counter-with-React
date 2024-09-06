//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";
import PropTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";


function SimpleCounter(props) {
    return (
        <div className="counter d-flex bg-dark text-white py-3 justify-content-center">
            <div className="digit clock">
                <i className="far fa-clock"></i>
            </div>
            <div className="digit six">{props.digitSix % 10}</div>
            <div className="digit five">{props.digitFive % 10}</div>
            <div className="digit four">{props.digitFour % 10}</div>
            <div className="digit three">{props.digitThree % 10}</div>
            <div className="digit two">{props.digitTwo % 10}</div>
            <div className="digit one">{props.digitOne % 10}</div>
        </div>
    );
}

SimpleCounter.propTypes = {
    digitSix: PropTypes.number,
    digitFive: PropTypes.number,
    digitFour: PropTypes.number,
    digitThree: PropTypes.number,
    digitTwo: PropTypes.number,
    digitOne: PropTypes.number
};

const root = ReactDOM.createRoot(document.getElementById('app'));

let counter = 0;
setInterval(function () {
    const six = Math.floor(counter / 1000000) % 10;
    const five = Math.floor(counter / 10000) % 10;
    const four = Math.floor(counter / 1000) % 10;
    const three = Math.floor(counter / 100) % 10;
    const two = Math.floor(counter / 10) % 10;
    const one = Math.floor(counter / 1) % 10;
    counter++;
    root.render(<SimpleCounter digitSix={six} digitFive={five} digitFour={four} digitThree={three} digitTwo={two} digitOne={one} />);
}, 1000);

//render your react application


