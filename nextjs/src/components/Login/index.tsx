import { signIn, signOut, useSession } from 'next-auth/react'
import { useEffect } from 'react';
import axios from "axios";

export default function Login() {
    const { data, status } = useSession();

    const handleSignIn = () => {
        signIn()
    }

    const handleSignOut = () => {
        signOut()
    }

    const createWalletWithLumxProtocol = async() => {
        const response = await axios.post('https://protocol-sandbox.lumx.io/v2/wallets', {}, {
          headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_LUMX_API_KEY}`
          }
        })
        return response
      }
    
      const saveWallet = async (mail: string, walletId: string, walletAddress: string) => {
        try {
          const response = await axios.post('/api/saveWallet', {
            mail,
            walletId,
            walletAddress
          });
          return response;
        } catch (error) {
          console.error('Error on authentication:', error);
        }
      };
    
      const isUserRegistered = async (mail: string) => {
        try {
          const response = await axios.get(`/api/isUserRegistered?mail=${mail}`);
          return response
        } catch (error) {
          console.error('Error saving wallet:', error);
        }
      };
      
      useEffect(() => {
        if (status === 'authenticated') {
          const mail = data.user!.email;
    
          isUserRegistered(mail!).then((response: any) => {
            const userExists = response.data.exists
            if (!userExists) {
              createWalletWithLumxProtocol().then((response: any) => {
                const walletId = response.data.id;
                const walletAddress = response.data.address;
                saveWallet(mail!, walletId, walletAddress);
              })
            }
            else {
              // busca os nfts dessa carteira para listar
            }
          });
        }
      }, [status])

    return(
        <>
        {
            status === 'unauthenticated' &&
            <button onClick={handleSignIn}>Sign in</button>
        }

        {
            status === 'authenticated' &&
            <button onClick={handleSignOut}>Sign out</button>
        }
        </>
    )
}