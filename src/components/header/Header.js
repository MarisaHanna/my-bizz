import React from 'react'
import './style.css'

export default function Header() {
    return (
        <div className='header'>
            <div className='header-text'>
                <h1>Hello!</h1>
            </div>
            <div className='signin-signout'>
                <p>LogIn</p>
                <i class="fa fa-sign-in" aria-hidden="true"></i>
                <p>LogOut</p>
                <i class="fa fa-sign-out" aria-hidden="true"></i>
            </div>
            
        </div>
    )
}
