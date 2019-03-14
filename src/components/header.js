import React, {Component, Fragment} from 'react';
import Conn from '../assets/images/conn.jpg'
import light from '../assets/images/lights.jpg'

class Header extends Component{
    render(){
        return(
        <Fragment>
            <div className="parallax-container">
                <div className="parallax"><img src={Conn}/></div>
            </div>
            <div className="section white">
            <div className="row container">
                <h2 className="header">Parallax</h2>
                <p className="grey-text text-darken-3 lighten-3">Parallax is an effect where the background content or image in this case, is moved at a different speed than the foreground content while scrolling.</p>
            </div>
            </div>
            <div className="parallax-container">
                <div className="parallax"><img src={light}/></div>
            </div>
            <div class="fixed-action-btn">
            <a class="btn-floating btn-large red">
                <i class="large material-icons">mode_edit</i>
            </a>
            <ul>
                <li><a class="btn-floating red"><i class="material-icons">insert_chart</i></a></li>
                <li><a class="btn-floating yellow darken-1"><i class="material-icons">format_quote</i></a></li>
                <li><a class="btn-floating green"><i class="material-icons">publish</i></a></li>
                <li><a class="btn-floating blue"><i class="material-icons">attach_file</i></a></li>
            </ul>
            </div>
        </Fragment>
        );
    }
}

export default Header;




