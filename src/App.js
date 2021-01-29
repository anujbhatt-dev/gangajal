import React,{Component} from "react"
import Layout from "./components/layout/layout"
import './App.scss';
import $ from "jquery"

class App extends Component{

  componentDidMount=()=>{

  }


  render(){

    return (
      <div className="App">
          <Layout/>
      </div>
    );
  }
}

export default App;
