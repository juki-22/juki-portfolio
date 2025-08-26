import { Timeline, Typography } from "antd";
import React, { useState } from "react";
import KMUTT from "../assets/images/KMUTT.png";
import KU from "../assets/images/KU.png";
const { Title } = Typography;
const Education = () => {
  const [mode, setMode] = useState("left");

  return (
    <div className="mb-8 pb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <Title level={3} className="mb-6 text-gray-800 text-center">EDUCATION</Title>
        <div className="max-w-4xl mx-auto">
          <Timeline
            mode={mode}
            className="custom-timeline"
            items={[
              {
                label: (
                  <div className="bg-theme-orange-100 text-theme-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    2015 - 2017
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        <img src={KMUTT} alt="kmutt" className="w-24 h-24 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-2">Master of School of Information Technology</h4>
                        <p className="text-gray-600">
                          King Mongkut's University of Technology Thonburi, Bangkok Thailand.
                        </p>
                        GPA: 3.25
                      </div>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-lime-100 text-theme-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                    2010 - 2014
                  </div>
                ),

                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                      <div className="flex-shrink-0">
                        <img src={KU} alt="ku" className="w-24 h-24 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800 mb-2">Bachelor of Science in Information Technology</h4>
                        <p className="text-gray-600">
                          Kasetsart University Sriracha Campus, Chonburi Thailand.
                        </p>
                        GPA: 2.83
                      </div>
                    </div>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Education;
