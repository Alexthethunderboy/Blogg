import React from 'react'
import Profile from './components/profile/page'
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function ProfileIndex() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <div>
        <Profile/>
    </div>
  )
}
