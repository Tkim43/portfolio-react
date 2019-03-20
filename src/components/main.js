import React, {Component, Fragment} from 'react';
import Header from './header.js'
import Work from './work.js'
import About from './about.js'
import Resume from './resume.js'

class Main extends Component{
    render(){
        return(
        <Fragment>
            <Header/>
            <About/>
            <Resume/>
            <Work/>
        </Fragment>
        )
    }
}

export default Main;