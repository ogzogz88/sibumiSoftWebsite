import React, { useState } from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import Video from '../../videos/bgVideo.mp4'
import { Button } from '../ButtonElement'

function HeroSection() {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(!hover);
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Modern and Scalable Web Solutions
                </HeroH1>
                <HeroP>
                    Sign up for a new account today and follow the cutting edge technology.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        onMouseEnter={onHover} onMouseLeave={onHover}
                        to='signup'
                        $primary={true}
                        $hoverDark={false}
                        smooth={true}
                        duration={700}
                        spy={true}
                        exact='true'
                    >
                        Get Started{hover ? <ArrowForward /> : <ArrowRight />}</Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
