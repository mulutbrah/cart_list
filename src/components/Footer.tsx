import React from 'react';

interface FooterProps {
  selectedItemCount: number;
  totalPrice: number;
}

const Footer: React.FC<FooterProps> = ({ selectedItemCount, totalPrice }) => {
  return (
    <div className="footer">
      <div className="footer-summary flex justify-between">
        <p className='font-light'>{selectedItemCount} products</p>
        <p>Rp {totalPrice}</p>
      </div>
    </div>
  );
};

export default Footer;
