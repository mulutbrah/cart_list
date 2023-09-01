import React, { useState } from 'react';

import './style.scss'

// Define a Product type with the 'selected' property conditionally
interface Product {
    id: number;
    name: string;
    price: number;
    selected: boolean;
}

interface CartItemProps {
  product: Product;
  onSelect: (product: Product) => void;
  onRemove: (id: number) => void;
}

const CartItem: React.FC<CartItemProps> = ({ product, onRemove, onSelect }) => {
  const [quantity, setQuantity] = useState(1);

  const handleSelectToggle = () => {
    const updatedProduct = { ...product, selected: !product.selected };
    onSelect(updatedProduct);
  };

  const handleQuantityIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleRemoveItem = () => {
    onRemove(product.id);
  };

  return (
    <div className="cart-item py-4 px-2">
      <div className='flex justify-between'>
        <div className='flex'>
          <input
            type="checkbox"
            checked={product.selected}
            onChange={handleSelectToggle}
          />
          {product.name}
        </div>

        <div>
          <button onClick={handleRemoveItem}>Hapus</button>
        </div>
      </div>
      <div className="cart-item-details">
        <div className="cart-item-info flex justify-between">
          <div className="cart-item-quantity">
            <button onClick={handleQuantityDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleQuantityIncrement}>+</button>
          </div>
          <p className='font-semibold'>Rp{product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
