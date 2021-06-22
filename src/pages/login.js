import {useState} from 'react'
import axios from 'axios'

const Login = () => {

    const [ email, setEmail ] = useState("")
    const [ password, setPassword ] = useState("")

    const handleSubmit = (email, password) => {
        console.log(email, password)
        fetchLogin(email, password)
    }

    const fetchLogin = (email, password) => {
        const uA = navigator.userAgent
        console.log(email, password, uA)
        
        axios('https://halped.net/api/auth/_login', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            data: {
                identity: email,
                password: password,
                user_agent: uA,
                os: ''
            }
        })
        .then(res => {
            console.log(res)
            // window.location = res.data.data.redirect
            }
        )
        .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="login">
                <div className="row justify-content-center align-items-center">
                    <div className="col-md-12">
                        <div className="mb-3">
                            <label className="form-label">Email address</label>
                            <input type="email" className="form-control" required autoFocus onChange={(e)=> setEmail(e.target.value)}/>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick={() => handleSubmit(email, password)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;
