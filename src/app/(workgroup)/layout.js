import { Inter } from "next/font/google";
import "../(dashboard)/globals.css";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { NextAuthProvider } from "@/Utils/NextAuthProvider";
import { getServerSession } from "next-auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  const session = await getServerSession()
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider session={session} >
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}