import { Layout, theme } from "antd";
import React from "react";

const { Header, Content, Footer } = Layout;

const MainLayout = ({ children }) => {
  const {
    token: { colorPrimary },
  } = theme.useToken();

  return (
    <div className="flex flex-col min-h-screen h-auto relative bg-gradient-to-br from-yellow-50 to-green-100">
      <Content className="z-50 flex-1 px-4 sm:px-8 lg:px-16 py-8">{children}</Content>
      <Footer className="relative mt-16 z-20 text-center bg-white/80 backdrop-blur-sm border-t border-gray-200">
        Presented by JUKI ©2023
      </Footer>
    </div>
  );
};
export default MainLayout;
