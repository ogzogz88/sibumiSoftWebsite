import styled from 'styled-components'
import { Link as LinkRouter } from 'react-router-dom'
import { Link as LinkScroll } from 'react-scroll'
import { primaryColor, secondaryColor } from '../../Colors'


export const Nav = styled.nav`
background-color:#000;
height:5rem;
${'' /* margin-top:-5rem; */}
display:flex;
justify-context:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
    transition:.8s all ease;
}
`

export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
z-index:5;
width:100%;
padding:0 1.5rem;
${'' /* max-width:1100px; */}

`

export const NavLogo = styled(LinkRouter)`
color:#fff;
justify-self:flex-start;
cursor:pointer;
display:flex;
align-items:center;
font-size:1.5rem;
margin-left:1.5rem;
font-weight:bold;
text-decoration:none;
`

export const MobileIcon = styled.div`
display:none;

@media screen and (max-width:768px){
display:block;
position:absolute;
top:0;
right:0;
transform: translate(-100%, 60%);
font-size:1.8rem;
cursor:pointer;
color:#fff;
}

`

export const NavMenu = styled.ul`
display:flex;
align-items:center;
list-style:none;
text-align:center;
margin-right:-3rem;

@media screen and (max-width:768px){
    display:none;
}

`

export const NavItem = styled.li`
height:5rem;

`

export const NavLinks = styled(LinkScroll)`
color:#fff;
display:flex;
align-items:center;
text-decoration:none;
padding:0 1rem;
height:100%;
cursor:pointer;
&:active{
    border-bottom: 3px solid ${primaryColor};
    transition: all .2s ease-in-out;
}
&:hover{
    margin-bottom:0;
    border-bottom:3px solid ${primaryColor};
   transition: all .2s ease-in-out;
}

`
export const NavBtn = styled.nav`
display:flex;
align-items:center;
margin-right:1.5rem;

@media screen and (max-width:768px){
    display:none;
}
`

export const NavBtnLink = styled(LinkRouter)`
border-radius:4rem;
background: ${primaryColor};
white-space:nowrap;
padding:10px 22px;
color:#fff;
font-size:1rem;
outline:none;
border:none;
cursor:pointer;
transition: all .2s ease-in-out;
text-decoration:none;
&:hover{
    transition:all .2s ease-in-out;
    background:#fff;
    color:${primaryColor};
}
`

















