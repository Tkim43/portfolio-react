import React, {Component, Fragment} from 'react';
import Tech from '../assets/images/tech1.jpg'
import '../assets/css/header.css'

class Header extends Component{
    render(){
        return(
        <Fragment>
            <img className="tech" src={Tech}/>
        </Fragment>
        );
    }
}

export default Header;




