import React, { Component } from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"
import bottle from "../../../assets/images/bottle.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { withRouter } from "react-router-dom"
import { Animator, ScrollContainer, ScrollPage, batch,FadeUp,ZoomInScrollOut,FlexCenterStyle, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";
import Tilt from 'react-parallax-tilt';
import {Link} from "react-router-dom"


class Landing extends Component {

  state = {
    music: new Audio(music),
    paused: true,
    maxHash: 3,
    scrollAllowed:true,
    currentHash:1,

  }

   scrollCount=0;

  musicHandler = () => {
    if (this.state.paused) {

      this.state.music.play()
        .then(
          this.setState({ paused: false }))
    }
    else {
      this.state.music.pause();
      this.setState({ paused: true });
    }
  }

  componentDidMount = () => {
    Aos.init({
      duration: 2000,
      delay: 100
    });
    $(".page0").ripples({
      resolution: 800,
      perturbance: 0.04
    })
    $(".page1").ripples({
      resolution: 800,
      perturbance: 0.04
    })

    //music
    this.state.music.loop = true;

    //logo transition
    // setTimeout(() => {
    //   document.getElementById("logo").style.position = "absolute"
    //   document.getElementById("logo").style.top = "4rem"
    //   document.getElementById("logo").style.left = "15rem"
    // }, 4000)

  }

   nowHandler=()=>{
      document.querySelector(".page__head_span").style.transform = "scale(28)";
      document.querySelector(".page__head_span").style.background = "white";
      document.querySelector(".page__head_span").style.zIndex= "10000";
      document.querySelector(".page__head_span").style.overflow= "visibile";
      setTimeout(()=>{
        this.props.history.push("/contactUs");
      },500)
   }

  render() {

    return (
      <div className="landing">
        <div onClick={this.musicHandler} className="landing__music_toggler"><i class="fa fa-circle" aria-hidden="true"></i></div>
      <img id="logo" className="landing__s1_img" src={logo} alt="" />


      <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>

        <div  className={"page page0"}>
          <h1 id="0" className="page__head">why 0</h1>
          <p className="page__text">Lorem ipsum olor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>

          <div className="page0__bottle">
            <Tilt>
                <img src={bottle} alt=""/>
            </Tilt>
          </div>
        </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={1}>
        <Animator animation={ZoomInScrollOut}>
        <div  className={"page page1"}>
          <h1 id="1" className="page__head">contact us <span onClick={this.nowHandler} className="page__head_span">now</span> </h1>
          <p className="page__text">Lorem ipsum olor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>

        </div>
        </Animator>
      </ScrollPage>
      <ScrollPage page={2}>
        <Animator animation={batch(Fade(), MoveOut(0, -200),)}>
        <div  className={"page page0"}>
          <h1 id="2" className="page__head">why 2</h1>
          <p className="page__text">Lorem ipsum olor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>

        </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={3}>
        <Animator animation={batch(Fade(), Sticky())}>
        <div  className={"page page1"}>
          <h1 id="3" className="page__head">why 3</h1>
          <p className="page__text">Lorem ipsum olor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>

        </div>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
    </div>
    )
  }
}


export default withRouter(Landing);
