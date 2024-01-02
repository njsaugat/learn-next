import React from "react"
import Link from "next/link"

const DashboradLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen w-full border-8 border-white text-2xl ">
      <div className="flex justify-evenly">
        <Link href={"/dashboard"}>Dashboard </Link>
        <Link href={"/dashboard/admin"}>Admin</Link>
      </div>
      {children}
    </div>
  )
}

export default DashboradLayout
