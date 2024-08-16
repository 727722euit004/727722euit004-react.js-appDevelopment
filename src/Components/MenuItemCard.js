import React, { useState } from 'react';

const MenuItemCard = ({ item, onAddToCart }) => {
    const [readmore, setReadmore] = useState(false);
    const [inCart, setInCart] = useState(false);
    const truncatedInfo = readmore ? item.info : `${item.info.substring(0, 50)}....`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    function handleAddToCart() {
        if (!inCart) {
            setInCart(true);
            onAddToCart(item);
        }
    }

    return (
        <div className="w-full px-2 py-2">
            <div className="border border-gray-300 rounded-lg overflow-hidden shadow-md">
                <img className="w-full" src={item.image} alt={item.name} />
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                    <div className="text-sm leading-snug mb-2">
                        {truncatedInfo}
                        <span className="text-red-400 hover:text-blue-500 cursor-pointer" onClick={readmoreHandler}>
                            {readmore ? `Show less` : `Read more`}
                        </span>
                    </div>
                    <p className="text-sm mb-1">Category: {item.category}</p>
                    <p className="text-sm mb-1">Price: ₹{item.price}</p>
                    <button
                        className={`text-sm flex flex-box justify-center items-center py-[8px] px-[23px] rounded-[30px] border mt-6 ${
                            inCart ? 'bg-gray-400 cursor-not-allowed' : 'bg-yellow-400 hover:bg-yellow-500'
                        } shadow-sm transition-colors duration-300 ease-in-out`}
                        onClick={handleAddToCart}
                        disabled={inCart}
                    >
                        {inCart ? 'Added to Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MenuItemCard;
