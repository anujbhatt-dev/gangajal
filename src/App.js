import React,{Component} from "react"
import Layout from "./components/layout/layout"
import './App.scss';
import $ from "jquery"
import { BrowserRouter } from "react-router-dom";

class App extends Component{

  componentDidMount=()=>{

  }


  render(){

    return (
      <div className="App">
                 <BrowserRouter>
          <Layout/>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
