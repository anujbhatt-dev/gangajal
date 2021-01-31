import React, {Component} from "react"


  class Footer extends Component{

    render(){

      return (
        <div id="3" className="footer">
            <div class="waveWrapper waveAnimation">

              <div class="waveWrapperInner bgMiddle">
                  <div class="wave waveMiddle" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg')"}}></div>
              </div>
              <div class="waveWrapperInner bgBottom">
                  <div class="wave waveBottom" style={{backgroundImage: "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/85486/wave.svg')"}}></div>
              </div>
            </div>
        </div>
      )
    }
  }


 export default Footer;
