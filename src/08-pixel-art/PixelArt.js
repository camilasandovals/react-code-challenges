import React, { useState, createContext, useContext } from 'react'

const MyContext = createContext(null);


function ColorPicker () {
  const [selectedColor, setSelectedColor] = useContext(MyContext);
  const colors = ['red', 'blue', 'yellow', 'green', 'black', 'white', 'purple']
  return (
    <div>
      <h1>Choose a color</h1>
      {colors.map(color => <button onClick={() => {setSelectedColor(color); console.log(selectedColor)}} key={color} style={{ backgroundColor: color }} />)}
    </div>
  )
}

function Pixel () {
  const [selectedColor, setSelectedColor] = useContext(MyContext);
  const [selectedPixel, setSelectedPixel] = useState("lightGrey")
  return <div onClick={() => setSelectedPixel(selectedColor)} style={{ height: '20px', width: '20px', backgroundColor: selectedPixel, margin: '1px' }} />
}

function Pixels () {
  const pixels = []
  for (let i = 0; i < 100; i++) pixels.push(<Pixel key={i} />)
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', width: '210px', margin: '0 auto' }}>
      {pixels}
    </div>
  )
}

export default function PixelArt () {
  const [selectedColor, setSelectedColor] = useState("lightGrey")
  return (
      <MyContext.Provider value={[selectedColor, setSelectedColor]}>
        <ColorPicker />
        <Pixels />
      </MyContext.Provider>
  )
}
