import React, { useState } from 'react';
import './restaurant-style.css';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

// by using "new Set" same category will not repeat and this way we have unique category
// don't forget to make it array by adding array brackets
let navCategory = new Set(
  Menu.map((currentElement) => {
    return currentElement.category;
  })
);
// spread operator (...) to add new element in existing Array
const uniqueList = [...navCategory, 'All'];

console.log(uniqueList);

const Restaurant = () => {
  //hooks !! you should add hooks always on top of everything
  // useState hook used to manage data also known as "state management"
  // Menu is = intial data
  // menuData is = current data
  // setMenuData is = updated data

  // Hook to update and display the menuApi data in menucard
  const [menuData, setMenuData] = useState(Menu);

  // Hook to update and display new category in navbar
  const [menuList, setMenuList] = useState(uniqueList); // menuList is currentData that means its basically uniqueList

  // function to filter out the card category according to navbar category clicks
  const filterItem = (category) => {
    if (category === 'All') {
      return setMenuData(Menu);
    }
    
    const updatedList = Menu.filter((currentElement) => {
      return currentElement.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Restaurant;
