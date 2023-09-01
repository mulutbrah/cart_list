import React from 'react';

import './style.scss'

// Define a Product type with the 'selected' property conditionally
interface Product {
    id: number;
    name: string;
    thumbnailUrl: string;
    price: number;
    selected: boolean;
    quantity: number;
}

interface CartItemProps {
  product: Product;
  onSelect: (product: Product) => void;
  onRemove: (id: number) => void;
  handleUpdateCartItem: (product: Product) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, onSelect, handleUpdateCartItem }) => {
  const handleSelectToggle = () => {
    const updatedProduct = { ...product, selected: !product.selected };
    onSelect(updatedProduct);
  };

  const handleQuantityIncrement = () => {
    const quantity = product.quantity + 1 
    const updatedProduct = { ...product, quantity };
    
    handleUpdateCartItem(updatedProduct)
  };

  const handleQuantityDecrement = () => {
    if (product.quantity > 1) {
      const quantity = product.quantity - 1 
      const updatedProduct = { ...product, quantity };

      handleUpdateCartItem(updatedProduct)
    }
  };

  const handleRemoveItem = () => {
    onRemove(product.id);
  };

  return (
    <div className="cart-item py-4 px-2">
      <div className='flex'>
        <div className='flex'>
          <input
            type="checkbox"
            checked={product.selected}
            onChange={handleSelectToggle}
          />
          <div className='cart-item__image'>
            <img
              src={product.thumbnailUrl}
              alt={product.name}
            />
          </div>
        </div>

        <div className='w-full'>
          <div className='flex justify-between'>
            <p>
              {product.name}
            </p>
            <div>
              <button onClick={handleRemoveItem}>Hapus</button>
            </div>
          </div>
            <div className="cart-item-details">
            <div className="cart-item-info flex justify-between">
              <div className="cart-item-quantity">
                <button onClick={handleQuantityDecrement}>-</button>
                <span>{product.quantity}</span>
                <button onClick={handleQuantityIncrement}>+</button>
              </div>
              <p className='font-semibold'>Rp{product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
