"use client"
import { useState} from 'react';

export default function SpendSelect({formData, setFormData}) {
  const [budget, setBudget] = useState(1);

  const options = [10, 25, 50, 75, 100, 200, 300 ].map(number => (
    <option key={number} value={number}>
      {number}
    </option>
  ));

  return (
    <div className='inline mb-3 xl:w-96'>
    <select
    //  value={budget} onChange={event => setBudget(event.target.value)}
    value={formData}
    onChange={e => setFormData({...formData, spend: e.target.value})}
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
