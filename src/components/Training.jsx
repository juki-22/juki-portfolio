import { Popover, Steps, Typography } from "antd";

import React, { useState } from "react";

const { Title } = Typography;

const Training = (props) => {
  const [scroll, setScroll] = useState(false);

  const scrollHandle = ({ target: { scrollLeft } }) => {
    setScroll(scrollLeft > 10);
  };

  const customDot = (dot, { status, index, title }) => (
    <Popover content={<span>year {title}</span>}>{dot}</Popover>
  );

  const trainingList = [
    {
      title: "2012",
      description:
        "XML workshop training course by Mr. Miro Lehtonen at Kasetsart University Sriracha campus.",
    },
    {
      title: 2015,
      description: "Microsoft Excel 2013 Intermediate training basic.",
    },
    {
      title: 2015,
      description: "Systematic problem solving and decision making (SPSDM).",
    },
    {
      title: 2016,
      description:
        "Oracle Database 11g: SQL Fundamentals I by SIT KMUTT in partnership with ORACLE CORPORATION (THAILAND).",
    },
    {
      title: 2017,
      description:
        "Information Technology Control and Audit: Security Fundamentals by SIT KMUTT in partnership with Microsoft.",
    },
    {
      title: "November 2021",
      description: "English Class (Intermediate Level)",
    },
    {
      title: 2023,
      description: "Mongo DB",
    },
  ];
  return (
    <div className="mb-8 pb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <Title level={3} className="mb-6 text-gray-800 text-center">TRAINING</Title>
        <div className="max-w-6xl mx-auto overflow-x-auto">
          <Steps
            current={6}
            progressDot={customDot}
            items={trainingList}
            className="custom-steps"
            size="large"
          />
        </div>
      </div>
    </div>
  );
};

Training.propTypes = {};

export default Training;
