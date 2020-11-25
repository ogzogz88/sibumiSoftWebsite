import styled from 'styled-components'
import { heroBg, videoBg } from '../../Colors'
import { MdKeyboardArrowRight, MdArrowForward } from 'react-icons/md'


export const HeroContainer = styled.div`
position:relative;
background:${heroBg};
display:flex;
justify-content:center;
align-items:center;
height:800px;
z-index:1;

@media screen and (max-width:1200px){
    height:800px;
}
@media screen and (max-width:992px){
    height:750px;
}
@media screen and (max-width:768px){
    height:700px;
}
@media screen and (max-width:576px){
    height:650px;
}
:before{
    content:'';
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    background:linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% ),
    linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100% );
    z-index:2;
}
/* add :before styles*/
`

export const HeroBg = styled.div`
position:absolute;
top:0;
right:0;
bottom:0;
left:0;
width:100%;
height:100%;
overflow:hidden;
`

export const VideoBg = styled.video`
width:100%;
height:100%;
-o-object-fit:cover;
object-fit:cover;
background:${videoBg}
`

export const HeroContent = styled.div`
position:absolute;
z-index:3;
max-width:1200px;
padding:.5rem 1.5rem;
display:flex;
flex-direction:column;
align-items:center;

`

export const HeroH1 = styled.h1`
color: #fff;
font-size:3rem;
text-align:center;

@media screen and (max-width:760px){
    font-size:2.5rem;
}

@media screen and (max-width:480px){
    font-size:2rem;
}
`
export const HeroP = styled.p`
 margin-top:1.5rem;
 color:#fff;
 font-size:1.5rem;
 text-align:center;
 max-width:600px;
 @media screen and (max-width:760px){
    font-size:1.2rem;
}

@media screen and (max-width:480px){
    font-size:1rem;
}
 `

export const HeroBtnWrapper = styled.div`
 margin-top:2rem;
 display:flex;
 flex-direction:column;
 align-items:center;

 `

export const ArrowForward = styled(MdArrowForward)`
margin-left:.5rem;
font-size:1.25rem;

`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left:.5rem;
font-size:1.25rem;

`






