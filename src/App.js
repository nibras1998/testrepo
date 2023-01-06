import logo from './logo.svg';
import './App.css';
import './basicform.css';
import {useState} from 'react';

function App() {
  const [msg,setMsg] = useState(false)
  const [fname,setFname] = useState("")
  const [lname,setLname] = useState("")
  const [mail,setMail] = useState("")
  console.log(fname,lname,mail)
  const handleSubmit=(e)=>{
      e.preventDefault()
      if(fname == "" || lname=="" || mail==""){
        return alert("All inputs are required")
      }
      if(!(mail.includes("@"))){
        return alert("Invalid email")
      }
      setMsg(true)
  }
  
  return (
     <div id="container">
        <form style={{"paddingTop":"10px"}}>
            {msg?<div id="successmsg">Success! Thank you for registering</div>:null}
            <input type="text" id="user" placeholder="First Name" onChange={(e)=>setFname(e.target.value)}/><br></br>

            <input type="text" id="user" placeholder="Last Name" onChange={(e)=>setLname(e.target.value)}/><br></br>
        
            <input type="email" id="emailtext" placeholder="Email" onChange={(e)=>setMail(e.target.value)}/><br></br>
            
            <button id="btn" onClick={handleSubmit}>Register</button>
        </form>
    </div>
  );
}

export default App;
