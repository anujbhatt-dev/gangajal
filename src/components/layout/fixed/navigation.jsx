import React, {Component} from "react"
import {Link} from "react-router-dom"

  class Nav extends Component{

    render(){

      return (
             <div className="nav">
                 <Link to="/"  className="nav__item nav__home">Home</Link>
                 <i className="nav__item fa fa-circle fa-1x" aria-hidden="true"></i>
                 <Link to="/contactUs"  className="nav__item">Reach Us</Link>
                 <i className="nav__item fa fa-circle" aria-hidden="true"></i>
                 <Link to="/about"  className="nav__item">About</Link>
             </div>
      )
    }
  }


 export default Nav;
