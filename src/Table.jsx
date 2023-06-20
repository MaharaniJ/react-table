import React, { useState } from 'react'
import Data from './data.json'
import './Table.css'
import Addmember from './Addmember'


function Table() {
    const [datas,setDatas] = useState(Data)
  return (
    <div className='tableWrap'>
        <div>
        <Addmember setDatas={setDatas}/>
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </thead>
            {
              datas.map((data)=>(
                <tr>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                    <button className='edit'>Edit</button>
                    <button className='delete'>Delete</button>
                    </td>
                </tr>
              ))  
            }
        </table>
        </div>
        
       
    </div>
  )
}

export default Table