import React, { useState } from 'react'
import axios from 'axios'

const Form = () => {
    const [name, setName] = useState('')
    const nameChange = (event) => {
        setName(event.target.value)

        // console.log(name)
    }

    const [password, setPassword] = useState('')
    const passowrdChange = (event) => {
        setPassword(event.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault;
        console.log({ name, description, price });
        axios.post('http://localhost:3000/product/create', { name, description, price })

    }



    // const [name, setName] = useState('')
    // const nameChange = (event) => {
    //     setName(event.target.value)

    //     console.log(name)
    // }

    // const [name, setName] = useState('')
    // const nameChange = (event) => {
    //     setName(event.target.value)

    //     console.log(name)
    // }

    // const [name, setName] = useState('')
    // const nameChange = (event) => {
    //     setName(event.target.value)

    //     console.log(name)
    // }


    return (
        <div>
            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <form className='border-2 border-white rounded-[50px] gap-2 flex flex-col p-20 justify-center items-center'>

                    <div >
                        <label htmlFor="username">Enter your name</label>
                        <input className='outline-2 border-white rounded-4xl p-3' type="text" name="name" id="username" palceholder="Name here" onChange={nameChange} value={name} required />
                    </div>
                    <div>
                        <label htmlFor="pw">Password</label>
                        <input className='outline-2 border-white rounded-4xl p-3' type="password" name="pw" id="pw" placeholder="password" onChange={passowrdChange} value={password} required />
                    </div>
                    {/* <div>
                        <select name="Country" >
                            <option name="Country" value="Nepal">Nepal</option>
                            <option name="Country" value="India">India</option>
                        </select>
                    </div> */}
                    {/* <div>
                        <label htmlFor>Select your picture</label>
                        <input type="file" accept=".png,.jpg,.jpeg,.webp" />
                    </div> */}
                    {/* <div>
                        <label htmlFor='g'>Gender:</label>
                        <label htmlFor='jh'>Male</label>
                        <input type="radio" name="gender" defaultValue="Male" />
                        <label htmlFor='h'>Female</label>
                        <input type="radio" name="gender" defaultValue="Female" />
                    </div> */}
                    <div>
                        <input type="submit" name="submit" defaultValue="submit" />
                    </div>
                    {/* <fieldset>
                        <legend>Account Information</legend>
                        <label htmlFor>Account holders name</label>
                        <input type="text" />
                    </fieldset> */}
                </form>
            </div>
        </div>
    )
}

export default Form
