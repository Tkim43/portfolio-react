import React, { Component, Fragment } from 'react';
import Me from '../assets/images/circle.png'
import '../assets/css/about.css'

class About extends Component {
    render() {
        return (
            <div className="container about-container">
                <div className="row about">
                    <div className="col s6">
                        <img className="bass" src={Me} />
                    </div>
                    <div className="col s6">
                        <h2 className="">About Me</h2>
                        <p className="">I graduated from California State University, Fullerton Fall, 2017. I have taken Java and Python programming classes. I have a strong interest in web development because I love to design, build and create dynamic pieces of work. In order to expand my skills I learned React, Redux, Javascript, HTML, JQuery, Vanilla Javascript, SASS, Materialize, CSS, Node, API's, Git, Agile, Express, PHP, mySQL, AWS, AWS S3, AJAX.
    
    I'm currently pursuing new opportunities and can be reached via email or by phone</p>
                        <h6 className="blue-text">Mail: <span className="grey-text darken-3">minikim90@csu.fullerton.edu</span></h6>
                        <h6 className="blue-text">Phone: <span className="grey-text darken-3">714-468-4072</span></h6>
                        <button className="cyan darken-4 waves-effect waves-light btn-large">CONTACT ME</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;