import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div className='z-40 w-full h-[60px] text-lg font-medium flex justify-center items-center gap-6 border-b shadow-lg fixed bg-white'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/category'>Category</NavLink>

        </div>
    )
}

export default Header