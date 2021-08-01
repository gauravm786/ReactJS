
//3 July 2021 (Steps 1-6 are pre-steps)

//firstly install react and to install react use the following command
//npx create-react-app <app name> 

//App.js
/*
1.
(Remove codes from <header> </header> and type <p>Hello React</p> inside div tag(<div></div>) and also remove <React.StrictMode></React.StrictMode> from index.js)

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <p>Hello React</p>
    </div>
  );
}

export default App;

/*
2.
//index.css

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Gaurav(){  //line 35-41 is called function component
  return(
    <div>
      <p>Hello Gaurav</p>
    </div>
  )
}

ReactDOM.render(<Gaurav />,document.getElementById('root')); 
//here in React,ReactDOM.render() function is used to call function created by you
//here Gaurav / is called or say rendered and when it is called it returns html part code(here JSX is converted to HTML)
//The HTML part code is sent to the 'root' id [document.getElementById('root'));] and this 'root' id is in the div tag[<div id ="root"></div>] and this div body is present inside index.html file
//index.html file is rendered to the browser
//<div id ="root"></div> here root id of the div tag in index.html is used inside the component in index.js file


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
3.
//index.css

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Gaurav(){
  return(
    <h3>HelloHi</h3>,<h3>HelloHi</h3>,<h3>HelloHi</h3> //here HelloHi will be printed one time on web page as <h3> tag or any tag is counted only one time instead of 3 times or multiple times
  )
}

ReactDOM.render(<Gaurav />,document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
4.
//index.css

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Gaurav(){
  return(
    <div>
    <h3>HelloHi</h3> <h3>HelloHi</h3> <h3>HelloHi</h3>
    </div>
  )
}
ReactDOM.render(<Gaurav />,document.getElementById('root'));
//multiple tags can be used inside div tag 


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
5.
//index.css

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

function Gaurav(){
  return(
    <div>
      <App />      //here App is used as function inside div tag and it is called multiple times
      <App />
      <App />
      <App />
      <App />
    <h3>HelloHi</h3> <h3>HelloHi</h3> <h3>HelloHi</h3>
    </div>
  )
}
ReactDOM.render(<Gaurav />,document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

/*
6.
//now delete App.js,App.css,App.test.js,logo.svg,reportWebVitals.js,setupTests.js and Create component folder and now your index.js file will look like this

//index.js 

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Gaurav(){
  return(
    <div>
    <h3>HelloHi</h3> <h3>HelloHi</h3> <h3>HelloHi</h3>
    </div>
  )
}
ReactDOM.render(<Gaurav />,document.getElementById('root'));
*/

/*
1.
//create component folder inside src and and create MyInfo.js file inside component folder

//myapp>src>component>MyInfo.js

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

//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"

ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/

/*
2.
//Now we will create different component in different folder and will merge it to single folder
//create three folder inside component and name it as Header.js,Main.js,Footer.js and merge codes of this three file inside Myinfo.js file

//myapp>src>component>Header.js

import React from "react"
function Header(){
return(
    <div>
        <h1>Gaurav Mishra-Data Scientist</h1>   
    </div>
)
}
export default Header


//myapp>src>component>Main.js

import React from "react"
function Main(){
return(
    <div> 
         <p>My companies so far</p>
        <ul>
            <li>Google</li>
            <li>Amazon</li>
            <li>Microsoft</li>
        </ul>
    </div>
)
}
export default Main


//myapp>src>component>Footer.js

import React from "react"
function Footer(){
return(
    <div>
        <p>Since 2020</p>
    </div>
)
}
export default Footer


//myapp>src>component>MyInfo.js
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


//myapp>src>index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/

//3 july 2021 end


//4 july 2021

/*
1.
//create new CSS folder and name it as style.css and use its class inside Header.js file

//myapp>src>style.css

body                //here body will have margin of zero
{
margin: 0;
}
.navbar            //here class is created and class is named as navbar
{
    height: 100px;
    background-color: #333;
    color: aliceblue;
    margin-bottom: 15px;
    text-align: center;
    display: flex;
}


//myapp>src>component>Header.js

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

//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/


/*
2.
//create a new component in src and name it as JSX_with_JS(folder) and inside this folder create ShowDate.js file and import ShowDate.js file inside index.js

//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate()
{
    return(
        <div> 
            <p>The Time now is</p>
        </div>
    )
}
export default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/


/*
3.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate(){
    const date = new Date()
    return(
        <div> 
            <p>The time now is date.now()</p>
        </div>
    )
}
export  default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
4.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate(){
    const date = new Date()
    return(
        <div> 
            <p>The time now is {date.getTime()}</p>  //here {} is the specail operator and we can define any function of javascript in it
        </div>
    )
}
export  default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
5.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate(){
    const date = new Date()
    return(
        <div> 
            <p>The Date  now is {date.getDate()}</p>
        </div>
    )
}
export  default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
6.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate()
{
    const date = new Date()
    return(
        <div> 
            <p>The Time now is {date.getHours()}</p>
        </div>
    )
}
export default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
7.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate()
{
    const date = new Date()
    const hours = date.getHours()
    var message=""
    if(hours<12)
    {
        message="Morning"
    }
    else if(hours>=12 && hours<17)
    {
        message="Afternoon"
    }
    else if(hours>=17 && hours<20)
    (
        message="Evening"
    )
    else
    {
        message="Night"
    }
    return(
        <div> 
            <h1>Good {message}</h1>
        </div>
    )
}
export default ShowDate

//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
8.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate()
{
    const date = new Date()
    const hours = date.getHours()
    var message=""
    if(hours<12)
    {
        message="Morning"
    }
    else if(hours>=12 && hours<17)
    {
        message="Afternoon"
    }
    else if(hours>=17 && hours<20)
    (
        message="Evening"
    )
    else
    {
        message="Night"
    }

    const style={                           //here CSS is  used inline
        color:"#333",
        backgroundColor:"#FF2D00",
        fontSize:"100px"
    }

    return(
        <div> 
            <h1 style={style}>Good {message}</h1>
        </div>
    )
}
export default ShowDate


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
9.
//myapp>src>JSX_with_JS>ShowDate.js

import React from 'react'
function ShowDate()
{
    const date = new Date()
    const hours = date.getHours()
    var message=""
    if(hours<12)
    {
        message="Morning"
    }
    else if(hours>=12 && hours<17)
    {
        message="Afternoon"
    }
    else if(hours>=17 && hours<20)
    (
        message="Evening"
    )
    else
    {
        message="Night"
    }

return(                               //here style is directly used without assigning it to variable 
  <div>                               //this method is not recommended as it makes our code confusing
      <h1 style={{color:"#333",
  backgroundColor:"#FF2D00",
  fontSize:"100px"}}>Good {message}</h1>
  </div>
)
}
export default ShowDate

//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<ShowDate />,document.getElementById('root'));
*/

/*
10.
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


//myapp>src>component>Header.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
ReactDOM.render(<MyInfo />,document.getElementById('root')); //Now MyInfo is rendered or called and earlier ShowDate was called or rendered
*/

/*
11.
//Now create Contactcard component or folder in src and create Contact.js file inside Contactcard folder

//myapp>src>Contactcard>Contact.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

/*
12.
//myapp>src>Contactcard>Contact.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

/*
//13.
//myapp>src>Contactcard>Contact.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
/*


14.
//myapp>src>Contactcard>Contact.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

/*
15.
//Now create Contactcomp.js file inside Contactcard folder

//myapp>src>Contactcard>Contactcomp.js

STEP 1:-
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


//using code repeatedly 
//instead of writing 4 lines in Contact.js we will be calling Contactcomp.js in Contact.js
//In every div tag in Contact.js,schema is same and message are different and now we will use props to get data

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


//myapp>src>Contactcard>Contact.js

import React from "react"
import Contactcomp from "./Contactcomp.js"

function Contact()
{
    return(
        <div>
            <Contactcomp Contact={{                                      //use this one time first and then multiple times
                imgURL:"http://placekitten.com/200/300",
                name:"Gaurav Mishra",
                phone:"phone:9967600642",
                email:"Email:gauravm.1033@gmail.com"
                }}/>
</div>
    )
}
export default Contact


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

/*
//16.
//myapp>src>Contactcard>Contactcomp.js

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


//myapp>src>Contactcard>Contact.js

import React from "react"
import Contactcomp from "./Contactcomp.js"
function Contact()
{
    return(
        <div>
            <Contactcomp Contact={{                                      //use this one time first and then multiple times
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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

/*
17.
//myapp>src>Contactcard>Contactdata.js

//Now create Contactcomp.js file inside Contactcard folder
//here we dont have database so data is stored in array and now data will be taken or called from array.

const data = [
    {
        imgURL:"http://placekitten.com/200/300",
        name:"Gaurav Mishra",
        phone:"phone:9967600642",
        email:"Email:gauravm.103@gmail.com"
    },
    {
        imgURL:"http://placekitten.com/200/300",
        name:"Harsh Mishra",
        phone:"phone:9967600642",
        email:"Email:gauravm.1033@gmail.com"
    },
    {
        imgURL:"http://placekitten.com/200/300",
        name:"Sarika Mishra",
        phone:"phone:9967600642",
        email:"Email:gauravm.1033@gmail.com"
    },
    {
        imgURL:"http://placekitten.com/200/300",
        name:"Raja Mishra",
        phone:"phone:9967600642",
        email:"Email:gauravm.1033@gmail.com"
    },
    {
        imgURL:"http://placekitten.com/200/300",
        name:"Mithai Mishra",
        phone:"phone:9967600642",
        email:"Email:gauravm.1033@gmail.com"
    }
]
export default data 


//myapp>src>Contactcard>Contact.js

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


//myapp>src>Contactcard>Contactcomp.js

import React from 'react'
function Contactcomp(props){
    return(
    <div>
    <img src={props.contact.imgURL} alt="http://placekitten.com/200/300"/>
    <h3>{props.contact.name}</h3>
    <p>{props.contact.phone}</p>
    <p>{props.contact.email}</p>
    </div>
    )
}
export default Contactcomp


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/

//4 july 2021 End


//5 july 2021

/*
1.
//myapp>src>component>Main.js

//we will change function component to the class component
//step1(earlier):-

import React from "react"
function Main(){
    return(
        <div> 
             <p>My companies so far</p>
            <ul>
                <li>Google</li>
                <li>Amazon</li>
                <li>Microsoft</li>
            </ul>
        </div>
    )
    }
    
    
    export default Main


//step2:-


//created a class and named it is main
//inheritance:-Derviving a new class or feature from existing class is called inheritance
//we will use inheritance and extend it from React.Component
//construction is called by default when we create the object similarly render is a function in a ReactJS and it will be called by default
//when render function is called it returns JSX part of the code 

import React from "react"
class Main extends React.Component            //here we defined class  //this is class componen //here function component is replaced with class component
{
    render(){  //here render is used and render function is predefined and now copy return part from function Main and paste it inside render of class Main
        return(
            <div> 
                 <p>My companies so far</p>
                <ul>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>Microsoft</li>
                </ul>
            </div>
        )

    }

}  
export default Main


//myapp>src>component>MyInfo.js

//whenver <Main/> this statement is called object is created automatically and render function is called immediately and render function will return JSX and JSX will be placed over <Main/>

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


//myapp>src>component>Header.js

//In React.Component we have setstate,constructor and render
// converting function Header to class  Header 

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo"
import ShowDate from "./JSX_with_JS/ShowDate"
import Contact from "./Contactcard/Contact"
ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/


/*
//2.

//myapp>src>component>Header.js

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


//myapp>src>component>Main.js

import React from "react"
class Main extends React.Component            
{
    render(){  
        return(
            <div> 
                 <p>My companies so far</p>
                <ul>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>Microsoft</li>
                </ul>
            </div>
        )
    }
}  
export default Main


//myapp>src>component>MyInfo.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo"
import ShowDate from "./JSX_with_JS/ShowDate"
import Contact from "./Contactcard/Contact"
ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/


/*
3.
//myapp>src>Contactcard>Contact.js

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


//myapp>src>Contactcard>Contactcomp.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));
*/


/*
4.
//myapp>src>Contactcard>Contact.js

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


//myapp>src>Contactcard>Contactcomp.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
ReactDOM.render(<Contact />,document.getElementById('root'));


/*
5.
//myapp>src>component>Header.js

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


//myapp>src>component>Main.js

import React from "react"
class Main extends React.Component            
{
    render(){  
        return(
            <div> 
                 <p>My companies so far</p>
                <ul>
                    <li>Google</li>
                    <li>Amazon</li>
                    <li>Microsoft</li>
                </ul>
            </div>
        )
    }
}  
export default Main


//myapp>src>component>MyInfo.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo"
import ShowDate from "./JSX_with_JS/ShowDate"
import Contact from "./Contactcard/Contact"
ReactDOM.render(<MyInfo />,document.getElementById('root'));
*/

//5 july 2021 end


//6 july 2021

/*
//1.
//myapp>src>setState>ChangeColour.js

//today we will update value of state
//state is used to capture the event(action) of the particular component and if there is a change in a particular state then component is reloaded
//today we will learn about setstate,the method setstate is available via this operator
//setstate is used to add or update the property,it means exisiting property is updated and new property is added to the state

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
ReactDOM.render(<Color />,document.getElementById('root'));
*/ 

/*
//2.
//myapp>src>setState>ChangeColour.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
ReactDOM.render(<Color />,document.getElementById('root'));
*/


/*
//3.
//myapp>src>setState>ChangeColour.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
ReactDOM.render(<Color />,document.getElementById('root'));
*/


/*
//4.
//myapp>src>setState>Form.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
import Form from "./setState/Form.js"
ReactDOM.render(<Form />,document.getElementById('root'));
*/

/*
//5.
//myapp>src>setState>Form.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
import Form from "./setState/Form.js"
ReactDOM.render(<Form />,document.getElementById('root'));
/*


/*
//6.
//myapp>src>setState>Form.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
import Form from "./setState/Form.js"
ReactDOM.render(<Form />,document.getElementById('root'));
*/


/*
//7.
//myapp>src>setState>Form.js

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


//myapp>src>index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MyInfo from "./component/MyInfo.js"
import ShowDate from "./JSX_with_JS/ShowDate.js"
import Contact from "./Contactcard/Contact.js"
import Color from "./setState/ChangeColour.js"
import Form from "./setState/Form.js"
ReactDOM.render(<Form />,document.getElementById('root'));
*/

//6 july 2021 end