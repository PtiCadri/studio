"use client"

import { useEffect, useState } from "react"

export default function ArtistsPage() {

  const [artists, setArtists] = useState<any[]>([])
  const [name, setName] = useState("")
  const [imageURL, setImageURL] = useState("")
  const [extractURL, setExtractURL] = useState("")
  const [mediaURL, setMediaURL] = useState("")
  const [loading, setLoading] = useState(false)

  const token = typeof window !== "undefined"
    ? localStorage.getItem("admin_token")
    : null

  const fetchArtists = async () => {
  try {
   const res = await fetch("/artists/")

    console.log("STATUS:", res.status)

     if (!res.ok) {
      throw new Error("API error")
    }

    const data = await res.json()

    console.log("DATA:", data)

    setArtists(data)

  } catch (err) {
    console.error("Fetch error:", err)
  }
}

  useEffect(() => {
    fetchArtists()
  }, [])

  const createArtist = async () => {
    if (!name) return
    setLoading(true)
    try{
      const res = await fetch("/admin/artists/", {
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
    if (!res.ok) {
      const text = await res.text()
      console.error(text)
      return
    }
    setName("")
    setImageURL("")
    setExtractURL("")
    setMediaURL("")
    
    await fetchArtists()
  } catch (err) {
    console.error("Create error:", err)
  } finally {
    setLoading(false)
  }
}

return (

<div style={{ padding: "40px", maxWidth: "1000px", margin: "auto" }}>

  <h1>🎤 Admin • Artists</h1>

  {/* FORM */}
  <div style={{
    background: "#1e1e1e",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "40px"
  }}>

    <h2>Add Artist</h2>

    <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
    <input placeholder="Image URL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
    <input placeholder="Extract URL" value={extractURL} onChange={(e) => setExtractURL(e.target.value)} />
    <input placeholder="Media URL" value={mediaURL} onChange={(e) => setMediaURL(e.target.value)} />

    <br /><br />

    <button onClick={createArtist} disabled={loading}>
      {loading ? "Creating..." : "Add Artist"}
    </button>

  </div>

  {/* LIST */}
  <h2>Artists</h2>

  <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: "20px"
  }}>

    {artists.map((artist) => (
      <div key={artist.id} style={{
        background: "#222",
        padding: "15px",
        borderRadius: "10px",
        textAlign: "center"
      }}>

        {artist.image_url && (
          <img
            src={artist.image_url}
            alt={artist.name}
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        )}

        <h3>{artist.name}</h3>

        {artist.media_url && (
          <a href={artist.media_url} target="_blank">
            🎧 Media
          </a>
        )}

      </div>
    ))}

  </div>

</div>
)
}
