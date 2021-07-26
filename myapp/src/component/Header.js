//3 july 2021

/*
//1.
//Now we will create different component in different folder and will merge it to single folder
//create three folder inside component and name it as Header.js,Main.js,Footer.js and merge codes of this three file inside Myinfo.js file

import React from "react"
function Header(){
return(
    <div>
        <h1>Gaurav Mishra-Data Scientist</h1>   
    </div>
)
}
export default Header
*/

//3 july 2021 end


//4 july 2021

/*
//1.used by style.css of step 1
import React from "react"
import "../style.css"

function Header(){
return(
    <div>
     <h1 className="navbar">Gaurav Mishra-Data Scientist</h1>   //here claaName attribute is used to use navbar class from style.css 
    </div>                                                      //className came from javascript and it is not related with JSX
)
}
export default Header

//JSX stands for javacript XML and XML stands for extensible markup language and JSX is basically HTML of React 
//JSX is converted to javascript and from javascript it is converted to HTML
*/

/*
//2.
//used by step 1 of MyInfo.js
import React from "react"
import "../style.css"

function Header(props){    //to catch the name in Header.js props is used inside Header function as a parameter
return(
    <div>
        <h1 className="navbar">{props.name}-Data Scientist</h1>   //props.name is used to catch value of name attribute used in MyINfo.js inside Header /
    </div>
)
}
export default Header
*/

//4 july 2021 end


//5 july 2021


//1.
//In React.Component we have setstate,constructor and render
// converting function Header to class  Header 

/*
import React from "react"
import "../style.css"

class Header extends React.Component{
    constructor(props){
        super(props) //super keyword will inherit all the feature of parent component
    }                //to use props,"this" operator is used //to access the content of header class,"this" operator is used whether the content is variable or a function
    render(){
        return(
            <div>
                <h1 className="navbar">{this.props.name}-Data Scientist</h1>  
            </div>
        )
    }
}
export default Header
*/

/*
//2.
//Constructor is optional

import React from "react"
import "../style.css"

class Header extends React.Component{
   // constructor(props){
     //   super(props) //super keyword will inherit all the feature of parent component
   // }                //to use props,"this" operator is used //to access the content of header class,"this" operator is used whether the content is variable or a function
    render(){
        return(
            <div>
                <h1 className="navbar">{this.props.name}-Data Scientist</h1>  
            </div>
        )
    }
}
export default Header
*/

/*3. will give error because state is not used just ignore while coding
import React from "react"
import "../style.css"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.props.name="Rahulll" 
    }               
    render(){
        return(
            <div>
                <h1 className="navbar">{this.props.name}-Data Scientist</h1>  
            </div>
        )
    }
}
export default Header

//TypeError: Cannot assign to read only property 'name' of object '#<Object>'
*/

/*
//4. use step 3 of Main.js and step 5 of MyInfo.js and step 3 of index.js
import React from "react"
import "../style.css"

class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={name:props.name} //state is similar to props and it should be initialized inside constructor and you can assign any value to it
    }//inside component we can record value and save it to the state               
    render(){
        return(
            <div>
                <h1 className="navbar">{this.state.name}-Data Scientist</h1>  
            </div>
        )
    }
}
export default Header
 */

//5 july 2021 end