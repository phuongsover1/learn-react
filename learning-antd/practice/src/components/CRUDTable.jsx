import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Input, Modal, Space, Table } from 'antd';
import React, { useCallback, useMemo, useState } from 'react';

const CRUDTable = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editStudent, setEditStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
    {
      id: 1,
      name: 'John',
      email: 'john@gmail.com',
      address: 'john Address',
    },
    {
      id: 2,
      name: 'David',
      email: 'david@gmail.com',
      address: 'David Address',
    },
    {
      id: 3,
      name: 'James',
      email: 'james@gmail.com',
      address: 'James Address',
    },
    {
      id: 4,
      name: 'Sam',
      email: 'sam@gmail.com',
      address: 'Sam Address',
    },
  ]);
  const addNewStudent = useCallback(() => {
    const randomNumber = parseInt(Math.random() * 1000);
    const newStudent = {
      id: randomNumber,
      name: 'Name ' + randomNumber,
      email: randomNumber + '@gmail.com',
      address: 'Address ' + randomNumber,
    };
    setDataSource(prev => [...prev, newStudent]);
  }, [setDataSource]);

  const deleteStudent = useCallback(
    id => {
      Modal.confirm({
        title: 'Are you sure, you want to delete that user ?',
        okText: 'Yes',
        cancelText: 'Cancel',
        okType: 'danger',
        onOk: () => {
          setDataSource(prev => prev.filter(user => user.id !== id));
        },
      });
    },
    [setDataSource]
  );
  const editStudentHandler = useCallback(student => {
    setIsEditing(true);
    setEditStudent({ ...student });
  }, []);

  const closeModal = () => {
    setIsEditing(false);
    setEditStudent(null);
  };
  const okModalHandler = () => {
    setDataSource(prev =>
      prev.map(student => {
        if (student.id === editStudent.id) return editStudent;
        return student;
      })
    );
    closeModal();
  };

  const testCallBack = (num1, num2, e) => {
    console.log(
      '🚀 ~ file: CRUDTable.jsx:57 ~ testCallBack ~ num1:',
      num1
    );
    console.log(
      '🚀 ~ file: CRUDTable.jsx:57 ~ testCallBack ~ num2:',
      num2
    );
    console.log('🚀 ~ file: CRUDTable.jsx:57 ~ testCallBack ~ e:', e);
  };
  const columns = useMemo(() => {
    return [
      { key: '1', title: 'ID', dataIndex: 'id' },
      { key: '2', title: 'Name', dataIndex: 'name' },
      { key: '3', title: 'Email', dataIndex: 'email' },
      { key: '4', title: 'Address', dataIndex: 'address' },
      {
        key: '5',
        title: 'Actions',
        render: record => {
          return (
            <>
              <EditOutlined
                style={{ color: '#1677ff' }}
                onClick={editStudentHandler.bind(null, record)}
              />
              <DeleteOutlined
                onClick={deleteStudent.bind(null, record.id)}
                style={{ color: '#f5222d', marginLeft: '1rem' }}
              />
            </>
          );
        },
      },
    ];
  }, [deleteStudent, editStudentHandler]);

  const onChangeInput = e => {
    const { name, value } = e.target;
    setEditStudent(prev => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <Button
        onClick={addNewStudent}
        style={{ marginBottom: '2rem' }}
      >
        Add a new Student
      </Button>
      <button
        onClick={testCallBack.bind(null, 1, 2)}
        style={{ marginBottom: '2rem' }}
      >
        Test Button
      </button>
      <Table columns={columns} dataSource={dataSource}></Table>;
      <Modal
        title='Edit Student'
        open={isEditing}
        onOk={okModalHandler}
        onCancel={closeModal}
        okText={'Save'}
      >
        <Space
          size='middle'
          direction='vertical'
          block
          style={{ margin: '1rem 0', display: 'flex' }}
        >
          <Input
            addonBefore='Name:'
            value={editStudent?.name}
            name='name'
            onChange={onChangeInput}
          />
          <Input
            addonBefore='Email:'
            name='email'
            value={editStudent?.email}
            onChange={onChangeInput}
          />
          <Input
            addonBefore='Address:'
            name='address'
            value={editStudent?.address}
            onChange={onChangeInput}
          />
        </Space>
      </Modal>
    </>
  );
};

export default CRUDTable;
