import React, { useState } from "react";

import { Timeline, Typography } from "antd";
import AZURE from "../assets/images/Azure.png";
import BAAC from "../assets/images/BAAC.png";
import LMG from "../assets/images/LMG.png";
import TRUE from "../assets/images/TRUE.png";
import AWARE from "../assets/images/aware.png";
import MIMO from "../assets/images/mimo.png";

const { Title } = Typography;

const Experience = () => {
  const [mode, setMode] = useState("alternate");
  return (
    <div className="mb-8 pb-8">
      <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
        <Title level={3} className="mb-6 text-gray-800 text-center">EXPERIENCES</Title>
        <div className="max-w-5xl mx-auto">
          <Timeline
            mode={mode}
            className="custom-timeline"
            items={[
              {
                label: (
                  <div className="bg-theme-orange-100 text-theme-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    02 Jan 2020 - Present
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={BAAC} alt="baac" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Bank for Agriculture and Agricultural Cooperatives</h4>
                        <p className="text-theme-orange-600 font-medium">Web Developer</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Gathering Requirements: Work with stakeholders to analyze and translate business needs into technical specifications.</li>
                        <li>Frontend (React): Develop responsive, user-friendly interfaces, integrate APIs, and optimize performance.</li>
                        <li>Backend (Golang): Build RESTful APIs, implement business logic, ensure security, and maintain tests.</li>
                        <li>Database (MongoDB): Design schemas, optimize queries, and manage data integrity.</li>
                        <li>CI/CD (Jenkins, Docker, Kubernetes): Automate builds/deployments, containerize apps, and manage cloud deployments.</li>
                        <li>Other Tools (curl, .sh): Use for API testing, automation, and scripting tasks.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-lime-100 text-theme-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                    07 May 2019 - 30 Dec 2019
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={AZURE} alt="azure" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Azure Computer (Thailand) Co., Ltd.</h4>
                        <p className="text-theme-orange-600 font-medium">Software Tester</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Prepare scenario test and test case to verify new features.</li>
                        <li>Test execution and verified features on SIT environment.</li>
                        <li>Reporting a defect to the developer.</li>
                        <li>To provide support to the Bank's QA team.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-orange-100 text-theme-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    01 Jan 2019 - 30 Apr 2019
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={AWARE} alt="aware" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Aware Co., Ltd.</h4>
                        <p className="text-theme-orange-600 font-medium">Project: PAYMENT HUB (On site: SCB)</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Create test coverage matrix and Test case for Travel Card report.</li>
                        <li>Tested execution and verified payment from several channels such as VTM etc. in SIT, Regressing and UAT phrase.</li>
                        <li>To provide support payment to other bank.</li>
                        <li>To verify log and report related with payment from channel.</li>
                        <li>Reporting a defect to the developer team.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-lime-100 text-theme-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                    13 Nov 2017 - 28 Dec 2018
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={AWARE} alt="aware" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">Aware Co., Ltd.</h4>
                        <p className="text-theme-orange-600 font-medium">Project: SCBONE (On site: SCB)</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Create test case for salesforce (internal webpage for call centre department).</li>
                        <li>Create test case for application form.</li>
                        <li>Prepare CRM data for testing.</li>
                        <li>Tested execution and verified fast easy mobile application on SIT, Regressing and UAT phrase.</li>
                        <li>Reporting a defect to the developer team and related team.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-orange-100 text-theme-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    02 Sep 2016 - 10 Nov 2017
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={LMG} alt="lmg" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">LMG Insurance</h4>
                        <p className="text-theme-orange-600 font-medium">Associate Business Analyst</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Gathering requirement and analysis for creating functional specification. Moreover, I have to test, including preparation, execution, reporting both defects and test reports before the delivery project.</li>
                        <li>Respond to support and resolve problems, follow up with user to ensure problems have been resolved.</li>
                        <li>Import and manipulate data related to product and create user.</li>
                        <li>Prepare billing monthly report to finance department & partners.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-lime-100 text-theme-lime-800 px-3 py-1 rounded-full text-sm font-medium">
                    02 May 2014 - 31 Aug 2016
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={MIMO} alt="mimo" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">MIMOTECH (AIS)</h4>
                        <p className="text-theme-orange-600 font-medium">Billing Application Analyst</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      <ul className="list-disc pl-5 space-y-2">
                        <li>Prepare scenario test and test case to verify new services. </li>
                        <li>Tested and Verified services such as voice, sms, mms and GPRS under the charging using oracle database with SQL command. </li>
                        <li>Analysis problems of customers exceeding service level agreement (SLA). </li>
                        <li>Solved various problems that occur on pre paid system. Prepare weekly and monthly report to supervisor include incident and ad hoc requested from management.</li>
                      </ul>
                    </div>
                  </div>
                ),
              },
              {
                label: (
                  <div className="bg-theme-orange-100 text-theme-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    01 April 2013 - 30 September 2013
                  </div>
                ),
                children: (
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-4">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-3">
                      <div className="flex-shrink-0">
                        <img src={TRUE} alt="true" className="w-20 h-20 object-contain" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-800">True Corporation</h4>
                        <p className="text-theme-orange-600 font-medium">Web Developer (Internship)</p>
                      </div>
                    </div>
                    <div className="text-gray-600 leading-relaxed">
                      Developed web application is Report the performance system of mobileSMC using HTML, CSS, PHP, MySQL and Macromedia dreamweaver8.
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

export default Experience;
