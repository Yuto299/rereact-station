// @ts-check
import React from 'react'

export const BreedsSelect = ({
  breeds,
  selectedBreed,
  onBreedChange,
  onClickDogImage,
}) => {
  return (
    <div>
      <select
        value={selectedBreed}
        onChange={e => onBreedChange(e.target.value)}
      >
        <option value="">Select a breed</option>
        {Object.keys(breeds).map(breed => (
          <option key={breed} value={breed}>
            {breed}
          </option>
        ))}
      </select>
      <button onClick={onClickDogImage}>表示</button>
    </div>
  )
}

export default BreedsSelect
