import { useState, useEffect } from 'react';
import axios from 'axios';

const CategoriesSelect = ({formData, setFormData}) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://api.boardgameatlas.com/api/game/categories?client_id=EsdgqvppMg'
      );
      setCategories(result.data.categories);
    };
    fetchData();
  }, []);

  return (

    <div className='inline mb-3 xl:w-96'>
    <select className='form-select appearance-none
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding bg-no-repeat
      border border-solid border-gray-300
      rounded
      transition
      text-center
      ease-in-out
      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example'
      value={formData}
      onChange={e => setFormData({...formData, category: e.target.value})}
      >
      {categories.map(category => (
        <option key={category.id} value={category.id}>
          {category.name}
        </option>
      ))}
    </select>
    </div>
  );
};

export default CategoriesSelect;


