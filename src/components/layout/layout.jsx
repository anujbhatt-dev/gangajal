import React, {Component} from "react"
import Landing from "./landing/landing"
import mount from "../../assets/images/mount.png"
import $ from 'jquery'
import ripples from 'jquery.ripples'
import {  } from "./layout.css";
  class Layout extends Component{
    componentDidMount () {

     
      $('.test').ripples({
        resolution: 200,
        perturbance: 0.04,
      });
  }


    render(){

  
      return (

        <>
        <div className="test">
<button>test</button>
        </div>
  
     </>
      )
    }
  }


 export default Layout;
