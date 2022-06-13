import React from "react";
// import { DataTable } from "../../../../organisms/DataTable";

// const columns = [
//   {
//     title: "PAYMENT PERIOD",
//     dataIndex: "name",
//   },
//   {
//     title: "3 MONTHS",
//     dataIndex: "chinese",
//     sorter: {
//       compare: (a, b) => a.chinese - b.chinese,
//       multiple: 3,
//     },
//   },
//   {
//     title: "6 MONTHS",
//     dataIndex: "math",
//     sorter: {
//       compare: (a, b) => a.math - b.math,
//       multiple: 2,
//     },
//   },
//   {
//     title: "12 MONTHS",
//     dataIndex: "english",
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
//   {
//     title: "18 MONTHS",
//     dataIndex: "english",
//     sorter: {
//       compare: (a, b) => a.english - b.english,
//       multiple: 1,
//     },
//   },
// ];

// const data = [
//   {
//     key: "1",
//     name: "Price",
//     chinese: 98,
//     math: 60,
//     english: 70,
//   },
//   {
//     key: "2",
//     name: "Initial Deposit",
//     chinese: 98,
//     math: 66,
//     english: 89,
//   },
//   {
//     key: "3",
//     name: "!st Payment",
//     chinese: 98,
//     math: 90,
//     english: 70,
//   },
//   {
//     key: "4",
//     name: "2nd Payment",
//     chinese: 88,
//     math: 99,
//     english: 89,
//   },
//   {
//     key: "4",
//     name: "3rd Payment",
//     chinese: 88,
//     math: 99,
//     english: 89,
//   },
// ];

const PricingTab = () => {
  // <DataTable dataSource={data} columns={columns} />
  return (
    <div className="my-12">
      <div className="mb-4">
        <h2 className="text-base font-semibold tracking-wide">
          Contact us for details on pricing...
        </h2>
      </div>
      <div className="inline-flex rounded-md shadow">
        <a
          href="tel: +2347025050012"
          className="inline-flex items-center justify-center px-3 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-900 hover:bg-blue-700"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default PricingTab;
