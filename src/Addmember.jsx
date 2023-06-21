import React, { useRef } from 'react'
import './Table.css'

function Addmember({setDatas}) {
    const nameRef = useRef()
    const emailRef = useRef()
    const phoneRef = useRef()

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
        nameRef.current.value=""
        emailRef.current.value=""
        phoneRef.current.value=""

    }
  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <input type='text' name='name' placeholder='Enter your name' ref={nameRef}></input>
            <input type='text' name='email' placeholder='Enter your Email' ref={emailRef}></input>
            <input type='text' name='phone' placeholder='Enter you number' ref={phoneRef}></input>
            <button type='submit'>Add</button>
        </form>
    </div>
  )
}

export default Addmember