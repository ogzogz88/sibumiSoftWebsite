import styled from 'styled-components'
import { whiteColor, darkColor, lightBgColor, darkBgColor, secondaryColor } from '../../Colors'

export const InfoContainer = styled.div`
color:${whiteColor};
background:${({ lightBg }) => lightBg ? lightBgColor : darkBgColor};
@media screen and (max-width:768px){
    padding:100px 0;
}
`

export const InfoWrapper = styled.div`
display:grid;
z-index:1;
height:860px;
width:100%;
max-width:1100px;
margin-right:auto;
margin-left:auto;
padding:0 1.5rem;
justify-content:center;
`

export const InfoRow = styled.div`
display:grid;
grid-auto-columns:minmax(auto,1fr);
align-items:center;
grid-template-areas:${({ imgStart }) => imgStart ? `'col2 col1' ` : `'col1 col2'`};

@media screen and (max-width:768px){
    grid-template-areas : ${({ imgStart }) => imgStart ? `'col2 col2' 'col1 col1' ` : `'col1 col1' 'col2 col2'`};
}
`

export const Column1 = styled.div`
margin-bottom:15px;
padding:0 1rem;
grid-area:col1;
`

export const Column2 = styled.div`
margin-bottom:15px;
padding:0 1rem;
grid-area:col2;
`

export const TextWrapper = styled.div`
max-width:540px;
padding-top:0;
padding-bottom:4rem;
`

export const TopLine = styled.p`
color:${secondaryColor};
font-size:1rem;
line-height:18px;
font-weight:700;
letter-spacing:1.3px;
text-transform:uppercase;
margin-bottom:1rem;
`

export const Heading = styled.div`

margin-bottom:1.5rem;
font-size:3rem;
line-height:50px;
font-weight:600;
color:${({ lightText }) => lightText ? whiteColor : darkColor};
@media screen and (max-width:768px){
    font-size:2rem;
    line-height:36px;
};

@media screen and (max-width:480px){
    font-size:1.6rem;
    line-height:28px;
};



`

export const SubTitle = styled.p`
max-width:440px;
margin-bottom:2rem;
font-size:1.2rem;
line-height:1.5rem;
color:${({ darkText }) => darkText ? darkColor : whiteColor};
`

export const BtnWrap = styled.div`
display:flex;
justify-content:flex-start;
`

export const ImgWrap = styled.div`
max-width:555px;
height:100%;
`

export const Img = styled.img`
width:100%;
margin: 0 0 10px 0;
padding-right:0;
`




