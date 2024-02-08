import NextAuth from "next-auth/next";
import  CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import User from "@/models/Profile";
import connect from "@/utils/mongodb";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              return user;
            }
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider == "credentials") {
        return true;
      }

    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
