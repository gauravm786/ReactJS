//4 july 2021

/*
//1.use step 5 of Contact.js and use step 15 of index.js

//Now create Contactcomp.js file inside Contactcard folder

//STEP 1:-
import React from 'react'
function Contactcomp()
{
    return(
    <div>
    <img src="http://placekitten.com/200/300"/>
    <h3>Gaurav Mishra</h3>
    <p>Phone No: 9967600642</p>
    <p>Email:gauravm.103@gmail.com</p>
    </div>
    )
}
export default Contactcomp
*/

//using code repeatedly 
//instead of writing 4 lines in Contact.js we will be calling Contactcomp.js in Contact.js
//In every div tag in Contact.js,schema is same and message are different and now we will use props to get data
/*
//Step 2:-
import React from 'react'
function Contactcomp(props){
    return(
    <div>
    <img src={props.contact.imgURL}/>
    <h3>{props.contact.name}</h3>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
    </div>
    )
}
export default Contactcomp

//and now we will replace 4 lines of Contact.js with Contactcomp.js
*/

/*
//2.use step 6 of Contact.js and use step 16 of index.js

import React from 'react'
function Contactcomp(props){
    return(
    <div>
    <img src={props.contact.imgURL}/>
    <h3>{props.contact.name}</h3>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
    </div>
    )
}
export default Contactcomp
*/

/*
//3.used by step 1 of Contactdata.js
import React from 'react'
function Contactcomp(props){
    return(
    <div>
    <img src={props.contact.imgURL}/>
    <h3>{props.contact.name}</h3>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
    </div>
    )
}
export default Contactcomp
*/

//4 july 2021 end


//5 july 2021

/*
//1.
//converting function component to class component means function Contactcomp to class Contactcomp

import React from "react"
class Contactcomp extends React.Component{
    render(){
        return(
            <div>
                <p>hi</p>
                <img src={this.props.contact.imgURL}/>
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.email}</p>
            </div>
            )
    }
}
export default Contactcomp
*/


//2.
import React from "react"
class Contactcomp extends React.Component{
    render(){
        return(
            <div>
                <p>hi</p>
                <img src={this.props.contact.imgURL}/>
                <h3>{this.props.contact.name}</h3>
                <p>{this.props.contact.phone}</p>
                <p>{this.props.contact.email}</p>
            </div>
            )
    }
}
export default Contactcomp


//5 july 2021 end