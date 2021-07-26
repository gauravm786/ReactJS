//4 july 2021

/*
//1.use step 11 of index.js
//Now create Contactcard component or folder in src and create Contact.js file inside Contactcard folder

import React from "react"
function Contact()
{
    return(
        <div>
            <img src="http://placekitten.com/200/300"/>
        </div>
    )
}
export default Contact
/*

/*
//2.use step 12 of index.js

import React from "react"
function Contact()
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
export default Contact
*/

/*
//3.use step 13 of index.js

import React from "react"
import Contactcomp from "./Contactcomp.js"

function Contact()
{
    return(
        <div>
            <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
            <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>    
</div>
    )
}
export default Contact
*/

/*
//4.use step 14 of index.js

import React from "react"
function Contact()
{
    return(
        <div>
        <div>
            <img src="http://placekitten.com/200/300"/>
            <h3>Gaurav Mishra</h3>
            <p>Phone No: 9967600642</p>
            <p>Email:gauravm.103@gmail.com</p>
        </div>
          <div>
          <img src="http://placekitten.com/200/300"/>
          <h3>Harsh Mishra</h3>
          <p>Phone No: 9967600642</p>
          <p>Email:harshm.103@gmail.com</p>
      </div>
        <div>
        <img src="http://placekitten.com/200/300"/>
        <h3>Sarika Mishra</h3>
        <p>Phone No: 9967600642</p>
        <p>Email:sarikam.103@gmail.com</p>
    </div>
      <div>
      <img src="http://placekitten.com/200/300"/>
      <h3>Rahul Mishra</h3>
      <p>Phone No: 9967600642</p>
      <p>Email:rahulm.103@gmail.com</p>
  </div>
    <div>
    <img src="http://placekitten.com/200/300"/>
    <h3>Raja Mishra</h3>
    <p>Phone No: 9967600642</p>
    <p>Email:rajam.103@gmail.com</p>
</div>
</div>
    )
}
export default Contact
*/

/*
//5.used by step 1 of Contactcomp.js

import React from "react"
import Contactcomp from "./Contactcomp.js"

function Contact()
{
    return(
        <div>
            <Contactcomp Contact={{                                      
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
</div>
    )
}
export default Contact
 */


/*
//6.used by step 2 of Contactcomp.js

import React from "react"
import Contactcomp from "./Contactcomp.js"

function Contact()
{
    return(
        <div>
            <Contactcomp Contact={{                                      
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
            <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
                <Contactcomp Contact={{
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>    
</div>
    )
}
export default Contact
*/    

/*
//7.used by step 1 of Contactdata.js
import React from "react"
import Contactcomp from "./Contactcomp.js"
import data from "./Contactdata.js"
function Contact(){
    const contactComponent=data.map(user=>   //here mapping is used to call data from Contactdata.js
            <Contactcomp contact={{
            imgURL:user.imgURL,
            name:user.name,
            phone:user.phone,
            email:user.email
            
        }}/>
     )

        return(
            <div> 
                {contactComponent}
            </div>
        )
    }
export default Contact
*/    

//4 july 2021 end


//5 july 2021

/*
//1.use step 1 of Contactcomp.js and step 3 of index.js

import React from "react"
import Contactcomp from "./Contactcomp.js"
import data from "./Contactdata.js"
function Contact(){
    const contactComponent=data.map(user=>   //here mapping is used to call data from Contactdata.js
            <Contactcomp contact={{
            imgURL:user.imgURL,
            name:user.name,
            phone:user.phone,
            email:user.email
            
        }}/>
     )

        return(
            <div> 
                {contactComponent}
            </div>
        )
    }
export default Contact
*/

/*
//2.use step 2 of Contactcomp.js and step 4 of index.js

import React from "react"
import Contactcomp from "./Contactcomp.js"
import data from "./Contactdata.js"

class Contact extends React.Component{
    constructor(props){
        super(props)
        this.contactComponent=data.map(user=>
            <Contactcomp contact={{
                   name:user.name,
                   phone:user.phone,
                   email:user.email,
                   imgURL:user.imgURL
                   }}/>
       )
    }
    render(){
        return(
            <div>
                {this.contactComponent}
            </div>
        ) 
    }
}export default Contact
*/

//5 july 2021 end