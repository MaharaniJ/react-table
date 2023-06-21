import React, { useState } from 'react';
import Data from './data.json';
// import './Table.css';
 import './style.css';
import Addmember from './Addmember';
import EditList from './EditList';

function Table() {
  const [datas, setDatas] = useState(Data);
  const [updatestate, setUpdatestate] = useState(-1);

  const handleEdit = (id) => {
    setUpdatestate(id);
  };

  const handleDelete = (id) => {
    const newItem = datas.filter((d) => d.id !== id);
    setDatas(newItem);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const phone = e.target.elements.phone.value;
    const updatedData = datas.map((data) =>
      data.id === updatestate
        ? { ...data, name: name, email: email, phone: phone }
        : data
    );
    setDatas(updatedData);
    setUpdatestate(-1);
  };

  return (
    <div className='tableWrap'>
      <div>
        <Addmember setDatas={setDatas} />
        <form onSubmit={handleUpdate}>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {datas.map((data, index) =>
                updatestate === data.id ? (
                  <EditList
                    key={data.id}
                    data={data}
                    datas={datas}
                    setDatas={setDatas}
                  />
                ) : (
                  <tr key={data.id}>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                      <button
                        className='edit'
                        type='button'
                        onClick={() => handleEdit(data.id)}
                      >
                        Edit
                      </button>
                      <button
                        className='delete'
                        type='button'
                        onClick={() => handleDelete(data.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </form>
      </div>
    </div>
  );
}

export default Table;
