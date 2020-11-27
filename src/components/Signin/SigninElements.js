import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { darkColor, primaryColor, whiteColor } from '../../Colors';

export const Container = styled.div`
min-height:600px;
position:fixed;
bottom:200px;
left:0;
right:0;
top:0;
overflow:hidden;
background:${whiteColor};
z-index:0;
`
export const FormWrapper = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media screen and (max-width:400px){
    height:80%;
}
`

export const Home = styled(Link)`

margin:2rem auto;
text-decoration:none;
color:${darkColor};
font-weight:700;
font-size:1.5rem;
@media screen and (max-width:480px){
    padding:10px;
}
`

export const FormContent = styled.div`
height:100%;
display:flex;
filex-direction:column;
jusitfy-content:center;
@media screen and (max-width:480px){
    padding:10px;
}
`

export const Form = styled.form`
background:${primaryColor};
max-width:400px;
height:auto;
width:100%;
z-index:1;
display:grid;
margin:0 auto;
padding:3rem 2rem;
border-radius:1rem;
box-shadow:0 1px 3px rgba(0,0,0,0.9);

@media screen and (max-width:400px){
    padding:2rem;
}
`

export const FormH1 = styled.h1`
margin-bottom:2rem;
color:${whiteColor};
font-size:1.5rem;
text-align:center;
font-weight:400;

`

export const FormLabel = styled.label`
margin-bottom:.1rem;
font-size:1.2rem;
color:${whiteColor};
`

export const FormInput = styled.input`
padding:.3rem;
margin-bottom:2rem;
margin-top:0;
border:none;
border-radius:.5rem;
`

export const FormButton = styled.button`
background:${darkColor};
padding:.3rem 0;
border:none;
border-radius:.5rem;
color:${whiteColor};
font-size:1.25rem;
cursor:pointer;
`
export const Text = styled.span`
text-align:center;
margin-top:1.5rem;
color:${whiteColor};
font-size:.8rem;
`