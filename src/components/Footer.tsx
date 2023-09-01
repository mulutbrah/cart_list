import React from 'react';
import { formatIDRCurrency } from '../utils/helper';

interface FooterProps {
  selectedItemCount: number;
  totalPrice: number;
}

const Footer: React.FC<FooterProps> = ({ selectedItemCount, totalPrice }) => {
  return (
    <div className="footer">
      <div className="footer-summary flex justify-between">
        <p className='font-light'>{selectedItemCount} products</p>
        <p className='font-semibold'>{formatIDRCurrency(totalPrice)}</p>
      </div>
    </div>
  );
};

export default Footer;
