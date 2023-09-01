import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './style.scss'

interface Product {
  id: number;
  name: string;
  price: number;
  selected: boolean;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { id: 1, name: 'Product 1', price: 10, selected: true },
    { id: 2, name: 'Product 2', price: 15, selected: true },
    { id: 3, name: 'Product 3', price: 20, selected: true },
  ]);

  const [selectAll, setSelectAll] = useState(true);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const updatedCartItems = cartItems.map((item) => ({
      ...item,
      selected: !selectAll,
    }));
    setCartItems(updatedCartItems);
  };

  // Handle deleting selected items
  const handleDeleteSelected = () => {
    const updatedCartItems = cartItems.filter((item) => !item.selected);
    setCartItems(updatedCartItems);
  };

  // Calculate the total number of selected items
  const selectedItemCount = cartItems.filter((item) => item.selected).length;

  // Calculate the total price of selected items
  const totalPrice = cartItems
    .filter((item) => item.selected)
    .reduce((total, item) => total + item.price, 0);

  const handleRemoveProduct = (id: number) => {
    const res = cartItems.filter(item => item.id !== id)
    setCartItems(res);
  }

  const handleSelectProduct = (updatedCartItems: Product) => {
    const res = cartItems.map((item) => {
        if (item.id === updatedCartItems.id) {
          return { ...item, selected: updatedCartItems.selected };
        }
        return item;
      });
  
      setCartItems(res);
  }

  return (
    <div className="cart-page m-auto">
      <Header
        selectAll={selectAll}
        onSelectAll={handleSelectAll}
        onDeleteSelected={handleDeleteSelected}
        selectedItemCount={selectedItemCount}
      />
      <div className="cart-item-list">
        {cartItems.map((item) => (
          <CartItem product={item} 
            key={item.id}
            onSelect={handleSelectProduct} 
            onRemove={handleRemoveProduct} 
        />
        ))}
      </div>
      <Footer selectedItemCount={selectedItemCount} totalPrice={totalPrice} />
    </div>
  );
};

export default CartPage;
