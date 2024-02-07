



import NextAuth from "next-auth/next";
import bcrypt from 'bcrypt'
import User from "@/models/User";
import { connect } from "@/Utils/mongodb";
import CredentialsProvider from "next-auth/providers/credentials"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
        id: 'credentials',
        name: "Credentials",
        credentials: {
            email: {label: "username", type: "text"},
            password: {label: "Password", type: "password"},
        },async authorize(credentials) {
            await connect()
            try{
                const user = await User.findOne({username: credentials.username})
                if(user){
                    const isPasswordCorrect = await bcrypt.compare(
                        credentials.password,
                        user.password
                    );
                    if (isPasswordCorrect) {
                        return user;
                    }
                }
            }catch(err){
                throw new Error(err)
            }
        },
    }),
   
    // ...add more providers here
  ],
  callbacks: {
    async signIn({user, account}){
        if (account?.provider == "credentials"){
            return true
        }
        // if (account?.provider == "github") {
        //   await connect();
        //   try {
        //     const existingUser = await User.findOne({ email: user.email });
        //     if (!existingUser) {
        //       const newUser = new User({
        //         email: user.email,
        //       });

        //       await newUser.save();
        //       return true;
        //     }
        //     return true;
        //   } catch (err) {
        //     console.log("Error saving user", err);
        //     return false;
        //   }
        // }
    }
  }

};

export const handler =  NextAuth(authOptions);
export { handler as GET, handler as POST}