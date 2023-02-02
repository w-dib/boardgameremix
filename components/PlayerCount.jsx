"use client"
import { useState} from 'react';

export default function PlayerCount() {
  const [playerCount, setPlayerCount] = useState(1);

  const options = [1, 2, 3, 4, 5, 6, 7].map(number => (
    <option key={number} value={number}>
      {number}
    </option>
  ));

  return (
    <div className='inline mb-3 xl:w-96'>
    <select
     value={playerCount} onChange={event => setPlayerCount(event.target.value)}
      className='form-select appearance-none
      px-7
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none'
      aria-label='Default select example'
    >
        {options}
    </select>
  </div>  )
}