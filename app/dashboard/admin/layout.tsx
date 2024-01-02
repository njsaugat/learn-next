import React from "react"
import Link from "next/link"

import { LayoutProps } from "@/app/layout"

const AdminLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-1/3 w-full justify-evenly border-4 border-purple-600">
      <div className="flex flex-col">
        <Link href={"/dashboard/admin/"}>About</Link>
        <Link href={"/dashboard/admin/info"}>Info</Link>
        <Link href={"/dashboard/admin/settings"}>Settings</Link>
        <Link href={"/dashboard/admin/personalize"}>Personalize</Link>
        <Link href={"/dashboard/admin/security"}>Security</Link>
      </div>
      {children}
    </div>
  )
}

export default AdminLayout
