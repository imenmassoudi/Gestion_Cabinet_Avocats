import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Login = () => {
    const history = useHistory()

    const [username, setUserName] = useState('')
    const [pwd, setMdp] = useState('')
    const [data, setData] = useState(null)

    const handleSubmit = async (event) => {
        //  alert(username)
        event.preventDefault()

        /*  const user = {username,pwd};
                fetch('http://localhost:5000/users/login',{
                    method:"POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify(user)
                }).then(res => {
                    res.map(r => alert(r.username))
                    // setX(x+1);
                })*/
        const response = await fetch('http://localhost:5000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username,
                pwd,
            }),
        })

        const data = await response.json()

        if (response.ok) {
            localStorage.setItem('token', data.token)
            localStorage.setItem('user', data.username)
            window.location.href = '/user'

           
        } else {
            alert('Please check your username and password')
        }
    }
    return (
        <div className='hold-transition login-page'>
            <div className='login-box'>
                <div className='card card-outline card-primary'>
                    <div className='card-header text-center'>
                        <a href='../../index2.html' className='h1'>
                            <b>Admin</b>LTE
                        </a>
                    </div>
                    <div className='card-body'>
                        <p className='login-box-msg'>
                            Sign in to start your session
                        </p>

                        <form onSubmit={handleSubmit}>
                            <div className='input-group mb-3'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email'
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-envelope'></span>
                                    </div>
                                </div>
                            </div>
                            <div className='input-group mb-3'>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Password'
                                    onChange={(e) => setMdp(e.target.value)}
                                />
                                <div className='input-group-append'>
                                    <div className='input-group-text'>
                                        <span className='fas fa-lock'></span>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-8'>
                                    <div className='icheck-primary'>
                                        <input type='checkbox' id='remember' />
                                        <label htmlFor='remember'>Remember Me</label>
                                    </div>
                                </div>
                                <div className='col-4'>
                                    <button type='submit' className='btn btn-primary btn-block'>
                                        Sign In
                                    </button>
                                </div>
                            </div>
                        </form>

                        <div className='social-auth-links text-center mt-2 mb-3'>
                            <a href='#' className='btn btn-block btn-primary'>
                                <i className='fab fa-facebook mr-2'></i> Sign in using Facebook
                            </a>
                            <a href='#' className='btn btn-block btn-danger'>
                                <i className='fab fa-google-plus mr-2'></i> Sign in using
                                Google+
                            </a>
                        </div>

                        <p className='mb-1'>
                            <a href='forgot-password.html'>I forgot my password</a>
                        </p>
                        <p className='mb-0'>
                            <a href='register.html' className='text-center'>
                                Register a new membership
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login