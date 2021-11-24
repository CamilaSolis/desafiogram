import React, {useState} from "react";

function SignUp(){
  const [username, setUser]=useState('')
  const [password, setPassword]=useState('')
  const [email, setEmail]=useState('')
  const [nombre, setName]=useState('')
  const [bio, setBio]=useState('')

  async function register(){
    let item={username,password,email,nombre,bio}
    
    let result= await fetch('http://localhost:3000/api/usuarios/signup',{
      method: 'POST',
      body:JSON.stringify(item),
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      }
    })
    result = await result.json()
  }
  return (
    <div className="container">
    <div className="row justify-content-md-center">
      <div className="col col-lg-3 pt-5 pb-5 bg-white login">
        <h1 className="text-center mb-4">Desafiogram</h1>
        <form>
          <div className="me-3 ms-3 mb-2">
            <input placeholder="Nombre de usuario" type="text" value={username} onChange={(e)=>setUser(e.target.value)} className="form-control" />
          </div>
          <div className="me-3 ms-3 mb-2">
            <input placeholder="Password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" />
          </div>
          <div className="me-3 ms-3 mb-2">
            <input placeholder="Correo" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" />
          </div>
          <div className="me-3 ms-3 mb-2">
            <input placeholder="Nombre" type="text" value={nombre} onChange={(e)=>setName(e.target.value)} className="form-control" />
          </div>
          <div className="me-3 ms-3 mb-4">
            <input placeholder="Descripcion" type="text" value={bio} onChange={(e)=>setBio(e.target.value)} className="form-control" />
          </div>
          <button onClick={register} type="submit" className="btn btn-primary d-block mx-auto">Sign up</button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default SignUp;