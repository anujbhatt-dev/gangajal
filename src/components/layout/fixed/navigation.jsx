import React, {Component} from "react"
import {NavLink} from "react-router-dom"

  class Nav extends Component{


    routeHandler=(id)=>{
      // if(id==="home"){
      //   document.querySelector("#home").style.transform = "scale(48)";
      //   document.querySelector("#home").style.background = "white";
      //   document.querySelector("#home").style.color = "white";
      //   document.querySelector("#home").style.zIndex= "10000";
      //   document.querySelector("#home").style.overflow= "visibile";
      //   setTimeout(()=>{
      //     document.querySelector("#home").style.transform = "scale(1)";
      //     document.querySelector("#home").style.background = "#333";
      //     document.querySelector("#home").style.color = "white";
      //     document.querySelector("#home").style.zIndex= "1000";
      //     document.querySelector("#home").style.overflow= "hidden";
      //   },500)
      // }else if(id==="contact"){
      //   document.querySelector("#contact").style.transform = "scale(58)";
      //   document.querySelector("#contact").style.background = "white";
      //   document.querySelector("#contact").style.zIndex= "10000";
      //   document.querySelector("#contact").style.overflow= "visibile";
      //   setTimeout(()=>{
      //     document.querySelector("#contact").style.transform = "scale(1)";
      //     document.querySelector("#contact").style.background = "transparent";
      //     document.querySelector("#contact").style.zIndex= "1000";
      //     document.querySelector("#contact").style.overflow= "hidden";
      //
      //   },500)
      // }else{
      //   document.querySelector("#about").style.transform = "scale(58)";
      //   document.querySelector("#about").style.background = "white";
      //   document.querySelector("#about").style.zIndex= "10000";
      //   document.querySelector("#about").style.overflow= "visibile";
      //   setTimeout(()=>{
      //     document.querySelector("#about").style.transform = "scale(1)";
      //     document.querySelector("#about").style.background = "transparent";
      //     document.querySelector("#about").style.zIndex= "1000";
      //     document.querySelector("#about").style.overflow= "hidden";
      //
      //   },500)
      // }
    }

    render(){
      // <Link to="/"  className="nav__item nav__home btn btn-1">
      // </Link>

      return (
             <div className="nav">
                 <NavLink onClick={()=>this.routeHandler("home")} exact activeStyle={{color:"#fff",background:"#333"}} to="/" id="home" className="nav__item nav__home">
                     Home
                  </NavLink>
                  <NavLink  onClick={()=>this.routeHandler("contact")} exact activeStyle={{color:"#0e9bd7"}} to="/contactUs"  id="contact" className="nav__item">
                      Reach us
                   </NavLink>
                   <NavLink  onClick={()=>this.routeHandler("about")} exact activeStyle={{color:"#0e9bd7"}} to="/about"  id="about" className="nav__item ">
                       about
                    </NavLink>
             </div>
      )
    }
  }


 export default Nav;
