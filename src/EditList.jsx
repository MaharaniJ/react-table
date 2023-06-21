import React from 'react';

const EditList = ({ data, datas, setDatas }) => {
  const handleInputname = (e) => {
    const name = e.target.value;
    const updatedData = datas.map((li) =>
      li.id === data.id ? { ...li, name: name } : li
    );
    setDatas(updatedData);
  };

  const handleInputemail = (e) => {
    const email = e.target.value;
    const updatedData = datas.map((li) =>
      li.id === data.id ? { ...li, email: email } : li
    );
    setDatas(updatedData);
  };

  const handleInputphone = (e) => {
    const phone = e.target.value;
    const updatedData = datas.map((li) =>
      li.id === data.id ? { ...li, phone: phone } : li
    );
    setDatas(updatedData);
  };

  return (
    <div>
       {/* <table> */}
        <tbody> 
          <tr>
            <td>
              <input
                type='text'
                onChange={handleInputname}
                name='name'
                value={data.name}
              />
            </td>
            <td>
              <input
                type='text'
                onChange={handleInputemail}
                name='email'
                value={data.email}
              />
            </td>
            <td>
              <input
                type='text'
                onChange={handleInputphone}
                name='phone'
                value={data.phone}
              />
            </td>
            <td>
              <button type='submit'>Update</button>
            </td>
          </tr>
         </tbody>
       {/* </table>  */}
    </div>
  );
};

export default EditList;
