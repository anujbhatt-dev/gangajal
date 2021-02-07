import React, { Component } from "react"
import water from "../../../../assets/images/water.svg"
import certified from "../../../../assets/images/certified.svg"
import nature from "../../../../assets/images/nature.svg"
import guarantee from "../../../../assets/images/guarantee.svg"
import first from "../../../../assets/images/first.svg"

class Whyus extends Component {

  state = {
    cos: [
      {
        id: 0,
        title: "Exim management",
        content: "Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
      }, {
        id: 1,
        title: "Freight Forwarder",
        content: "Freight forwarders are master of trade. Giving recommendation to the exporter, performing freight operation, looking over documentation. Any business that is in import-export does require freight forwarder for their unique versatility."
      }, {
        id: 2,
        title: "Merchant export/importer",
        content: "Export-import is the most effective money-making career. Know the global market and earn foreign exchange, develop country’s economy, tax concession, improve in sales and profit, increase in foreign sale and many more benefits one can get if stepped in exim world"
      }, {
        id: 3,
        title: "Logistic manager",
        content: "As logistics manager you can organize the storage and distribution of goods. Also, to ensure that orders are carried out correctly. A logistics manager must wear a variety of hats throughout the workday."
      },
      {
        id: 4,
        title: "In CHA",
        content: "After getting certified by exim education one can work under Custom House Agent, and with a good experience can tuen as CHA. work in shipping line, NVOCC , export sales manager and step in real organized and easy money making world ."
      }],
    selectedId: 1,
    // cosContent:"Being an exim manager one manages export/import process, foreseeing movement of goods and being in touch with freight forwarder, logistics, retailers and manufaturer. Exim manager also handles documents, primary responsibilities and many more."
  }


  timeInterval = null;


  componentDidMount = () => {
    this.autoChange();
  }


  coureseToSuccess = (id) => {


    clearInterval(this.timeInterval);

    this.setState({
      selectedId: id
    })


  }

  autoChange = () => {

    this.timeInterval = setInterval(() => {
      this.setState(s => {
        if (s.selectedId === 4)
          return { selectedId: 0 };
       else
        return { selectedId: s.selectedId + 1 };

      })

    }, 2000);



  }

  render() {

    return (
      <>
        <h1 className="heading-primary landing__3_heading">Why us</h1>
        <div className="landing__8">
          <div className="landing__8_bar">
            <div onClick={() => this.coureseToSuccess(0)} className={(this.state.selectedId === 0) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={first} alt="" />
              <div>Exim<br />management</div>
            </div>
            <div onClick={() => this.coureseToSuccess(1)} className={(this.state.selectedId === 1) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={certified} alt="" />
              <div>Freight Forwarder</div>
            </div>
            <div onClick={() => this.coureseToSuccess(2)} className={(this.state.selectedId === 2) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={guarantee} alt="" />
              <div>Merchant<br />export/importer</div>
            </div>
            <div onClick={() => this.coureseToSuccess(3)} className={(this.state.selectedId === 3) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={water} alt="" />
              <div>Logistic manager</div>
            </div>
            <div onClick={() => this.coureseToSuccess(4)} className={(this.state.selectedId === 4) ? "selectedIcon landing__8_bar-box" : "landing__8_bar-box"}>
              <img src={nature} alt="" />
              <div>in CHA</div>
            </div>
          </div>
          <div className="landing__8_box">
            <div className="landing__8_box-images">
              <img className="BUBBLE" src={this.state.selectedId === 0 ? first : this.state.selectedId === 1 ? certified : this.state.selectedId === 2 ? guarantee : this.state.selectedId === 3 ? water : nature} alt="" />
            </div>
            <div className="landing__8_box-text">
              <div className="landing__8_box-text--big">{this.state.cos[this.state.selectedId].title}</div>
              <div className="landing__8_box-text--small">{this.state.cos[this.state.selectedId].content}</div>
            </div>
          </div>
        </div></>
    )
  }
}


export default Whyus;
