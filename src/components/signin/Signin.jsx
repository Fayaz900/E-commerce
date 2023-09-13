import React,{useState} from 'react'
import '../../components/register/Login.css'
import { Link,useNavigate } from 'react-router-dom'
import axios from 'axios';

function Signin() {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleLogin=(e)=>{
    e.preventDefault();
    // console.log(email,password)
    fetch('https://student-auth.vercel.app/login',{
        method:"POST",
        body: JSON.stringify({
            email:email,
            password:password,
        }),
        headers:{
            'Content-Type':'application/json',
        },
    })
    .then((res)=>res.json())
    .then((item)=>{
      // console.log(item)
      item=="Success" ? navigate('/')
      :
      console.log(item)
    })
    .catch((err)=>console.log(err.message))
}

const validateEmail = (mail) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
   {
     return (true)
   }
     return (false)
 }

const handleAxios=(e)=>{
  e.preventDefault();
  validateEmail(email) ?
  axios.post('https://student-auth.vercel.app/login',{email:email,password:password})
  .then((res)=>res.data)
  .then((item)=>{
    item=="Success" ? navigate('/')
    :
    alert("something went wrong")
  })
  :
  alert("Invalid mail format")
}




  return (
    <div className='outer'>
        <div className="form-container">
  <p className="title">Log In</p>
  <form className="form">
    <div className="input-group">
      <label htmlFor="username">Email</label>
      <input type="text" name="email" id="username" onChange={(e)=>{setEmail(e.target.value)}} placeholder="" />
    </div>
    <div className="input-group">
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" onChange={(e)=>setPassword(e.target.value)} placeholder="" />
      <div className="forgot">
        <Link to='/signup'>
        New member ?
        </Link>
      </div>
    </div>
    <button className="sign" onClick={handleAxios}>Log In</button>
  </form>
  </div>
    </div>
  )
}

export default Signin