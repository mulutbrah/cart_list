import React from 'react';

import './style.scss'

interface HeaderProps {
  selectAll: boolean;
  onSelectAll: () => void;
  onDeleteSelected: () => void;
  selectedItemCount: number;
}

const Header: React.FC<HeaderProps> = ({
  selectAll,
  onSelectAll,
  onDeleteSelected,
  selectedItemCount,
}) => {
  return (
    <div className="header">
      <h1 className='text-2xl py-4 px-2 font-semibold'>Cart</h1>

      <div className="header-controls flex justify-between py-2 px-2">
        <label className='font-semibold'>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={onSelectAll}
            className='mr-2'
          />
          <span>Pilih Semua</span>
        </label>
        <button
          onClick={onDeleteSelected}
          disabled={selectedItemCount === 0}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Header;
