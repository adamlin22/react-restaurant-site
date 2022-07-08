import React, { useState } from 'react';
import './restaurant-style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const uniqueList = Menu.map((currentElement) => {
  return currentElement.category;
});

console.log(uniqueList);

const Restaurant = () => {
  //hooks !! you should add hooks always on top of everything
  // useState hook used to manage data also known as "state management"
  // Menu is = intial data
  // menuData is = current data
  // setMenuData is = updated data
  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    const updatedList = Menu.filter(curEle);
    const curEle = (currentElement) => {
      return currentElement.category === category;
    };
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar">
        <div className="btn-group">
          <button
            className="btn-group__item"
            onClick={() => filterItem('breakfast')}
          >
            Breakfast
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem('lunch')}
          >
            Lunch
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem('evening')}
          >
            Evening
          </button>
          <button
            className="btn-group__item"
            onClick={() => filterItem('dinner')}
          >
            Dinner
          </button>
          <button className="btn-group__item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
