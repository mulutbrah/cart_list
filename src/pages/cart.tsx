import React, { useState } from 'react';
import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

import './style.scss'

interface Product {
  id: number;
  name: string;
  thumbnailUrl: string;
  price: number;
  selected: boolean;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<Product[]>([
    { 
        id: 1, 
        name: 'Product 1', 
        thumbnailUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zm2HhYX5NJFrsbvGBXDWpAHaE8%26pid%3DApi&f=1&ipt=80d1b67f1866e7d3f9b76150c0dac161b253de9a4dbb857d497414700eb05765&ipo=images',
        price: 100000, 
        selected: true,
        quantity: 1
    },
    { 
        id: 2, 
        name: 'Product 2', 
        thumbnailUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zm2HhYX5NJFrsbvGBXDWpAHaE8%26pid%3DApi&f=1&ipt=80d1b67f1866e7d3f9b76150c0dac161b253de9a4dbb857d497414700eb05765&ipo=images',
        price: 300000, 
        selected: true,
        quantity: 1
    },
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

  const handleUpdateCartItem = (product: Product) => {
    const res = cartItems.map((item) => {
        if (item.id === product.id) {
          return { ...item, quantity: product.quantity, price: product.price };
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
            handleUpdateCartItem={handleUpdateCartItem}
        />
        ))}
      </div>
      <Footer selectedItemCount={selectedItemCount} totalPrice={totalPrice} />
    </div>
  );
};

export default CartPage;
