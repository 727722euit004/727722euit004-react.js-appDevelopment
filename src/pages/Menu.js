import React, { useContext, useState } from 'react';
import data from '../Components/Data'; // Adjust path as necessary
import MenuItemCard from '../Components/MenuItemCard'; // Default import
import Cart from '../Components/Cart'; // Default import
import { FoodContext } from '../context/FoodContext';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const{setCart}=useContext(FoodContext)

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleAddToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  const filteredData = selectedCategory === 'all'
    ? data
    : data.filter(item => item.category === selectedCategory);

  return (
    <div>
      <h1 className="text-2xl font-semibold flex justify-center mt-[-4.75rem]">Menu</h1>
      <div className="mt-4 flex justify-center">
        <button
          className={`mr-2 ${selectedCategory === 'all' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('all')}
        >
          All
        </button>
        <button
          className={`mr-2 ${selectedCategory === 'chicken' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('chicken')}
        >
          Chicken
        </button>
        <button
          className={`mr-2 ${selectedCategory === 'salad' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('salad')}
        >
          Salad
        </button>
        <button
          className={`mr-2 ${selectedCategory === 'pasta' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('pasta')}
        >
          Pasta
        </button>
        <button
          className={` ${selectedCategory === 'rice' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('rice')}
        >
          
          Rice
        </button>
        <button
          className={`mr-2 ${selectedCategory === 'Briyani' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('Briyani')}
          style={{marginLeft:"10px"}}
        >
          Briyani
        </button>
        <button
          className={`mr-2 ${selectedCategory === 'Dosai' ? 'text-blue-500' : ''}`}
          onClick={() => handleCategoryChange('Dosai')}
          style={{marginLeft:"1px"}}
        >
          Dosai
        </button>
      </div>
      <div className="grid lg:grid-cols-3 gap-4 mt-4">
        {filteredData.map(item => (
          <div key={item.id} className='w-full'>
            <MenuItemCard item={item} onAddToCart={handleAddToCart} />
          </div>
        ))}
      </div>
      
    </div>
  );
}

export default Menu;
