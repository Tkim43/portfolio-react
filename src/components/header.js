import React, {Component, Fragment} from 'react';
import Tech from '../assets/images/tech1.jpg'
import '../assets/css/header.css'

class Header extends Component{
    downFunction =()=>{
        window.scroll({
            top: 500, 
            left: 0, 
            behavior: 'smooth'
          });
    }
    render(){
        return(
        <div className="header-container">
            {/* <img className="tech" src={Tech}/> */}
            <h1 className="name">TIFFANY KIM</h1>
            <div className="typewriter">
                <h3 className="job">WEB DEVELOPER</h3>
            </div>
            <a onClick={this.downFunction} className="btn-floating cyan darken-4"><i className="material-icons">arrow_downward</i></a>
        </div>
        );
    }
}

export default Header;




