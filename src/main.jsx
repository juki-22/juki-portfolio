import { ConfigProvider } from "antd";
import thTH from "antd/locale/th_TH";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";

// if (import.meta.env.PROD) console.log = () => null; // Tricky for production (but still not safe)

const newTheme = {
  token: {
    colorPrimary: "#ff8c00", // vibrant orange as primary color
    colorPrimaryHover: "#ffa500", // lighter orange for hover
    colorPrimaryActive: "#ff7f00", // darker orange for active state
    colorBgContainer: "#fefefe", // clean white background
    colorBgElevated: "#f8f9fa", // light gray elevated background
    colorBgLayout: "#fafafa", // very light gray layout background
    colorSplit: "#e9ecef", // light gray split color
    colorBorder: "#dee2e6", // light gray border
    colorText: "#212529", // dark text for good contrast
    colorTextSecondary: "#6c757d", // medium gray secondary text
    colorTextDisabled: "#adb5bd", // light gray disabled text
    colorIcon: "#ff8c00", // orange icons to match primary
    borderRadius: "8px", // slightly more rounded corners
    boxShadow: "0 4px 12px rgba(255, 140, 0, 0.15)", // orange-tinted shadow
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/juki-portfolio/">
      <ConfigProvider locale={thTH} theme={newTheme}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </React.StrictMode >
);
