import React from 'react';

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
      <h1>Cart</h1>
      <div className="header-controls">
        <label>
          <input
            type="checkbox"
            checked={selectAll}
            onChange={onSelectAll}
          />
          Pilih Semua
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
