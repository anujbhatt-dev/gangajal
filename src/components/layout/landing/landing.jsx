import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import mount from "../../../assets/images/mount.png"
import water from "../../../assets/images/water.jpg"
import sun from "../../../assets/images/sun.png"
import sky from "../../../assets/images/sky.png"
import valley from "../../../assets/images/valley.png"
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"


  class Landing extends Component{

    state={
      music:new Audio(music),
      paused:true,
    }

    musicHandler=()=>{
      if(this.state.paused){

        this.state.music.play()
        .then(
      this.setState({paused:false}))}
      else{
        this.state.music.pause();
        this.setState({paused:true});
      }
    }

    componentDidMount=()=>{
      $('.landing__s2').ripples({
        resolution: 200,
        perturbance: 0.04,
      });

      this.state.music.loop=true;
      let sun = document.getElementById("sun");
      $(window).scroll(()=>{
        let value = window.scrollY;
        console.log(value);
        let val = window.scrollX;
        if(value>=600){
          sun.style.top = (  (value-600) * -1) + "px";
        }
      })



      setTimeout(()=>{
        document.getElementById("logo").style.position="fixed"
        document.getElementById("logo").style.top="4rem"
        document.getElementById("logo").style.left="50%"
      },5000)

   }

    render(){

      return (
          <div className="landing">
             <div onClick={this.musicHandler} className="landing__music_toggler"><i class="fa fa-circle" aria-hidden="true"></i></div>
             <div className="landing__s1">
                  <img id="logo" className="landing__s1_img" src={logo} alt=""/>
             </div>
             <div className="landing__s2">
                   <img id="" className="landing__welcome_img  landing__s2_img" src={water} alt=""/>
                   <img id="sun" className="landing__welcome_img" src={sun} alt=""/>
                   <img id="" className="landing__welcome_img landing__s2_img" src={valley} alt=""/>

             </div>
          </div>
      )
    }
  }


 export default Landing;
