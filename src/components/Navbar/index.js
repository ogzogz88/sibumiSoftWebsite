import React, { useState, useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaBars } from 'react-icons/fa'
import { Nav, NavLogo, NavbarContainer, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements'
const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);


    const handleScrollNav = () => {
        window.scrollY > 80 ? setScrollNav(true) : setScrollNav(false);
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollNav);

    }, [])

    const scrollHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={scrollHome}>
                        sibumiSoft
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='home'
                                smooth={true}
                                duration={700}
                                spy={true}
                                exact='true'
                                activeClass="active"
                                offset={-80}
                            >
                                Home
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='about'
                                smooth={true}
                                duration={700}
                                spy={true}
                                exact='true'
                                offset={-80}
                                activeClass="active"
                            >
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                                smooth={true}
                                duration={700}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true}
                                duration={700}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Services
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                                smooth={true}
                                duration={700}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >
                                Sign up
                            </NavLinks>
                        </NavItem>
                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
