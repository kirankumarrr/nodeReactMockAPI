import React, { Component } from 'react';

 class ChildClassComponent extends Component {
     
    constructor(props){
        super(props);
        this.state={
            currentAValue:  props.childVal//5
        }
      }

      mul=()=>{
        const {currentAValue} =this.state;
        this.setState({currentAValue:currentAValue*5})
      }

    render() {
        const{currentAValue}=this.state;
        return (
            <div>
                
                <h1>ChildClassComponent { this.props.childVal*5}</h1>
                <button onClick={this.mul}>mul</button>
            </div>
        )
    }
}

export default ChildClassComponent;
