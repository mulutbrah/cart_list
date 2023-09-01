import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { getOne } from '../../api/carts';
import { formatIDRCurrency } from '../../utils/helper';

import './style.scss'

interface Product {
  id: number;
  name: string;
  thumbnailUrl: string;
  price: number;
  quantity: number;
}

const ProductPage: React.FC = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>({
    id:0,
    name: '',
    thumbnailUrl: '',
    price: 0,
    quantity: 0
  })

  const fetch = async () => {
    try {
      const res = await getOne(id);

      setProduct(res);
    }catch {
        // 
    }finally {
        // 
    }
  };

  useEffect(() => {
    fetch();
  }, [id])

  return (
    <div className="product-page m-auto">
      <Link to={`/`}>
        <div className='product-page-header'>back</div>
      </Link>
      <div className="product-page-item py-4 px-2">
          <div className='flex'>
            <div className='flex'>
              <div className='product-page-item__image'>
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
                <p className='font-semibold'>{formatIDRCurrency(product.price/product.quantity)}</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ProductPage;
