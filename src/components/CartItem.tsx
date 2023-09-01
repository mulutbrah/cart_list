import React, { useState } from 'react';

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
    <div className="cart-item">
      <label>
        <input
          type="checkbox"
          checked={product.selected}
          onChange={handleSelectToggle}
        />
        {product.name}
      </label>
      <div className="cart-item-details">
        <div className="cart-item-info">
          <p>Price: {product.price} IDR</p>
          <div className="cart-item-quantity">
            <button onClick={handleQuantityDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleQuantityIncrement}>+</button>
          </div>
        </div>
      </div>
      <button onClick={handleRemoveItem}>Hapus</button>
    </div>
  );
};

export default CartItem;
