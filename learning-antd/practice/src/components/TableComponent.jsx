import { Table } from 'antd';
import React from 'react';

const TableComponent = () => {
  const data = [
    {
      name: 'Name 1',
      age: 10,
      address: 'Address 1',
      key: '1',
    },
    {
      name: 'Name 2',
      age: 20,
      address: 'Address 2',
      key: '2',
    },
    {
      name: 'Name 3',
      age: 30,
      address: 'Address 3',
      key: '3',
    },
  ];
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'key',
      render: name => (
        <span style={{ fontWeight: 'bold' }}>{name}</span>
      ),
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'key',
      sorter: (a, b) => a.age - b.age,
    },
    { title: 'Address', dataIndex: 'address', key: 'key' },
    {
      title: 'Graduated?',
      key: 'key',
      render: payload => (
        <span>{payload.age > 20 ? 'Yes' : 'No'}</span>
      ),
    },
  ];
  return <Table dataSource={data} columns={columns}></Table>;
};

export default TableComponent;
