import { Table } from "antd";

export const DataTable = ({ dataSource, columns }) => (
  <Table columns={columns} dataSource={dataSource} />
);
