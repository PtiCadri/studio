"use client"

import { useEffect, useState } from "react"

export default function ArtistsPage() {

  const [artists, setArtists] = useState<any[]>([])
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [extractURL, setExtractURL] = useState("")
  const [mediaURL, setMediaURL] = useState("")

  const token = typeof window !== "undefined"
    ? localStorage.getItem("admin_token")
    : null

  const fetchArtists = async () => {
  try {
    const res = await fetch("/api/artists")

    console.log("STATUS:", res.status)

    const text = await res.text()
    console.log("BODY:", text)

  } catch (err) {
    console.error("Fetch error:", err)
  }
}

  useEffect(() => {
    fetchArtists()
  }, [])

  const createArtist = async () => {
    
    await fetch("/api/artists", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify({
        name,
        image_url: imageURL,
        extract_url: extractURL,
        media_url: mediaURL
      })
    })

    setName("")
    setImageURL("")
    setExtractURL("")
    setMediaURL("")

    fetchArtists()
  }

  return (

    <div style={{ padding: "40px" }}>

      <h1>Manage Artists</h1>

      <h2>Add Artist</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Image URL"
        value={imageURL}
        onChange={(e) => setImageURL(e.target.value)}
      />

      <input
        placeholder="Extract URL"
        value={extractURL}
        onChange={(e) => setExtractURL(e.target.value)}
      />

      <input
        placeholder="Media URL"
        value={mediaURL}
        onChange={(e) => setMediaURL(e.target.value)}
      />

      <br /><br />

      <button onClick={createArtist}>
        Add Artist
      </button>

      <hr style={{ margin: "40px 0" }} />

      <h2>Artists</h2>

      {artists.map((artist) => (

        <div key={artist.id} style={{ marginBottom: "15px" }}>

          <strong>{artist.name}</strong>

          <div>
            <a href={artist.media_url} target="_blank">
              Media
            </a>
          </div>

        </div>

      ))}

    </div>

  ) 
}