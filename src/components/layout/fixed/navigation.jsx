import React, {Component} from "react"
import {NavLink} from "react-router-dom"

  class Nav extends Component{

    render(){
      // <Link to="/"  className="nav__item nav__home btn btn-1">
      // </Link>

      return (
             <div className="nav">
                 <NavLink exact activeStyle={{color:"#fff",background:"#333"}} to="/" className="nav__item nav__home">
                     Home
                  </NavLink>
                  <NavLink exact activeStyle={{color:"#0e9bd7"}} to="/contactUs" className="nav__item">
                      Reach us
                   </NavLink>
                   <NavLink exact activeStyle={{color:"#0e9bd7"}} to="/about" className="nav__item ">
                       about
                    </NavLink>
             </div>
      )
    }
  }


 export default Nav;
