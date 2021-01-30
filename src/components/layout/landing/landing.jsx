import React, {Component} from "react"
import $ from "jquery"
import ripples from 'jquery.ripples'
import logo from "../../../assets/images/logo.svg"
import music from "../../../assets/audios/music.mp3"


  class Landing extends Component{

    state={
      music:new Audio(music),
      paused:true,
      data:[
        {
          backgroundImage:"url('https://images.unsplash.com/photo-1541424273754-31e974582772?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')",
          cursor:"",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus ab dolores delectus nostrum rem necessitatibus quo sint consequatur cumque architecto?",
          ripple:true,
          head:"why us"
        },
        {
          backgroundImage:"url('https://images.unsplash.com/photo-1504997565900-67b8c1e70940?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80')",
          cursor:"",
          text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum autem iusto distinctio, veniam sunt facilis fugiat odit a, suscipit, ducimus cum? Accusamus numquam, rerum ducimus dolor voluptatem saepe atque, voluptatum a sint, voluptas reprehenderit, accusantium. Harum, dolorem ad magnam officiis.",
          ripple:true,
          head:""
        }
      ],
      page:0
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

    pageHandler=(arrow)=>{
       if(arrow==="up"){
          if(this.state.page===0){
            this.setState({
              page:this.state.data.length-1
            })
          }else{
            this.setState({
              page:this.state.page - 1
            })
          }
       }else{
         if(this.state.page===(this.state.data.length-1)){
           this.setState({
             page:0
           })
         }else{
           this.setState({
             page:this.state.page + 1
           })
         }
       }
       this.rippleHandler()
    }

    componentDidMount=()=>{

      $(".page0").ripples({
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

//screen
       this.rippleHandler()

   }

    rippleHandler=()=>{
      switch(this.state.page){
        case 0:
        case 1:
        case 3:
            $(".page"+this.state.page).ripples({
              resolution:800,
              perturbance:0.04
            })
      }
    }

    render(){

      return (
          <div className="landing">
             <div onClick={this.musicHandler} className="landing__music_toggler"><i class="fa fa-circle" aria-hidden="true"></i></div>
             <img id="logo" className="landing__s1_img" src={logo} alt=""/>
            <div style={{backgroundImage:this.state.data[this.state.page].backgroundImage}} className={"page page"+this.state.page}>
                  <h1 className="page__head">{this.state.data[this.state.page].head}</h1>
                  <p  className="page__text">{this.state.data[this.state.page].text}</p>

            </div>
             <div onClick={()=>this.pageHandler("up")} className="landing__music_toggler page__pageUp"><i class="fa fa-arrow-up" aria-hidden="true"></i></div>
             <div onClick={()=>this.pageHandler("down")} className="landing__music_toggler page__pageDown"><i class="fa fa-arrow-down" aria-hidden="true"></i></div>

             
          </div>
      )
    }
  }


 export default Landing;
