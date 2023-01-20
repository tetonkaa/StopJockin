import { Routes, Route, Link, Navigate } from 'react-router-dom'
import {useState} from 'react'
import { useNavigate } from "react-router-dom"
import { useEffect} from 'react';
import './main.css'
import axios from 'axios'



export default function Comments({isLoggedIn, setIsLoggedIn}) {
    // state declarations
    const [comments, setComments] = useState([])

    const [formState, setFormState] = useState({
        title: '',
        description: '',
        
        })

    // Set Comments
    
    async function getCommentInfo() {
        const { data } = await axios.get('http://localhost:5000/comment')
        return data
        
        
        
    }
    useEffect(() => {
        getCommentInfo().then(data => setComments(data))
    }, [])

    
    
    // update the input value as a user types
    const handleChange = (event) => {
        setFormState({ ...formState, [event.target.name]: event.target.value })
    }
    
    async function submitHandler(event) {
        event.preventDefault()
        const { data } = await axios.post('http://localhost:5000/comment', formState)
        getCommentInfo().then(data => setComments(data))
    }
    
    const navigate = useNavigate()
    
    useEffect(() => {
        if (!isLoggedIn) {
            navigate('/')
        }
    }, [isLoggedIn])
    
function loaded(){   
    return (
        <div className="SignUp">
            {console.log(comments)}
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
                return (<div >
            <div className="eachProduct">
            <p className="productText">{comment.title}</p>
            <p className="productText">{comment.description}</p>
            </div>
            </div>
            
            )
        })}
        </div>
    )}

    return comments ? loaded() : 
    <div className="productsContainer">
    <h1 className=" loader animate__animated animate__pulse animate__infinite 	infinite"> Loading...</h1>
    </div>
}
