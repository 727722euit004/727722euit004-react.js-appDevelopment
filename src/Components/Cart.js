import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Cart.css'; 
import { FoodContext } from '../context/FoodContext';

const Cart = () => {
    const { cart, setCart } = useContext(FoodContext);
    const navigate = useNavigate(); // Initialize useNavigate
    const{totalPrice,setTotalPrice}=useContext(FoodContext)
    // Ensure each item has valid price and quantity
    const itemsWithIntegerPrices = cart.map(item => {
        const price = Number(item.price);
        const quantity = Number(item.quantity);
        return {
            ...item,
            price: isNaN(price) ? 0 : Math.round(price),
            quantity: isNaN(quantity) ? 1 : quantity
        };
    });

    // Calculate the total price
    setTotalPrice(itemsWithIntegerPrices.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0))

    // Handle clearing the cart
    const handleClearCart = () => {
        setCart([]); // Clear the cart by setting it to an empty array
    };

    // Handle increasing the quantity of an item
    const handleIncreaseQuantity = (itemId) => {
        setCart(cart.map(item => 
            item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
        ));
    };

    // Handle decreasing the quantity of an item
    const handleDecreaseQuantity = (itemId) => {
        setCart(cart.map(item => 
            item.id === itemId && item.quantity > 1 
                ? { ...item, quantity: item.quantity - 1 } 
                : item
        ));
    };

    // Navigate to the payment page
    const handleCheckout = () => {
        navigate('/payment');
    };

    return (
        <div className="cart-container">
            <h2 className="cart-heading">Cart</h2>
            {itemsWithIntegerPrices.length === 0 ? (
                <p className="empty-cart-message">Your cart is empty</p>
            ) : (
                <>
                    <ul className="cart-item-list">
                        {itemsWithIntegerPrices.map((item) => (
                            <li key={item.id} className="cart-item">
                                <img src={item.image} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-details">
                                    <span className="cart-item-name">{item.name}</span>
                                    <span className="cart-item-quantity">Qty: {item.quantity}</span>
                                    <span className="cart-item-price">₹{item.price}</span>
                                </div>
                                <div className="quantity-controls">
                                    <button 
                                        className="quantity-button"
                                        onClick={() => handleDecreaseQuantity(item.id)}
                                    >
                                        -
                                    </button>
                                    <button 
                                        className="quantity-button"
                                        onClick={() => handleIncreaseQuantity(item.id)}
                                    >
                                        +
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="cart-footer">
                        <button className="clear-cart-button" onClick={handleClearCart}>
                            Clear Cart
                        </button>
                        <span className="total-price">
                            Total: ₹{totalPrice}
                        </span>
                    </div>
                    <div className="cart-footer">
                        <button className="checkout-button" onClick={handleCheckout}>
                            Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
