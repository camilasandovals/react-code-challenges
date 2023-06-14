import { useState } from "react"

export default function DarkMode () {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`page ${isDark ? 'dark-mode': ""}`}>
      <button onClick={()=> setIsDark(true)} className='dark-mode-button'>Dark Mode</button>
      <button onClick={()=> setIsDark(false)} className='light-mode-button'>Light Mode</button>
    </div>
  )
}
