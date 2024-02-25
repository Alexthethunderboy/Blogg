import React from 'react'
import Profile from './components/profile/page'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
// import Logout from '@/app/Logout/exit'


export default async function ProfileIndex() {
  const session = await getServerSession();
  // if (!session) {
  //   redirect("/");
  // }
  return (
    <div>
        <Profile/>
        {/* <Logout/> */}
    </div>
  )
}
