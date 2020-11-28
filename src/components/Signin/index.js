import React from 'react'
import { Container, FormWrapper, Home, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './SigninElements'
import ParticlesBg from 'particles-bg'

function SignIn() {
    return (
        <>
            <Container>
                <FormWrapper>
                    <Home to='/'>Back to home</Home>
                    <FormContent>
                        <Form action='#'>
                            <FormH1>
                                Sign in to your account
                            </FormH1>
                            <FormLabel htmlFor='email'>Email</FormLabel>
                            <FormInput type='email' required />
                            <FormLabel htmlFor='password'>Password</FormLabel>
                            <FormInput type='password' required />
                            <FormButton type='submit'>Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrapper>
                <ParticlesBg color="#7266ba" num={30} type="cobweb" bg={true} />

            </Container>

        </>
    )
}

export default SignIn
