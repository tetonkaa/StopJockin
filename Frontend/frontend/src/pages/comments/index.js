import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'
import axios from 'axios'



export default function Comments({isLoggedIn, setIsLoggedIn}) {
    // state declarations
    const [comments, setComments] = useState([])
    const [fetch, setFetch] = useState(false)
    const [username, setUsername] = useState({})
    const [formShow, setFormShow] = useState(false)
    const [user, setUser] = useState({})



    useEffect(() => {
        setShowName(user.username)
    }, [user])

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        
        })
    
    
        function handleChange2(event) {
            setUser({ ...user, "username": event.target.value })
        }
        const handleSubmit = async (event) => {
            event.preventDefault();
            await updateUsername(user);
            await navigate("/");
        };

        async function deleteUser() {
            const config = {
                headers:{
                    'Authorization': localStorage.getItem('token')
                }
            };
            await axios.delete('http://localhost:5000/user', config)
            
          
          localStorage.clear()
          setIsLoggedIn (false)
          
        
    }
    
     async function updateUsername(formState) {
        const config = {
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        }
            const {_id} = formState;
            const updatedData = await axios.put(`http://localhost:5000/user/${_id}`, formState, config)
            return updatedData.data
        };

    async function getUserName() {
        const config = {
            headers: {
                'Authorization': localStorage.getItem('token')
                
            }
    }
        const { data } = await axios.get('http://localhost:5000/user', config)
        return data
    }   
    // Set Comments
    
    async function getCommentInfo() {
        const { data } = await axios.get('http://localhost:5000/comment')
        return data   
    }
    async function createComment() {

        const { data } = await axios.post('http://localhost:5000/comment', formState)
        return data
    }
    useEffect(() => {
        getCommentInfo().then(data => setComments(data))
        getUserName().then(data => setUsername(data.username))
    }, [])

    const [showName, setShowName] = useState(user.username)
    console.log(showName)
    
    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
        setFetch(false)
    }
    
    async function submitHandler(event) {
        event.preventDefault()
        createComment().then(setFetch(true))
       
        
    }
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])

    console.log(showName)
 
    return (
        <div>
        {formShow ? 
        <form className="editName" onSubmit={handleSubmit}>
        <input
                type='text'
                name='title'
                onChange={handleChange2}
                value={username.username} />
                 <button className="button is-danger" type="submit">change username</button>
        </form>
        : null
        }
        <button onClick={() => {setFormShow(true)}}>Edit</button>

        <div className="commentsPage">
            <h1>Hello {showName}</h1>
            <button className="someRedBtn" onClick={()=> deleteUser()}> Delete Account</button>
            <br/>
            <br/>
            <br/>
            <div className="signUpForm">
            <h2 >Leave a comment</h2>
            <form onSubmit={submitHandler}>
                <div className="input-texts">
                    <label htmlFor='title'>Title</label>
                    <br/>
                    <input
                        type='text'
                        name='title'
                        onChange={handleChange}
                        value={formState.title} />
                </div>

                <div className="input-texts">
                    <label htmlFor='description'>Comment</label>
                    <br/>
                    <input
                        
                        type='text'
                        name='description'
                        onChange={handleChange}
                        value={formState.description} />
                </div>
                <button type='submit' className='signInbutton' >Submit</button>
            </form>
            </div>
            {comments.map((comment, i) => {
                return (<div key={i}>
            <div className="commentList">
            <h1 >{comment.title}</h1>
            <p className="productText">{comment.description}</p>
            </div>
            </div>
            
            )
        })}
        </div>
        </div>
    )


}
