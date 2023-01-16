import { useState } from 'react';
import { useEffect} from 'react';
import { useNavigate } from "react-router-dom"
import { Navigate } from 'react-router-dom'
import axios from 'axios'
import "./main.css"

// Path: src/pages/SignUp/index.js
// Compare this snippet from src/pages/SignUp/index.js and fix the errors:
// import { useState } from 'react';
// import { useEffect} from 'react';
// import { useNavigate } from "react-router-dom"
// import { Navigate } from 'react-router-dom'
// import axios from 'axios'
// import "./main.css"
//
// export default function SignUp({setIsLoggedIn, isLoggedIn}) {
//     // state declarations
//     const [formState, setFormState] = useState({
//         username: '',
//         password: '',
//         signupCode: '',
//         })
//
//     // update the input value as a user types
//     const handleChange = (event) => {
//         setFormState({ ...formState, [event.target.name]: event.target.value })
//     }
//
//     async function submitHandler(event) {
//         event.preventDefault()
//         const { data } = await axios.post('http://localhost:8000/user/signup', formState)
//         localStorage.token = data.token
//         setIsLoggedIn(true)
//     }
//
//
//
//     useEffect(() => {
//         if (isLoggedIn) {
//             return <Navigate to ="/barbershop"></Navigate>
//         }
//     }, [isLoggedIn])
//
//     return (
//         <div className="SignUp">
//             <div className="signUpForm">
//             <h2 >Sign Up</h2>
//
//             <form onSubmit={submitHandler}>
//                 <div className="input-texts">
//                     <label htmlFor='username'>Username</label>
//                     <br/>
//                     <input
//                         type='text'
//                         name='username'
//                         onChange={handleChange}
//                         value={formState.username} />
//                 </div>
//
//                 <div className="input-texts">
//                     <label htmlFor='password'>Password</label>
//                     <br/>
//                     <input
//
//                         type='password'
//                         name='password'
//                         onChange={handleChange}
//                         value={formState.password} />
//                 </div>
//
//                 <div className="input-texts">
//                     <label htmlFor='signupCode'>Sign Up Code</label>
//                     <br/>
//                     <input
//                         type='text'
//                         name='signupCode'
//                         onChange={handleChange}
//                         value={formState.signupCode} />
//                 </div>
//
//                 <button type='submit'>Sign Up</button>
//             </form>
//             </div>
//         </div>
//     )
// }


    














