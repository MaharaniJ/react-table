import React from 'react'
import './Table.css'

function Addmember({setDatas}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.elements.name.value;
        const email = e.target.elements.email.value;
        const phone = e.target.elements.phone.value;
        const newMember = {
            id:6,
            name,
            email,
            phone,
        }
        setDatas(preData=>preData.concat(newMember))
    }
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name'></input>
            <input type='text' name='email' placeholder='Enter your Email'></input>
            <input type='text' name='phone' placeholder='Enter you number'></input>
            <button type='button'>Add</button>
        </form>
    </div>
  )
}

export default Addmember