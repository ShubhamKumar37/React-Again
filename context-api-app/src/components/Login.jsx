import React from 'react'
import { useState, useContext} from 'react'
import userContext from '../context/userContext';

const Login = () => {

    const {setUser} = useContext(userContext);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e)
    {
        e.preventDefault();
        setUser({userName, password});
        console.log()
    }

    return (
        <div className="p-4 bg-gray-800 text-white">
            Login
            <input
                type='text'
                value={userName}
                placeholder='Enter user name'
                onChange={(e) => setUserName(e.target.value)}
                className="block w-full border rounded p-1 mt-2 bg-gray-700 text-white"
            ></input>
            <br/>
            <input
                type={`password`}
                value={password}
                placeholder='Enter password'
                onChange={(e) => setPassword(e.target.value)}
                className="block w-full border rounded p-1 mt-2 bg-gray-700 text-white"
            ></input>

            <button onClick={(e) => handleSubmit(e)} type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-2">Submit</button>
        </div>
    )
}

export default Login


