import React, {useState, useEffect} from "react";
import { NavLink, useNavigate } from "react-router-dom";


function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('user-info')){
  
    }
  }, [])
  async function login(){
    let item={email,password};
    let result = await fetch("http://localhost:3000/api/usuarios/login",{
      method: 'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body: JSON.stringify(item)
    });
    result = await result.json()
    localStorage.setItem("user-info",JSON.stringify(result))
  }
  return(
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col col-lg-3 pt-5 pb-5 bg-white login">
          <h1 className="text-center mb-4">Desafiogram</h1>
          <form>
            <div className="me-3 ms-3 mb-2">
              <input onChange={(e)=>setEmail(e.target.value)} placeholder="Correo" type="email" className="form-control" />
            </div>
            <div className="me-3 ms-3 mb-4">
              <input onChange={(e)=>setPassword(e.target.value)} placeholder="Password" type="password" className="form-control" />
            </div>
            <button onClick={login} className="btn btn-primary d-block mx-auto">Login</button>
          </form>
          <p className="mt-4 ms-3 text-center">¿No tienes cuenta? <NavLink to="/signup">Signup</NavLink></p>
        </div>
      </div>
    </div>
  )
}

export default Login;