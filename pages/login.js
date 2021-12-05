import React, { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import { useRouter } from 'next/router'
import { signInWithPopup, onAuthStateChanged } from '@firebase/auth'
import { auth, provider } from '../firebase'

const Login = () => {

    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/')
            }
        })
    }, [])


    return (
        <Wrapper>

            <UberLogo src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png" />
            {/* <HeadImage src="https://i.bb.co/CsV9RYZ/login-image.png"></HeadImage> */}

            <Title> Login To Access Your Account </Title>

            <SignInButton onClick={() => signInWithPopup(auth, provider)}>
                Sign In With Google
            </SignInButton>

        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
flex flex-col h-screen bg-gray-200 w-screen p-4
`

const SignInButton = tw.div`
bg-black text-white text-center py-4 mt-8 self-center w-full cursor-pointer
`
const UberLogo = tw.img`

`
// h-20 w-auto object-contain self-start

const Title = tw.div`
text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`

`
