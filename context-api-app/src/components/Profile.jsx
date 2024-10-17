import React, { useContext } from 'react'
import userContext from '../context/userContext'

const Profile = () => {
    const { user } = useContext(userContext); // Destructure the user object from context

    let userName = user?.userName || "NO USER FOUND"; // Access userName safely from the user object

    return (
        <div>
            <h1>Profile : {userName}</h1>
        </div>
    )
}

export default Profile
