//3 july 2021

/*
//1.
//create component folder inside src and and create MyInfo.js file inside component folder

import React from "react"
function MyInfo(){
return(        //all the codes inside return statement are in JSX form and this JSX are converted to HTML with the help of React and then it is sent to the browser
    <div>      //because browser read codes in HTML format but not in JSX and hence React is used
        <h1>Gaurav Mishra</h1>
        <p>My companies so far</p>
        <ul>
            <li>Google</li>
            <li>Amazon</li>
            <li>Microsoft</li>
        </ul>
    </div>
)
}
export default MyInfo
*/

/*
//2.
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
function MyInfo(){
return(
    <div>
        <Header/>
        <Main/>
        <Footer/>
    </div>
)
}
export default MyInfo
*/

//3 july 2021 end


//4 july 2021

/*
//1.use step 10 of index.js and step 2 of Header.js
//using props:-props is a keyword in a ReactJS which helps to get message from one component to another component

//myapp>src>component>MyInfo.js

import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function MyInfo(){
return(
    <div>
        <Header name={"Harsh Mishra"}/> //here name is attribute and its value is Harsh Mishra and now it will be used inside Header.js using props
        <Main/>
        <Footer/>
    </div>
)
}
export default MyInfo
*/

//4 july 2021 end


//5 july 2021

//whenver <Main/> this statement is called object is created automatically and render function is called immediately and render function will return JSX and JSX will be placed over <Main/>

/*
//1.
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function MyInfo(){
return(
    <div>
        <Header name={"Gaurav Mishra"}/>
        <Main/>             
        <Footer/>
    </div>
)
}
export default MyInfo
*/

/*
//2.
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function MyInfo(){
return(
    <div>
        <Header name={"Gaurav Mishra"}/>
        <Main/>             
        <Footer/>
    </div>
)
}
export default MyInfo
*/

/*
//3.
import React from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"

function MyInfo(){
return(
    <div>
        <Header name={"Gaurav Mishra"}/>
        <Main/>             
        <Footer/>
    </div>
)
}
export default MyInfo
*/

//5 july 2021 end
