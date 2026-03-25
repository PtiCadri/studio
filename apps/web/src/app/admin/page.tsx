"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function AdminPage() {

  const router = useRouter()
  const [authorized, setAuthorized] = useState(false)

  useEffect(() => {

    const token = localStorage.getItem("admin_token")

    if (token === "super-studioute") {
      setAuthorized(true)
    } else {
      router.push("/admin/login")
    }

  }, [])

  if (!authorized) {
    return <p>Checking auth...</p>
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>Admin Dashboard</h1>

      <Link href="/admin/artists">
        <button>Manage Artists</button>
      </Link>

      <Link href="/admin/events">
        <button style={{ marginLeft: "20px" }}>
          Manage Events
        </button>
      </Link>

    </div>

  )
}
