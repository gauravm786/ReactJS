
/*
//1.
import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username:"",
            Age:null
        }
    }
    
setName=(event)=>{
      this.setState({username:event.target.value})
    }


    render(){
        return(
        <form>
            <h1>Hello {this.state.username} and your age is {this.state.age}</h1>
            <p>Username:</p>
            <input type="text" name="username" onChange={this.setName} />

    
        </form>
        )
        
    }
}
export default Form
*/

/*
//2.
import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username:"",
            Age:null
        }
    }
    
setName=(event)=>{
      this.setState({username:event.target.value})
    }

setAge=(event)=>{
    this.setState({age:event.target.value})
}    

    render(){
        return(
        <form>
            <h1>Hello {this.state.username} and your age is {this.state.age}</h1>
            <p>Username:</p>
            <input type="text" name="username" onChange={this.setName} />

            <p>Age:</p>
            <input type="text" name="age" onChange={this.setAge} />
        </form>
        )
        
    }
}
export default Form
*/

/*
//3.
import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username:"",
            Age:null
        }
    }
    
setName=(event)=>{
      this.setState({username:event.target.value})
    }

setAge=(event)=>{
    this.setState({age:event.target.value})
}    

setFormData=(event)=>{                                
    this.setState({[event.target.name]:event.target.value})
}

setForm=(event)=>{
    event.preventDefault()
    alert("Hello "+this.state.username) 
}
    render(){
        return(
        <form onSubmit={this.setForm}>
            <h1>Hello {this.state.username} and your age is {this.state.age}</h1>
            <p>Username:</p>
            <input type="text" name="username" onChange={this.setFormData} />

            <p>Age:</p>
            <input type="text" name="age" onChange={this.setFormData} /> 
            <input type="submit" />
        </form>
        )
        
    }
}
export default Form
*/


/*
//4.
import React from "react"
class Form extends React.Component{
    constructor(props){
        super(props)
        this.state={
            Username:"",
            Age:null
        }
    }
    
setName=(event)=>{
      this.setState({username:event.target.value})
    }

setAge=(event)=>{
    this.setState({age:event.target.value})
}    

setFormData=(event)=>{                                
   if(event.target.name==="age" && event.target.value<=18){
       this.setState({errorMsg:<strong>Please Enter age above 18</strong>})
       return
   }
   this.setState({errorMsg:""})
   this.setState({[event.target.name]:event.target.value})
}

setForm=(event)=>{
    event.preventDefault()
    alert("Hello "+this.state.username) 
}
    render(){
        return(
        <form onSubmit={this.setForm}>
            <h1>Hello {this.state.username} and your age is {this.state.age}</h1>
            <p>Username:</p>
            <input type="text" name="username" onChange={this.setFormData} />

            <p>Age:</p>
            <input type="text" name="age" onChange={this.setFormData} /> 
            {this.state.errorMsg}
            <input type="submit" />
        </form>
        )
        
    }
}
export default Form
*/