// @ts-check
import React, { useState } from 'react'
import DogImage from './DogImage'

export const Description = () => {
  const [dogUrl, setDogUrl] = useState(
    'https://images.dog.ceo/breeds/spaniel-brittany/n02101388_6057.jpg',
  )

  const handleClick = () => {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then(response => response.json())
      .then(data => setDogUrl(data.message)) // dogUrlを更新
      .catch(error => console.error('Error fetching dog image:', error))
  }

  return (
    <>
      <p>犬の画像を表示するサイトです</p>
      <DogImage imageUrl={dogUrl} />
      <button onClick={handleClick}>更新</button>
    </>
  )
}

export default Description
