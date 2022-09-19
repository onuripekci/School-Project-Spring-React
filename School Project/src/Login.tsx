import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserLogin } from './services'
import { control, encrypt } from './util'

function Login() {

const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [remember, setRemember] = useState(false)
const navigate =useNavigate()

const sendFnc=(evt:React.FormEvent) => {
evt.preventDefault()
console.log(email,password,remember);
if(email==='') {
    toast.error('E-mail Empty')
}else if (password===''){
    toast.error('Password Empty')
}else{
UserLogin(email,password).then(res=> {

   if(res.status===200){
      const dt = res.data
      const stData=JSON.stringify(dt)
      sessionStorage.setItem('user',encrypt(stData))
      //remember control
      if (remember===true) {
        localStorage.setItem('user',encrypt(stData))
      }
      //redirect
      //navigate('/dashboard')
      window.location.href = '/dashboard'
   }else{
     toast.error("Username or Password Fail!")
   }
}).catch(err =>{
    toast.error(err.message)
})
}

}

useEffect(() => {
    const jwt=control()
if (jwt) {
    console.log(jwt.result.authorities[0].authority);
    
    
}

}, [])

    return (
        <>
            <div className='row'>
                <div className='col-sm-4'></div>
                <div className='col-sm-4'>
                    <h3>User  Login</h3>
                    <form onSubmit={sendFnc} method='post'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input value={email} onChange={(evt) =>setEmail(evt.target.value)} type="email" className="form-control" id="email"  />
                           
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input value={password} onChange={(evt) =>setPassword(evt.target.value)} type="password" className="form-control" id="password" />
                        </div>
                        <div className="mb-3 form-check">
                            <input onClick={(evt) =>setRemember(!remember)} type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Remember</label>
                        </div>
                        <button type="submit" className="btn btn-primary"><i className="bi bi-person"></i>Login</button>
                    </form>
                </div>
                <div className='col-sm-4'></div>
            </div>
        </>
    )
}

export default Login