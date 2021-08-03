import React ,{useState}from 'react';
import './App.css';
import { Render } from './renderdata';

export const Form = () => {

       const [userdata,setuserdata]=useState({
            name:" ",
           email:" ",
           phone:" ",
       })  

       const [userarr,setuserarr]=useState([]);

       const inputhandel=(e)=>{
           setuserdata({...userdata,[e.target.name]:e.target.value})
       }

       const submit_press=()=>{
        //    console.log("name=",userdata.name,"email=",userdata.email,"phione=",userdata.phone)
 
        setuserarr([...userarr,userdata])
        // console.log([...userarr,userdata])
         }

         const delet=()=>{
             

         }
         const edit=()=>{

         }

    return (
        <>
            <h1>komal chouhan</h1>
        {/*form div start  */}
        <div className="form-container">
                    <div className="lable-input">
                        <span>Name</span>
                        <input
                        className="input-box"
                        type="name"
                        name="name"
                        placeholder="please enter your name"
                         onChange={inputhandel}
                        />
                        </div>

                    <div className="lable-input">
                        <span>Email</span>
                        <input
                        className="input-box"
                        type="email"
                        name="email"
                        placeholder="please enter your email"
                         onChange={inputhandel}
                        />
                        </div>

                    <div className="lable-input">
                        <span>Phone</span>     
                        <input
                        className="input-box"
                        type="number"
                        name="phone"
                        placeholder="please enter your phone"
                         onChange={inputhandel}
                        />

                        </div>

            {/* submit button */}
                        <button id="submit-btn" onClick={submit_press}>Submit</button>
        </div>


        {/* todo data render */}
        <div className="todo-container-div">
             {userarr.map((item)=>{
                 return <Render item={item} fun1={delet} fun2={edit} key={item.phone}/>
             })}
        </div>    
        </>
    )
}
