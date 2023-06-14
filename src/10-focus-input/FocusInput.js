import { useEffect, useRef } from "react"

export default function FocusInput() {
  const myElementRef  = useRef(null)

  useEffect(() => {
    myElementRef.current.focus();
  }, [])

  return (
    <div>
      <label htmlFor='focused-input' ref={myElementRef}>Focus me on page load!</label>
      <input name='focused-input' ref={myElementRef}></input>
    </div>
  )
}
