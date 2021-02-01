import React, {Component} from "react"
import namaste from "../../../assets/images/namaste.png"
import $ from "jquery"
import ripples from 'jquery.ripples'

  class Loader extends Component{

    state={
      namaste:"..."
    }

    componentDidMount=()=>{
      $('.loader').ripples({
        resolution: 100,
        perturbance: 0.04,
      });

      setTimeout(()=>{
        this.setState((prev)=>{return {namaste:"N"}})
        setTimeout(()=>{
          this.setState((prev)=>{return {namaste:(prev.namaste+"A")}})
          setTimeout(()=>{
            this.setState((prev)=>{return {namaste:(prev.namaste+"M")}})
            setTimeout(()=>{
              this.setState((prev)=>{return {namaste:(prev.namaste+"A")}})
              setTimeout(()=>{
                this.setState((prev)=>{return {namaste:(prev.namaste+"s")}})
                setTimeout(()=>{
                  this.setState((prev)=>{return {namaste:(prev.namaste+"T")}})
                  setTimeout(()=>{
                    this.setState((prev)=>{return {namaste:(prev.namaste+"E")}})
                  },100)
                },100)
              },100)
            },100)
          },100)
        },100)
      },1000)

    }

    render(){

      return (
          <div className={this.props.loaded?"loader loaded":"loader"}>
               <img src={namaste} alt=""/>
               <div>
                {this.state.namaste}
               </div>
          </div>
      )
    }
  }


 export default Loader;
