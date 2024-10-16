import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {
    // Use the loader data fetched from API
    const data = useLoaderData();
    
    // Traditionally we fetch the data and store it
    // but what if when the Component is not loaded properly before that my fetching data start or what ever i want to do
    // as this is very optimized approach if only want to load it at first render
    console.log(data);

    // Extract specific information from the data
    const user = data.results[0]; // Assume you're fetching user info from the API

    return (
        <div className='text-center m-4 bg-gray-200 text-black text-3xl'>
            <p>Github User:</p>
            <p>Name: {user.name.first} {user.name.last}</p>
            <p>Email: {user.email}</p>
            <img src={user.picture.large} alt="User Avatar" className="mx-auto rounded-full" />
        </div>
    );
}

export default Github;


export async function getData()
{
    const response = await fetch("https://randomuser.me/api/");
    const data = await response.json();
    return data;
}