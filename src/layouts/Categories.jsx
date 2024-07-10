import React from "react";
import { MenuItem, Menu } from "semantic-ui-react";

const Categories = () => {
  return (
    <div>
      {" "}
      <Menu pointing secondary vertical className="menu-category">
        <Menu.Item name="home" />
        <Menu.Item name="messages" />
        <Menu.Item name="friends" />
      </Menu>
    </div>
  );
};

export default Categories;
