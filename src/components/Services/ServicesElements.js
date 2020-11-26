import styled from 'styled-components'
import { darkBgColor, primaryColor, secondaryColor, whiteColor } from '../../Colors'


export const ServicesContainer = styled.div`
position:relative;
height:800px;
display:flex;
flex-direction:column;
justify-content:center;
align-item:center;
background:${whiteColor};
@media screen and (max-width:768px){
    height:900px;
}
@media screen and (max-width:480px){
    height:1100px;
}
`

export const ServicesWrapper = styled.div`
max-width:1000px;
margin:0 auto;
display:grid;
grid-template-columns: 1fr 1fr 1fr;
align-items:center;
grid-gap:1rem;
padding:0 1rem;
@media screen and (max-width:1000px){
    grid-template-columns:repeat(2,1fr)
}
@media screen and (max-width:767px){
    grid-template-columns:1fr;
    padding: 0 1.5rem;
}
`
export const ServicesCard = styled.div`
background:${darkBgColor};
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:1rem;
max-height:340px;
padding:2rem;
box-shadow:0 1px 3 px rgba(0,0,0,0.2);
transition:all 0.2s ease-in-out;
&:hover{
    transform:scale(1.02);
    transition:all 0.2s ease-in-out;
    cursor:pointer;
}
`
export const ServiceIconWrapper = styled.div`
background:${whiteColor};
border-radius:100%;
padding:1.2rem 1.5rem .2rem;
background:${secondaryColor};
margin-bottom:.5rem;
@media screen and (max-width:768px){
    padding:1rem 1rem .2rem;
}
`
export const ServicesIcon = styled.img`
height:5rem;
width:5rem;
margin-bottom:1rem;
@media screen and (max-width:768px){
height:3rem;
width:3rem;
margin-bottom:0;
}
`

export const ServicesH1 = styled.h1`
text-align:center;
font-size:2.5rem;
color:${primaryColor};
margin-bottom:4rem;

@media screen and (max-width:480px){
    font-size:1.5rem;
}
`


export const ServicesH2 = styled.h2`
text-align:center;
color:${whiteColor};
font-size:1.2rem;
margin-bottom:.5rem;

`

export const ServicesP = styled.p`
color:${whiteColor};
font-size:0.8rem;
text-align:center;
`