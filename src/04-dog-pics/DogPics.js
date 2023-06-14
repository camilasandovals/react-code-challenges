import { useState, useEffect } from "react"

export default function DogPics () {
  const [images, setImages] = useState()
  
  const getImages = () => {
    fetch(`https://dog.ceo/api/breeds/image/random`)
    .then(response => response.json())
    .then(data => setImages(data))
    .catch(alert)

  }
  useEffect(() => {
        getImages()
    }, [])

  return (
    <div className='dog-pics'>
      <img src={images.message} height={400}/>
      <button onClick={() => getImages()}>🐶</button>
    </div>
  )
}
