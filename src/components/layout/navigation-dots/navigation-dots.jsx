import React, {Component} from "react"
import {Link} from "react-scroll"


class NavigationDots extends Component{

  // <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="screen3" smooth="true" duration={500} className="nav__dots"></Link>
  // <Link onClick={this.props.clicked} hashSpy={true} spy={true} activeClass="nav__active" to="screen4" smooth="true" duration={500} className="nav__dots"></Link>

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


export default NavigationDots;
