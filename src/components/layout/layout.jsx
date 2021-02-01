import React, {Component} from "react"
import {Route,Switch,withRouter} from "react-router-dom"
import Landing from "./landing/landing"
import Contact from "./contact/contact"
import Loader from "./loader/loader"
import Footer from "./footer/footer"
import Social from "./fixed/social"
import NavigationDots from "./navigation-dots/navigation-dots"
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
        <div className="landing">
            <Footer/>
            <Loader loaded={this.state.loaded}/>
            <Switch>
               <Route exact path="/">
                   <Landing/>
                   <Social/>
               </Route>
               <Route exact path="/contactUs">
                   <Contact/>
               </Route>
            </Switch>
        </div>
      )
    }
  }


 export default withRouter(Layout);
