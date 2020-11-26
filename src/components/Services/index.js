import React from 'react'
import { ServicesContainer, ServiceIconWrapper, ServicesH1, ServicesH2, ServicesP, ServicesWrapper, ServicesCard, ServicesIcon } from './ServicesElements'
import ParticlesBg from 'particles-bg'

const IconServicesDesktop = '/images/IconServicesDesktop.svg';
const IconServicesMobile = '/images/IconServicesMobile.svg';
const IconServicesWeb = '/images/IconServicesWeb.svg';


function Services() {
    return (

        <ServicesContainer id='services' style={{ zIndex: 0 }}>
            <ServicesH1>
                Our Services
            </ServicesH1>
            <ServicesWrapper >
                <ServicesCard>
                    <ServiceIconWrapper>
                        <ServicesIcon src={IconServicesWeb} />
                    </ServiceIconWrapper>
                    <ServicesH2>
                        Web Applications
                    </ServicesH2>
                    <ServicesP>Automate your services with highly scalable and customizable web applications.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServiceIconWrapper>
                        <ServicesIcon src={IconServicesMobile} alt='services' />
                    </ServiceIconWrapper>
                    <ServicesH2>
                        Mobile Aplications
                    </ServicesH2>
                    <ServicesP>Take advantage of the popularity of mobile applications and reach your target group.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServiceIconWrapper>
                        <ServicesIcon src={IconServicesDesktop} />
                    </ServiceIconWrapper>
                    <ServicesH2>
                        Desktop Applications
                    </ServicesH2>
                    <ServicesP>Accelerate the internal dynamics of your business with desktop applications.</ServicesP>
                </ServicesCard>

            </ServicesWrapper>
            <ParticlesBg type="cobweb" bg={true} />
        </ServicesContainer>

    )
}

export default Services
