import axios from 'axios'
import React, { useState } from 'react'

const Register = ({setAuth}) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const createAccount = async () => {
        if (!username || !password) {
            alert("missing inputs")
            return
        }
        const response = await axios.post("http://127.0.0.1:8000/users/register",
            {
                "username": username,
                "password": password
            }
        )
        if(response.status === 201){
            alert("good To Go Click Me")
            setAuth("login")
        }else{
            alert("Error During Registeration Try Again")
        }
    }
    return (
        <>
            <div className="bg-white w-1/2 m-auto mt-50 p-4 rounded-lg">
                <h2 className="text-center text-blue-500 text-3xl">Register Here</h2>
                <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="p-3 w-full mt-3 mb-3 border-gray-400 border rounded-lg" placeholder='Enter The Username' />
                <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" className="p-3 w-full mt-3 mb-3 border-gray-400 border rounded-lg" placeholder='Enter The Password' />
                <button onClick={createAccount} className="bg-blue-500 p-3 border-0 w-full text-white rounded-lg">create</button>
            </div>
        </>
    )
}

export default Register
