import React from 'react'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { primaryColor } from '../../Colors'
import {
    FooterContainer,
    FooterLink,
    FooterLinkItems,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkTitle,
    FooterWrapper,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrapper,
    WebsiteRights

} from './FooterElements'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                About Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>How It Works </FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Career</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Videos
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>Submit Video </FooterLink>
                            <FooterLink to='/signin'>Ambassadors</FooterLink>
                            <FooterLink to='/signin'>Agency</FooterLink>
                            <FooterLink to='/signin'>Influencer</FooterLink>
                            <FooterLink to='/signin'>Designer</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Contact Us
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>Contact </FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Destinations</FooterLink>
                            <FooterLink to='/signin'>Sponsors</FooterLink>
                            <FooterLink to='/signin'>Partners</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>
                                Applications
                            </FooterLinkTitle>
                            <FooterLink to='/signin'>Web Apps </FooterLink>
                            <FooterLink to='/signin'>Mobile Apps</FooterLink>
                            <FooterLink to='/signin'>PWAs</FooterLink>
                            <FooterLink to='/signin'>SPAs</FooterLink>
                            <FooterLink to='/signin'>Desktop Apps</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <hr style={{ width: '100%', borderColor: primaryColor }} />
                <SocialMedia>
                    <SocialMediaWrapper>
                        <SocialLogo to='/'>
                            sibumiSoft
                                </SocialLogo>
                        <WebsiteRights>
                            {new Date().getFullYear()}{' '} All rights reserved by sibumiSoft
                                </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href='//www.facebook.com' target='_blank' aria-label='Facebook'>
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href='//www.instagram.com' target='_blank' aria-label='Instagram'>
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href='//www.youtube.com' target='_blank' aria-label='Youtube'>
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href='//www.twitter.com' target='_blank' aria-label='Twitter'>
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href='//www.linkedin.com' target='_blank' aria-label='Linkedin'>
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrapper>
                </SocialMedia>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
