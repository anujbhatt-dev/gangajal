import React, { Component } from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"
import Aos from "aos"
import "aos/dist/aos.css"
import { withRouter } from "react-router-dom"

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
    setTimeout(() => {
      document.getElementById("logo").style.position = "absolute"
      document.getElementById("logo").style.top = "4rem"
      document.getElementById("logo").style.left = "50%"
    }, 5000)


    this.setScrollEvent();
  }


  onScrollFunction=(val)=>{

    if(!this.state.scrollAllowed)
      return;

    // window.removeEventListener("scroll", ()=>console.log("removed scroll event"));
    // setTimeout(()=>{
    //   window.addEventListener('scroll',this.setScrollEvent)
    // },10000)

    this.setState({scrollAllowed:false});
     this.scrollHandler(val);
     setTimeout(()=>{
      this.setState({scrollAllowed:true});
     },1000)
  }

  setScrollEvent=()=>{
    var scrollPos = 0;
    window.addEventListener('scroll', ()=>{
      if ((document.body.getBoundingClientRect()).top > scrollPos)
       this.onScrollFunction(-1)      ;
      else
      this.onScrollFunction(1);    // saves the new position for iteration.
      scrollPos = (document.body.getBoundingClientRect()).top;
    });
  }

  scrollHandler = (val) => {

    let newCurrentHash = this.state.currentHash + val;

    if (newCurrentHash > 0 && newCurrentHash<=this.state.maxHash) {
        window.location.hash = "#" + newCurrentHash;
        this.setState({ currentHash: newCurrentHash });
    }


  }


  render() {

    return (
      <div className="landing">
        <div onClick={this.musicHandler} className="landing__music_toggler"><i class="fa fa-circle" aria-hidden="true"></i></div>
        <img id="logo" className="landing__s1_img" src={logo} alt="" />
        <div  className={"page page0"}>
          <h1 id="1" data-aos="fade" className="page__head">why us</h1>
          <p data-aos="fade" className="page__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>
          <div className="page0__cursor"></div>
        </div>
        <div  className={"page page1"}>
          <p id="2" data-aos="fade" className="page__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. In ducimus odit error quae, sapiente doloremque omnis ut. Temporibus sed nulla id porro! Dolor blanditiis, nostrum illo sint voluptates quis nisi.</p>
          <div className="page1__cursor"></div>
        </div>
        <div onClick={() => this.scrollHandler(-1)} className="landing__music_toggler page__pageUp"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
        <div onClick={() => this.scrollHandler(1)} className="landing__music_toggler page__pageDown"><i class="fa fa-arrow-down" aria-hidden="true"></i></div>


      </div>
    )
  }
}


export default withRouter(Landing);
