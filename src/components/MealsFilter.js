import React, { useState, useEffect } from "react";
import Menu from "../menuApi";
import Menubar from "./Menubar";
import MenuCard from "./MenuCard";

const uniqueList = [
  ...new Set(
    Menu.map((menuItem) => {
      return menuItem.category;
    })
  ),
  "All",
];

console.log(uniqueList);

const MealsFIlter = () => {
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }

    const updatedList = Menu.filter((menuItem) => {
      return menuItem.category === category;
    });

    setMenuData(updatedList);
  };

  return (
    <>
      <div className="container">
        <Menubar menuList={menuList} filterItem={filterItem} />
        <MenuCard menuData={menuData} />
      </div>
    </>
  );
};

export default MealsFIlter;
