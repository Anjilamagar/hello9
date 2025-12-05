import axios from "axios";
import react, { useState } from "react"


const CreateProduct = () => {
    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const namechange = (event) => {
        setName(event.target.value)
        //console.log(name)
    };


    const brandchange = (event) => {
        setBrand(event.target.value)
        //console.log(name)
    };


    const pricechange = (event) => {
        setPrice(event.target.value)
        // console.log(name)
    };

    const descriptionchange = (event) => {
        setDescription(event.target.value)
        //console.log(name)
    };



    const handleSubmit = (e) => {
        e.preventDefault();
        const body = { name, brand, description, price }

        // console.log({ name, description, price });

        axios.post('http://localhost:3000/product/createProduct', body)

    }
    return (
        <div>

            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <form className='border-3 border-white rounded-[50px] gap-5 flex flex-col p-20 justify-center items-center'>

                    <label htmlFor="productName" required>Product Name:</label>
                    <input type="text" onChange={namechange} name="name" defaultValue="" placeholder="Product Name" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="productBrand" >Brand:</label>
                    <input type="text" onChange={brandchange} name="brand" defaultValue="" placeholder="Product Brand" className='border-2 border-black rounded-lg p-2' />


                    <label htmlFor="price" required>Price:</label>
                    <input type="number" onChange={pricechange} name="price" value={price} defaultValue="" placeholder="Price" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="description" required>Description:</label>
                    <input type="text" onChange={descriptionchange} name="description" value={description} defaultValue="" placeholder="Description" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="image" required>Image URL:</label>
                    <input type="text" name="image" defaultValue="" placeholder="Image URL" className='border-2 border-black rounded-lg p-2' />

                    <button className="outline-2 outline-white rounded-4xl p-3" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
        </div>
    )
}

export default CreateProduct