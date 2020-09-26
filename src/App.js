import React, { Component } from 'react'
import AppFunction from './AppFunction';
import ChildClassComponent from './ChildClassComponent';

class App extends Component {
  
static  windowReference = window.open();

  constructor(props){
    super(props);
    //intial Values
    this.state={
      a:2,
      b:5,
      model:false,
      windowElement:window
    }
    //bind
    // this.increment=this.increment.bind(this);

  }


  componentDidMount(){
    let getWindow = window;
    this.setState({getWindow})
  }


  // getWindow=()=>window.open();



  increment=()=>{
    debugger
    setTimeout(()=>{
        this.makeHref();
    },2000);
  }

  makeHref=()=>{
    this.state.getWindow.open("https://www.google.com/","_blank")
  }

  render() {
    const {a,} =this.state;
    return (
      <div>
       
        <br/><br/>
        <AppFunction a={a} toogleModel={this.increment}/>
        <br/><br/>
       
      </div>
    )
  }
}


export default App



