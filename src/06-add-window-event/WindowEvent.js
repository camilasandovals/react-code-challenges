import { useEffect } from "react"

export default function WindowEvent () {
useEffect(() => {
  const doubleClick = () => alert("mousse pressed")

  window.addEventListener('click', doubleClick)
  return () => window.removeEventListener('click', doubleClick)
}, [])

  return (
    <h2>Window event active</h2>
  )
}
