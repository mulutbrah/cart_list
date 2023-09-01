import React, { useState, useEffect } from 'react';

import CartItem from '../components/CartItem';
import Header from '../components/Header';
import Footer from '../components/Footer';

import { get } from '../api/carts';

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
  const [originalSource, setOriginalSource] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
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
    const findOgData = originalSource.filter(item => item.id === product.id)

    if(findOgData.length === 0) return false

    const res = cartItems.map((item) => {
        if (item.id === product.id) {
          return { 
            ...item, 
            quantity: product.quantity, 
            price: product.quantity * findOgData[0].price
        };
        }
        return item;
    });

    setCartItems(res);
  }

  const fetch = async () => {
    try {
      const res = await get();
      const og = [...res];
      const carts = res.map((item:any) => ({...item, selected: true }));

      setOriginalSource(og);
      setCartItems(carts);
    }catch {
        // 
    }finally {
        // 
    }
  };

  useEffect(() => {
    fetch();
  }, [])

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
