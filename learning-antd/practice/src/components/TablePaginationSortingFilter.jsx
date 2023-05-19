import { Spin, Table } from 'antd';
import React, { useEffect, useReducer, useState } from 'react';

const initialPagination = {
  current: 2,
  pageSize: 13,
};

const paginationReducer = (state, action) => {
  const { type, payload } = action;
  console.log(
    '🚀 ~ file: TablePaginationSortingFilter.jsx:11 ~ paginationReducer ~ payload:',
    payload
  );
  switch (type) {
    case 'SET_CURRENT':
      return { ...state, current: payload };
    case 'SET_PAGE_SIZE':
      return { ...state, pageSize: payload };
    default:
      return state;
  }
};
const TablePaginationSortingFilter = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [paginationState, dispatchPagination] = useReducer(
    paginationReducer,
    initialPagination
  );
  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setDataSource(data))
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [setLoading]);
  const columns = [
    {
      key: '1',
      title: 'ID',
      dataIndex: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      key: '2',
      title: 'User ID',
      dataIndex: 'userId',
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      key: '3',
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      key: '4',
      title: 'Completed',
      dataIndex: 'completed',
      render: completed => (completed ? 'Completed' : 'In Progress'),
      filters: [
        { text: 'Completed', value: true },
        { text: 'In Progress', value: false },
      ],
      onFilter: (value, record) => record.completed === value,
    },
  ];
  return (
    <div>
      <Spin spinning={loading}>
        <Table
          dataSource={dataSource}
          columns={columns}
          sortDirections={['ascend', 'descend', 'ascend']}
          pagination={{
            current: paginationState.current,
            pageSize: paginationState.pageSize,
            onChange: (page, pageSize) => {
              dispatchPagination({
                type: 'SET_CURRENT',
                payload: page,
              });
              dispatchPagination({
                type: 'SET_PAGE_SIZE',
                payload: pageSize,
              });
            },
          }}
        ></Table>
      </Spin>
    </div>
  );
};

export default TablePaginationSortingFilter;
