"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginPage() {
  const [token, setToken] = useState("")
  const router = useRouter()

  const handleLogin = () => {

    if (token === "super-studioute") {

      localStorage.setItem("admin_token", "super-studioute")

      console.log("Token saved to localStorage")
      router.push("/admin")

    } else {

      alert("Invalid token")

    }

  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>Admin Login</h1>

      <input
        type="password"
        placeholder="Admin token"
        value={token}
        onChange={(e) => setToken(e.target.value)}
      />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>

  )
}
