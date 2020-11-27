import styled from 'styled-components'
import { Link } from 'react-scroll'
import { primaryColor, secondaryColor, darkColor, whiteColor } from '../Colors'


export const Button = styled(Link)`
border-radius:50px;
background:${props => props.$primary ? primaryColor : whiteColor};
white-space:nowrap;
padding:${props => props.$big ? '1rem 3rem' : '.75rem 2rem'};
color:${props => props.$dark ? darkColor : whiteColor};
font-size:${props => props.$fontBig ? '1.25rem' : '1rem'};
outline:none;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
align-items:center;
transition:all .2s ease-in-out;
&:hover{
    color:${props => props.$hoverDark ? whiteColor : darkColor};
    transition:all .2s ease-in-out;
    background:${props => props.$hoverDark ? darkColor : secondaryColor};
}
`

