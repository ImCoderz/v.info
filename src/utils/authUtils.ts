import CredentialsProvider from "next-auth/providers/credentials"
import {NextAuthOptions} from "next-auth"
export const authOptions:NextAuthOptions ={
    providers:[
        CredentialsProvider(
            {
                name:"Credentials",
                credentials:{
                    username:{label:"Username"},
                    password:{label:"Password"}
                },
                
                async authorize(credentials,req){
                    console.log(credentials);
                    const payload= {
                        username:credentials?.username,
                        password:credentials?.password
                    }
                    console.log(payload);
                    
                    
                    const res=await fetch("http://localhost:8000/auth/login",{
                        method:"post",
                        headers:{
                            'Accept': 'application/json',
                            "Content-Type":"application/json",
                        },
                        body:JSON.stringify(payload)
                    })
                    const user=await res.json()
                    if(user?.message){
                        return user
                    }
                    else{
                        return null
                    }
                    
                }
            }

        )
    ],
    pages:{
        signIn:"/auth/signin"      
    },
    callbacks:{
        async jwt ({token,user}){
            return {...token,...user}
        },
        async session ({session,token,user}){
            session.user=token as any
            return session
        }
    }

}