import { Typography, theme } from "antd";
import React from "react";
const { Title } = Typography;

import avt from "../assets/images/avatar.png";

const Info = () => {
  const {
    token: { colorPrimary },
  } = theme.useToken();
  return (
    <div className="mb-8 pb-8 mt-8">
      <div className="sm:flex gap-8 mb-8 sm:mb-6">
        <div className="sm:flex-none w-full sm:max-w-xs rounded-xl border border-gray-200 shadow-lg overflow-hidden bg-white">
          <div className="flex flex-col items-center py-8 text-center bg-gradient-to-br from-theme-orange-500 to-theme-lime-500">
            <div className="flex mb-4 shadow-xl rounded-full ring-4 ring-white">
              <img
                className="rounded-full"
                src={avt}
                alt="me"
                width={"160px"}
                height={"160px"}
              />
            </div>
            <div className="mb-2 sm:text-xl font-bold text-white">
              KANTAPORN ITSARATHARADON (JU)
            </div>
          </div>
        </div>
        <div className="sm:flex-1 p-6 relative rounded-xl bg-white shadow-lg border border-gray-200">
          <Title level={3} className="mb-4 text-gray-800">ABOUT ME</Title>
          <div className="text-gray-600 leading-relaxed">
            Hi, I’m a junior full-stack developer who loves building modern web apps with React, Go, and MongoDB. I also work with Jenkins, Docker, and Kubernetes to automate deployments and keep things running smoothly. I enjoy problem-solving, turning requirements into real solutions, and writing clean, efficient code.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
