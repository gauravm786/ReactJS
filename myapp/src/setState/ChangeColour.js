//6 july 2021

//today we will update value of state
//state is used to capture the event(action) of the particular component and if there is a change in a particular state then component is reloaded
//today we will learn about setstate,the method setstate is available via this operator
//setstate is used to add or update the property,it means exisiting property is updated and new property is added to the state

/*
//1.
import React from "react"
class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Ferrari",
            Color:"red",
            year:"2020"
        }
    }
    
  changeTheColor(){

  }

    render(){
        return(
            <div>
                <h1>I have a car of brand {this.state.brand}</h1>
                <p>of Color {this.state.Color} of the year {this.state.year}</p>
                <button type="button" onClick={this.changeTheColor}>Change the color to green</button>
            </div>
        )
        
    }
}
export default Color
*/

/*
//2.
import React from "react"
class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Ferrari",
            Color:"red",
            year:"2020"
        }
    }
    
  changeTheColor=()=>{
      this.setState({Color:"green"})
    }

    render(){
        return(
            <div>
                <h1>I have a car of brand {this.state.brand}</h1>
                <p>of Color {this.state.Color} of the year {this.state.year}</p>
                <button type="button" onClick={this.changeTheColor}>Change the color to green</button>
            </div>
        )
        
    }
}
export default Color
*/


//3.
import React from "react"
class Color extends React.Component{
    constructor(props){
        super(props)
        this.state={
            brand:"Ferrari",
            Color:"red",
            year:"2020"
        }
    }
    
  changeTheColor=()=>{
      this.setState({Color:"green",name:"Gaurav"})
    }

    render(){
        return(
            <div>
                <h1>Im {this.state.name} and i have a car of brand {this.state.brand}</h1>
                <p>of Color {this.state.Color} of the year {this.state.year}</p>
                <button type="button" onClick={this.changeTheColor}>Change the color to green</button>
            </div>
        )
        
    }
}
export default Color