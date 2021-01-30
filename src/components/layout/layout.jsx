import React, {Component} from "react"
import Landing from "./landing/landing"
import Loader from "./loader/loader"
import Footer from "./footer/footer"
import mount from "../../assets/images/mount.png"
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
            <Footer/>
        </div>
      )
    }
  }


 export default Layout;
