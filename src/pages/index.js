import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne } from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <Navbar toggle={toggleMenu} />
            <Sidebar isOpen={isOpen} toggle={toggleMenu} />
            <HeroSection />
            <InfoSection {...homeObjOne} />

        </>
    )
}

export default Home
