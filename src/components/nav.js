import React,{Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/nav.css'

class Nav extends Component{
    state={
        common:[
            {
                text: 'Home',
                to: '/'
            },
            {
                text: 'Work',
                to: '/'
            },
            // {
            //     text: 'Education',
            //     to: '/'
            // },
            // {
            //     text: 'Projects',
            //     to: '/'
            // },
            // {
            //     text: 'Interest',
            //     to: '/'
            // },
            // {
            //     text: 'Contact',
            //     to: '/'
            // },
        ]
    }
    buildLink(link){
        return (
        <li className="nav-item" key={link.to}>
            <Link to={link.to}>{link.text}</Link>
        </li>);
    }
    // toggleVisible=()=>{
    //     this.setState({
    //         visible: !this.state.visible
    //     })
    // }
    // openNav=()=>{
        
        // if(this.state.visible){
        //     document.addEventListener('click', this.handleOutsideClick, false);
        // } else {
        //     document.removeEventListener('click', this.handleOutsideClick, false);
        // }
        // this.toggleVisible
        // document.getElementById("mySidenav").style.width="258px";
        // document.body.style.background = "rgba(0,0,0,0.4)";
    // }
    renderLinks= ()=>{
        const {common} =this.state
        const commonLinks = common.map(this.buildLink);
        return[...commonLinks];
    }
    // handleOutsideClick=()=>{
    //     if (document.getElementById("mySidenav")) {
    //         return;
    //     }
    // }
    render(){
        return(
            <Fragment>
                <nav>
                    {/* <Link className="navbar-brand" to="/"></Link> */}
                    <div className="nav-wrapper blue-grey darken-3">
                        <ul className="right">
                            {this.renderLinks()}
                        </ul>
                    </div>
                </nav>
            </Fragment>
            
        )
    }
}

export default Nav;