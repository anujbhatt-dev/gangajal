import React, {Component} from "react"
import Landing from "./landing/landing"
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
            <Loader loaded={this.state.loaded}/>
            <Landing/>
            <Social/>
            <NavigationDots/>
            <Footer/>
        </div>
      )
    }
  }


 export default Layout;
