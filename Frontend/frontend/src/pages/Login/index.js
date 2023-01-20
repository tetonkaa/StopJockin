import { useState } from 'react';
import axios from 'axios'
import "./main.css"
import { useEffect} from 'react';
import { useNavigate, Link } from "react-router-dom"


export default function Login ({setIsLoggedIn , isLoggedIn}) {
    // state declarations
    const [formState, setFormState] = useState({
        username: '',
        password: '',
    })

    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }

    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:5000/user/login', formState)
        localStorage.token = data.token
        setIsLoggedIn(true)
    }
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/comments')
        }
    }, [isLoggedIn])
    

    return (
        <div className="SignUp">
            <div className="signUpForm">
            <h2>Login</h2>

            <form onSubmit={submitHandler}>
                <div className="input-texts">
                    <label  className="LogInLabel" htmlFor='username'>Username</label>
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                        value={formState.username} />
                </div>

                <div className="input-texts">
                    <label className="LogInLabel" htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        onChange={handleChange}
                        value={formState.password} />
                </div>
                
                <button type='submit'className='signInbutton' >Login</button>
            </form>
            </div>
        </div>
    )
}

