import React, {Component} from "react"
import {Route,Switch,withRouter} from "react-router-dom"
import Landing from "./landing/landing"
import Contact from "./contact/contact"
import About from "./about/about"
import Loader from "./loader/loader"
import Wave from "./wave/wave"
import Social from "./fixed/social"
import Nav from "./fixed/navigation"
import logo from "../../assets/images/logo.svg";
import $ from 'jquery'
import ripples from 'jquery.ripples';

class Layout extends Component{

  state={
    loaded:false
  }


  componentDidMount=()=>{
     setTimeout(()=>{
         this.setState({
           loaded:true
         })
     },4000)
  }


  render(){
    return (
      // <Footer/>
        <div className="landing">
            <Loader loaded={this.state.loaded}/>
            <img id="logo" className="landing__s1_img" src={logo} alt="" />
            <Nav/>
            <Switch>
               <Route exact path="/">
                   <Landing/>
                   <Social/>
                   <Wave/>
               </Route>
               <Route exact path="/contactUs">
                   <Contact/>
               </Route>
               <Route exact path="/about">
                   <About/>
               </Route>
            </Switch>
        </div>
      )
    }
  }


 export default withRouter(Layout);
