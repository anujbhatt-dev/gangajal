import React, {Component} from "react"
import {Link} from "react-router-dom"

  class Nav extends Component{

    render(){
      // <Link to="/"  className="nav__item nav__home btn btn-1">
      // </Link>

      return (
             <div className="nav">
                 <Link  to="/" className="nav__item nav__home">
                     Home
                  </Link>
                  <Link  to="/contactUs" className="nav__item nav__home">
                      Reach us
                   </Link>
                   <Link  to="/about" className="nav__item nav__home">
                       about
                    </Link>
             </div>
      )
    }
  }


 export default Nav;
