import React from 'react';
import Menu from './menuApi';

const Navbar = ({ filterItem, menuList }) => {
  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          {/* currentElement have all the category data */}
          {menuList.map((currentElement) => {
            return (
              <button className="btn-group__item" onClick={() => filterItem(currentElement)}>
                {currentElement}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
