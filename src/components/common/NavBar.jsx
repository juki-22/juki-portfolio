import { Layout, theme } from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const items = [
  {
    label: "Navigation 1",
    key: "a",
    path: "/",
  },
  {
    label: "Navigation 2",
    key: "b",
    path: "/a",
  },
  {
    label: "Navigation 3",
    key: "c",
    path: "/b",
  },
];

const NavBar = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  const [current, setCurrent] = useState("a");
  const navigate = useNavigate();

  return (
    <Header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1,
        width: "100%",
        backgroundColor: colorPrimary,
        display: "flex",
        justifyContent: "flex-end",
      }}
    >
      {items.map((m) => {
        return (
          <div
            onClick={(e) => {
              setCurrent(e.key);
              navigate(m.path);
            }}
            key={m.key}
            style={{ marginRight: "10px", cursor: "pointer" }}
          >
            {m.label}
          </div>
        );
      })}
    </Header>
  );
};

export default NavBar;
