import {React, useState} from 'react'
import axios from "axios"

function login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = async e =>{
      e.preventDefault()
      const {data} = await axios.post("users/login/",{
        username, password
      });
      axios.defaults.headers.common['Authorization']=`bearer${data['token']}`
    }

  return (
    <main className='from-signin'>
      <form onSubmit={submit()}>

        <div className="form-floating">
          <input type="username" className="form-control" id="floatingInput" placeholder="llama" 
          onChange={e=>setEmail(e.target.value)}/>
          <label htmlFor="floatingInput"></label>
        </div>

        <div className="form-floating">
          <input type="password" className="form-control" id="floatingInput" placeholder="llama" 
          onChange={e=>setPassword(e.target.value)}/>
          <label htmlFor="floatingInput"></label>
        </div>
      </form>

    </main>
  )
}

export default login