import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { toast, Toaster } from 'sonner';

const ProductUpdate = () => {


    const [name, setName] = useState('');
    const [brand, setBrand] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');

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






    const params = useParams()
    const { id } = params



    const fetchProduct = async () => {
        const result = await axios.get(`http://localhost:3000/product/getProductById/${id}`)

        setDescription(result.data.data.description)
        setName(result.data.data.name)
        setBrand(result.data.data.brand)
        setPrice(result.data.data.price)
        setImage(result.data.data.image)
    }

    useEffect(() => { fetchProduct() }, [])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const body = new FormData()

        body.append('name', name)
        body.append('price', price)
        body.append('image', image)
        body.append('brand', brand)
        body.append('description', description)

        const response = await axios.put(`http://localhost:3000/product/updateProduct/${id}`, body)

        if (response.status != 200) {
            toast.error('Error occured to update')
        }

        if (response.status == 200) {

            toast.success("Successfully updated")
            fetchProduct()
        }


    }
    // const body = { name, brand, description, price }

    // console.log({ name, description, price });
    // console.log(image);





    return (

        <div>

            <div className='h-[100vh] w-[100vw] flex justify-center items-center'>
                <form className='border-3 border-white rounded-[50px] gap-5 flex flex-col p-20 justify-center items-center'>

                    <label htmlFor="productName" required>Product Name:</label>
                    <input type="text" onChange={namechange} name="name" value={name} placeholder="Product Name" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="productBrand" >Brand:</label>
                    <input type="text" onChange={brandchange} name="brand" value={brand} placeholder="Product Brand" className='border-2 border-black rounded-lg p-2' />


                    <label htmlFor="price" required>Price:</label>
                    <input type="number" onChange={pricechange} name="price" value={price} defaultValue="" placeholder="Price" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="description" required>Description:</label>
                    <input type="text" onChange={descriptionchange} name="description" value={description} defaultValue="" placeholder="Description" className='border-2 border-black rounded-lg p-2' />

                    <label htmlFor="Image" required>Image URL:</label>
                    <input type='file' onChange={(e) => setImage(e.target.files[0])} />

                    <button className="outline-2 outline-white rounded-4xl p-3" onClick={handleSubmit}>Submit</button>
                </form>

            </div>
            <Toaster />
        </div>

    )
}

export default ProductUpdate
