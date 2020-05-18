import React from 'react'
import { Link } from 'react-router-dom'

export default ({user,logout})=>{
  
    const display = user ? (
        <div>
        <h3>welcome! {user.username}</h3>
        <button onClick={logout}>Logout</button>
        </div>
    ) : (
        <div>
        <Link to='/signup'>Signup</Link>
        <br></br>
        <Link to='/login'>Login</Link>
        </div>
    );
        return(
            <div className='greeting'>
                {display}
            </div>
        )
}