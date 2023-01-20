import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './main.css'
import axios from 'axios'


export default function Account(props) {
  const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [formState, setFormState] = useState({});


    useEffect(() => {
        if(!props.isLoggedIn) {
            navigate('/login')
        }
    }, [props.isLoggedIn])

    async function deleteAccount() {
        const config = {
            headers:{
                'Authorization': localStorage.getItem('token')
            }
        };
        await axios.delete('user', config)
        
      
      localStorage.clear()
      props.setIsLoggedIn (false)

     

   

    }

  


  return(
    <div>
      <h1>Account Management</h1>
        <button onClick={deleteAccount}>Delete Account</button>
      {user && <p>Hello {user.name}</p>}
    </div>
  );
}