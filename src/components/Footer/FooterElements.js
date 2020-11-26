import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { footerBg, primaryColor, whiteColor } from '../../Colors'

export const FooterContainer = styled.footer`
background-color:${footerBg};

`

export const FooterWrapper = styled.div`
padding:3rem 1.5rem;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width:1100px;
margin:0 auto;
`

export const FooterLinksContainer = styled.div`
display:flex;
justify-content:center;
@media screen and (max-width:820px){
    padding-top:2rem;
}
`

export const FooterLinksWrapper = styled.div`
display:flex;
@media screen and (max-width:820px){
    flex-direction:column;
}
`

export const FooterLinkItems = styled.div`
display: flex;
flex-direction:column;
align-items:flex-start;
margin:1rem;
text-align:left;
width:160px;
box-sizing:border-box;
color:${whiteColor};
@media screen and (max-width:420px){
    margin:0;
    padding:10px;
    width:100%;
}
`

export const FooterLinkTitle = styled.h1`
font-size:14px;
margin-bottom:1rem;
`

export const FooterLink = styled(Link)`
color:${whiteColor};
text-decoration:none;
margin-bottom:.5rem;
font-size:14px;

&:hover{
    color:${primaryColor};
    transition:all .3s ease-out;
}
`

export const SocialMedia = styled.section`
max-width:1100px;
width:100%;
margin-top:1rem;
`

export const SocialMediaWrapper = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
max-width:1100px;
margin:40px 0 auto 0;

@media screen and (max-width:820px){
    flex-direction:column;
}
`
export const SocialLogo = styled(Link)`
color: ${whiteColor};
justify-self:start;
cursor:pointer;
display:pointer;
text-decoration:none;
font-size:1.5rem;
display:flex;
align-items:center;
margin-bottom:1rem;
font-weight:bold;

`
export const WebsiteRights = styled.small`
color:${whiteColor};
margin-bottom:1rem;
`

export const SocialIcons = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:240px;

`
export const SocialIconLink = styled.a`
color:${whiteColor};
font-size:1.5rem;
padding:0 .5rem;
`





