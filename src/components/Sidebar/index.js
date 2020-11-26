import React from 'react'
import {
    SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLink, SidebarMenu, SideBtnWrap,
    SidebarRoute
} from './SidebarElements'

function Sidebar({ toggle, isOpen }) {
    return (
        <SidebarContainer isOpen={isOpen} >
            <Icon onClick={toggle}>
                <CloseIcon>

                </CloseIcon>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home'
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='about'
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                        onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='discover'
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                        onClick={toggle}>
                        Discover
                    </SidebarLink>
                    <SidebarLink to='services'
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                        onClick={toggle}>
                        Services
                    </SidebarLink>
                    <SidebarLink to='signup'
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                        onClick={toggle}>
                        Sign Up
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='signin' >
                        Sign In
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>

        </SidebarContainer>
    )
}

export default Sidebar
