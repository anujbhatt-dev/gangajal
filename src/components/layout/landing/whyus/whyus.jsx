import React, {Component} from "react"
import water from "../../../../assets/images/water.svg"
import certified from "../../../../assets/images/certified.svg"
import nature from "../../../../assets/images/nature.svg"
import guarantee from "../../../../assets/images/guarantee.svg"
import first from "../../../../assets/images/first.svg"

  class Whyus extends Component{

    state={
      cos:[
          {
            title:"Exim management",
            content:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
          },{
            title:"Freight Forwarder",
            content:"Freight forwarders are master of trade. Giving recommendation to the exporter, performing freight operation, looking over documentation. Any business that is in import-export does require freight forwarder for their unique versatility."
          },{
            title:"Merchant export/importer",
            content:"Export-import is the most effective money-making career. Know the global market and earn foreign exchange, develop country’s economy, tax concession, improve in sales and profit, increase in foreign sale and many more benefits one can get if stepped in exim world"
           }, {
            title:"Logistic manager",
            content:"As logistics manager you can organize the storage and distribution of goods. Also, to ensure that orders are carried out correctly. A logistics manager must wear a variety of hats throughout the workday."
             },
          {
            title:"In CHA",
            content:"After getting certified by exim education one can work under Custom House Agent, and with a good experience can tuen as CHA. work in shipping line, NVOCC , export sales manager and step in real organized and easy money making world ."
          }],
        cosTitle:"Exim management",
        cosContent:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
    }


    coureseToSuccess=(num)=>{
      let newState = this.state
      newState.cosTitle = newState.cos[num].title;
      newState.cosContent = newState.cos[num].content;
      this.setState({
        ...newState
      })
   }

    render(){

      return (
        <>
        <h1 className="heading-primary landing__3_heading">Why us</h1>
        <div className="landing__8">
                  <div className="landing__8_bar">
                      <div onClick={()=>this.coureseToSuccess(0)} className={(this.state.cosTitle==="Exim management")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          <img src={first} alt=""/>
                          <div>Exim<br/>management</div>
                      </div>
                      <div  onClick={()=>this.coureseToSuccess(1)} className={(this.state.cosTitle==="Freight Forwarder")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          <img src={certified} alt=""/>
                          <div>Freight Forwarder</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(2)} className={(this.state.cosTitle==="Merchant export/importer")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          <img src={guarantee} alt=""/>
                          <div>Merchant<br/>export/importer</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(3)} className={(this.state.cosTitle==="Logistic manager")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          <img src={water} alt=""/>
                          <div>Logistic manager</div>
                      </div>
                      <div onClick={()=>this.coureseToSuccess(4)} className={(this.state.cosTitle==="In CHA")?"selectedIcon landing__8_bar-box":"landing__8_bar-box" }>
                          <img src={nature} alt=""/>
                          <div>in CHA</div>
                      </div>
                  </div>
                  <div className="landing__8_box">
                      <div className="landing__8_box-images">
                              <img className="BUBBLE" src={this.state.cosTitle==="Exim management"?first:this.state.cosTitle==="Freight Forwarder"?certified:this.state.cosTitle==="Merchant export/importer"?guarantee:this.state.cosTitle==="Logistic manager"?water:nature} alt=""/>
                      </div>
                      <div className="landing__8_box-text">
                            <div className="landing__8_box-text--big">{this.state.cosTitle}</div>
                            <div className="landing__8_box-text--small">{this.state.cosContent}</div>
                      </div>
                  </div>
              </div></>
      )
    }
  }


 export default Whyus;
