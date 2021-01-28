import React, {Component} from "react"
import $ from "jquery"
import shiva from "../../../assets/images/shiva.png"
import mount from "../../../assets/images/mount.png"
import water from "../../../assets/images/water.png"
import sun from "../../../assets/images/sun.png"
import sky from "../../../assets/images/sky.png"

  class Landing extends Component{

    componentDidMount=()=>{
      let sky = document.getElementById("sky");
      let sun = document.getElementById("sun");
      let mount = document.getElementById("mount");
      let water = document.getElementById("water");
      let shiva = document.getElementById("shiva");
      $(window).scroll(()=>{
        let value = window.scrollY;
        let val = window.scrollX;
        sky.style.top = value * .5 + "px";
        sun.style.top = value * -1 + "px";
        sun.style.left = value * 1 + "px";
        water.style.top = value * -.5 + "px";
        shiva.style.top = value * 1 + "px";
        shiva.style.left = 50+value * .1 + "%";
        // mount.style.top = value * 1 + "px";
      })

   }

    render(){

      return (
          <div className="landing">
             <div className="landing__welcome">
                  <img id="sky" className="landing__welcome_img landing__welcome_mount" src={sky} alt=""/>
                  <img id="sun" className="landing__welcome_img landing__welcome_sun" src={sun} alt=""/>
                  <img id="mount" className="landing__welcome_img landing__welcome_mount" src={mount} alt=""/>
                  <img id="water" className="landing__welcome_img landing__welcome_water" src={water} alt=""/>
                  <img id="shiva" className="landing__welcome_img landing__welcome_shiva" src={shiva} alt=""/>
                  <h2 id="landing__welcome_text"><span id="landing__welcome_text-1">Ayush</span> <span id="landing__welcome_text-2">gangajal</span></h2>
             </div>
          </div>
      )
    }
  }


 export default Landing;
