import React, {Component} from "react"


  class Social extends Component{

    render(){

      return (
          <div className="social">
              <a href="" target="_blank" className="social__item">{" "}<i className="fa fa-arrow-right" aria-hidden="true"></i></a>
              <a href="" target="_blank" className="social__item">{" "}<i className="fa fa-flask" aria-hidden="true"></i></a>
              <a href="" target="_blank" className="social__item">{" "}<i className="fa fa-circle" aria-hidden="true"></i></a>
          </div>
      )
    }
  }


 export default Social;
