import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggleMenu} />
            <Sidebar isOpen={isOpen} toggle={toggleMenu} />
        </>
    )
}

export default Home
