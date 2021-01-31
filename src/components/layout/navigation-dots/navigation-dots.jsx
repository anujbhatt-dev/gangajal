import React, {Component} from "react"
import {Link} from "react-scroll"
import {NavLink, withRouter} from "react-router-dom"


class NavigationDots extends Component{

  // <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="screen3" smooth="true" duration={500} className="nav__dots"></Link>
  // <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="screen4" smooth="true" duration={500} className="nav__dots"></Link>

  
  state={
    location:null,
  }

  componentDidUpdate=()=>{
  if(this.state.location===this.props.location.hash)
       return;

    window.location.hash=this.props.location.hash;
    this.setState({location:this.props.location.hash})
    console.log(this.props.location.hash+" "+this.state.location+" "+ window.location.hash);
  }

  render(){

    return (
       <nav className="nav">
           <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="1" smooth="true" duration={500} className="nav__dots"></Link>
           <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="2" smooth="true" duration={500} className="nav__dots"></Link>
           <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="3" smooth="true" duration={500} className="nav__dots"></Link>
       </nav>
    )
  }
}


export default withRouter(NavigationDots);
