import React from "react";
import { DataTable } from "../../../../organisms/DataTable";

const columns = [
  {
    title: "PAYMENT PERIOD",
    dataIndex: "name",
  },
  {
    title: "3 MONTHS",
    dataIndex: "chinese",
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: "6 MONTHS",
    dataIndex: "math",
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: "12 MONTHS",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
  {
    title: "18 MONTHS",
    dataIndex: "english",
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data = [
  {
    key: "1",
    name: "Price",
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: "2",
    name: "Initial Deposit",
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: "3",
    name: "!st Payment",
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: "4",
    name: "2nd Payment",
    chinese: 88,
    math: 99,
    english: 89,
  },
  {
    key: "4",
    name: "3rd Payment",
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const PricingTab = () => {
  return <DataTable dataSource={data} columns={columns} />;
};

export default PricingTab;
