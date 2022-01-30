import React, { useState } from "react";
import LeftMenu from "./Sections/LeftMenu";
import RightMenu from "./Sections/RightMenu";
import { Drawer, Button, Icon } from "antd";
import "./Sections/Navbar.css";

function NavBar() {
  const [visible, setVisible] = useState(false);
  const logoRef =
    "data:image/png;base64,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";
  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <nav
      className="menu"
      style={{ position: "fixed", zIndex: 5, width: "100%" }}
    >
      <div className="menu__logo">
        <img src={logoRef} width="60" height="82" />
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  );
}

export default NavBar;
