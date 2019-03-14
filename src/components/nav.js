import React,{Component} from 'react';
import {Link} from 'react-router-dom'

class Nav extends Component{
    render(){
        return(
        <nav>
            <div class="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                {/* <li><Link to="/" >Sass</Link></li> */}
                <li><a href="badges.html">Components</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
                </ul>
            </div>
        </nav>
        )
    }
}

export default Nav;