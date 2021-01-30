import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"
import Aos from "aos"
import "aos/dist/aos.css"

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
      Aos.init({
        duration:2000,
        delay:100
      });
      $(".page0").ripples({
        resolution:800,
        perturbance:0.04
      })
      $(".page1").ripples({
        resolution:800,
        perturbance:0.04
      })

//music
      this.state.music.loop=true;
      setTimeout(()=>{
        document.getElementById("logo").style.position="fixed"
        document.getElementById("logo").style.top="4rem"
        document.getElementById("logo").style.left="50%"
      },5000)

       const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
       console.log(vh);

       // $(window).scroll((e)=>{
       //   let top = window.pageYOffset;
       //   console.log(top);
       //   if(top>0 && top < 200){
       //     document.querySelector("#screen2").scrollIntoView();
       //   }
       // })
   }

    render(){

      return (
          <div className="landing">
             <div onClick={this.musicHandler} className="landing__music_toggler"><i class="fa fa-circle" aria-hidden="true"></i></div>
             <img id="logo" className="landing__s1_img" src={logo} alt=""/>
            <div id="screen1" className={"page page0"}>
                  <h1 data-aos="fade"  className="page__head">why us</h1>
                  <p  data-aos="fade"  className="page__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>
                  <div className="page0__cursor"></div>
            </div>
            <div id="screen2" className={"page page1"}>
                  <p data-aos="fade" className="page__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>
                  <div className="page1__cursor"></div>
            </div>
             <div onClick={()=>this.pageHandler("up")} className="landing__music_toggler page__pageUp"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
             <div onClick={()=>this.pageHandler("down")} className="landing__music_toggler page__pageDown"><i class="fa fa-arrow-down" aria-hidden="true"></i></div>


          </div>
      )
    }
  }


 export default Landing;
