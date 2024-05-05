import { signIn } from 'next-auth/react'

export default function Login() {
    const handleSignIn = () => {
        signIn()
    }

    return(
        <>
            <button onClick={handleSignIn}>Sign in</button>
        </>
    )
}