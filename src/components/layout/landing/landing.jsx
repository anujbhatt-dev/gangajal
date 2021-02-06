import React, { Component } from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"
import bottle from "../../../assets/images/bottle.png"
import bottle2 from "../../../assets/images/bottle2.png"
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



      <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>

        <div  className={"page page0"}>
          <h1 id="0" className="page__head">why Us</h1>
          <p className="page__text">Lorem ipsum olor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>

          <div className="page0__bottle">
            <Tilt>
                <img src={bottle} alt=""/>
            </Tilt>
          </div>

          <div className="page0__bottle2">
            <Tilt>
                <img src={bottle2} alt=""/>
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
        <div  className={"flexer"}>
          <svg xmlns="http://www.w3.org/2000/svg"  shape-rendering="geometricPrecision" width="600" height="400">
				<link href="https://fonts.googleapis.com/css?family=Oswald:600" rel="stylesheet"/>

	<defs>
		<filter id="waterTexture" >


			<feTurbulence result="undulation" numOctaves="2" baseFrequency="0" seed="0" type="turbulence">

				<animate

					attributeName="baseFrequency"
					dur="15s"
					keySplines="
						0.5 0 0.5 1;
						0.5 0 0.5 1"
					keyTimes="
						0;
						0.5;
						1"
					calcMode="spline"
					values="
						0.005,0.009;
						0.009,0.005;
						0.005,0.009"
					repeatCount="indefinite"/>

			</feTurbulence>
				<feColorMatrix
					in="undulation"
					type="hueRotate"
					values="180" >

					<animate
						attributeName="values"
						dur="1s"
						from="0"
						to="360"
						repeatCount="indefinite"/>

				</feColorMatrix>
        <feColorMatrix in="dist" result="circulation" type="matrix"
                               values="4 0 0 0 1
                                       4 0 0 0 1
                                       4 0 0 0 1
                                       1 0 0 0 0
                                       "/>
            <feDisplacementMap in="SourceGraphic" in2="circulation" scale="10" result="dist" />
			<feDisplacementMap in="dist" in2="undulation" scale="20" result="woah" />
		</filter>
	</defs>
	<g style={{width:"100vw"}} id="svg_7">
		<rect width="100rem" height="10rem" fill="#2cb8d2"/>
		<g>
			<text x="35%" y="7rem" fill="white" transform="translateX(-100%)">
				why us?
			</text>
		</g>
	</g>

</svg>
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
