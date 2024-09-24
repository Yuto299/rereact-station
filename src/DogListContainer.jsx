// @ts-check
// @ts-check
import React, { useState, useEffect } from 'react'
import BreedsSelect from './BreedsSelect'

export const DogListContainer = () => {
  const [breeds, setBreeds] = useState({})
  const [selectedBreed, setSelectedBreed] = useState('')
  const [dogImages, setDogImages] = useState([]) // 犬の画像リストを格納する状態

  const handleBreedChange = breed => {
    setSelectedBreed(breed)
  }

  useEffect(() => {
    // 全犬種リストを取得
    fetch('https://dog.ceo/api/breeds/list/all')
      .then(response => response.json())
      .then(data => setBreeds(data.message))
      .catch(error => console.error('Error fetching dog breeds:', error))
  }, [])

  const onClickDogImage = () => {
    if (!selectedBreed) return

    // 選択された犬種に基づいて画像を取得するAPI
    fetch(`https://dog.ceo/api/breed/${selectedBreed}/images/random/12`)
      .then(response => response.json())
      .then(data => {
        // 最初の12件の画像のみをセット
        setDogImages(data.message)
      })
      .catch(error => console.error('Error fetching dog images:', error))
  }

  return (
    <div>
      {/* 犬種の選択と表示ボタン */}
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        onBreedChange={handleBreedChange}
        onClickDogImage={onClickDogImage}
      />

      {/* 取得した犬種の画像リストを表示 */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px',
          marginTop: '20px',
        }}
      >
        {dogImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`dog-${index}`}
            style={{ width: '200px', height: '200px', objectFit: 'cover' }}
          />
        ))}
      </div>
    </div>
  )
}

export default DogListContainer
