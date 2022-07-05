import React, { useState } from 'react';
import './restaurant-style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';

const Restaurant = () => {
  //hooks !! you should add hooks always on top of everything
  // useState hook used to manage data also known as "state management"
  // Menu is = intial data
  // menuData is = current data
  // setMenuData is = updated data
  const [menuData, setMenuData] = useState(Menu);

  return (
    <>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
