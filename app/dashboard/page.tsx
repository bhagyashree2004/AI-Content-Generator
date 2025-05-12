'use client';
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateListSection from './_components/TemplateListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()
  return (
    <div>
      {/* Search Section */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)} />
     
      {/* Template List Section */}
    <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  )
}

export default Dashboard

// import { auth } from "@clerk/nextjs";
// import { redirect } from "next/navigation";

// export default function DashboardPage() {
//   const { userId } = auth();

//   if (!userId) {
//     redirect("/sign-in"); // or wherever your sign-in page is
//   }

//   return <div>Welcome to the Dashboard</div>;
// }
