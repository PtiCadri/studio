export async function GET() {
  try {
    const res = await fetch("/api/artists")

    if (!res.ok) {
      return new Response("API backend error", { status: 500 })
    }

    const data = await res.json()
    return Response.json(data)

  } catch (err) {
    return new Response("Fetch failed", { status: 500 })
  }
}
