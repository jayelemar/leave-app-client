import { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth/next";
import { BACKEND_URL } from "@/lib/secrets";
import { User } from "@/types/types";

export const authOptions:AuthOptions = {
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name:"Credentials",
      credentials: {
        username: {  
          label: "User Name",
          type: "text",
          placeholder: "Your Email"
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials, req){
        if(!credentials?.username || !credentials?.password) 
          return null;
        const { username, password } = credentials;
        const res = await fetch( `${BACKEND_URL}/api/users/login`, {
          method: "POST",
          body: JSON.stringify({
            username,
            password,
          }),
          headers: { "Content-Type": "application/json" }
        })
        if(res.status === 401) {
          console.log(res.statusText);
          return null
        }
        const user = await res.json();
        // console.log(user);
        return user;
      }
    })
  ],

  // Callbacks
  callbacks: {
    async jwt({ token, user }) {
      return {...token, ...user as User}
    },
    async session({token, session, user}){
      session.user = token
      return session;
    }
  }

}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
