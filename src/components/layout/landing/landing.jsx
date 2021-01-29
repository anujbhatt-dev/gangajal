import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
// import shiva from "../../../assets/images/shiva.png"
import mount from "../../../assets/images/mount.png"
import water from "../../../assets/images/water.png"
import sun from "../../../assets/images/sun.png"
import sky from "../../../assets/images/sky.png"
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"


  class Landing extends Component{

    state={
      music:false
    }

    musicHandler=()=>{
      let player = document.querySelector(".landing__music")

      let x = new Audio(music)
      if(!player.paused && !player.ended && 0 < player.currentTime){
        x.pause();
      }else{
        x.play();
      }
    }

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
        water.style.top = value * -.2 + "px";
      })

      // $('.landing__welcome_overlapper').ripples({
      //   resolution: 200,
      //   perturbance: 0.04,
      // });
      setTimeout(()=>{
        document.getElementById("logo").style.position="fixed"
        document.getElementById("logo").style.top="4rem"
        document.getElementById("logo").style.left="50%"
      },5000)
   }

    render(){

      return (
          <div className="landing">
             <div onClick={this.musicHandler} className="landing__music_toggler"></div>
             <audio autoPlay={false} className="landing__music" controls>
               <source src={music} type="audio/mp3"/>
             </audio>
             <div className="landing__s1">
                  <img id="logo" className="landing__s1_img" src={logo} alt=""/>
             </div>
             <div  className="landing__welcome">
                  <img id="sky" className="landing__welcome_img landing__welcome_mount" src={sky} alt=""/>
                  <img id="sun" className="landing__welcome_img landing__welcome_sun" src={sun} alt=""/>
                  <img id="mount" className="landing__welcome_img landing__welcome_mount" src={mount} alt=""/>
                  <img id="water" className="landing__welcome_img landing__welcome_water" src={water} alt=""/>
                  <h2 id="landing__welcome_text"><span id="landing__welcome_text-1">Ayush</span> <span id="landing__welcome_text-2">gangajal</span></h2>
             </div>
          </div>
      )
    }
  }


 export default Landing;
