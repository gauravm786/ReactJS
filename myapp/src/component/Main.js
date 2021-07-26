//3 july 2021


//1.
// import React from "react"
// function Main(){
// return(
//     <div> 
//          <p>My companies so far</p>
//         <ul>
//             <li>Google</li>
//             <li>Amazon</li>
//             <li>Microsoft</li>
//         </ul>
//     </div>
// )
// }
// export default Main

//3 july 2021 end


//5 july 2021


//1.
//we will change function component to the class component

//step1(earlier):-

/*
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
*/

//step2:-


//created a class and named it is main
//inheritance:-Derviving a new class or feature from existing class is called inheritance
//we will use inheritance and extend it from React.Component
//construction is called by default when we create the object similarly render is a function in a ReactJS and it will be called by default
//when render function is called it returns JSX part of the code 

/*
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
*/

/*
//2.
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
*/

/*
//3.
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
*/


//5 july 2021 end