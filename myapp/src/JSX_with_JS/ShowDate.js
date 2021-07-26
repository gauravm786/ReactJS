//4 july 2021

/*
//(use steps 2-9 of index.js)
//1.
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
*/

/*
//2.
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
*/

/*
//3.
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
*/

/*
//4.
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
*/

/*
//5.
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
*/

/*
//6.
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
*/

/*
//7.
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
*/

/*
//8.
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
*/

//4 july 2021