import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductsDetails = () => {
    const params = useParams()
    const { id } = params
    const [products, setProduct] = useState([])
    const fetchProduct = async () => {
        const result = await axios.get(`http://localhost:3000/product/getProductById/${id}`)
        setProduct(result.data.data)
    }


    useEffect(() => {
        fetchProduct()
    }, [])


    return (
        <div>
            <div className='border-2'>
                {products.name}
            </div>


            <Link to={`/product/updateProduct/${id}`}>Update</Link>

            {/* <button className="outline-2 outline-white rounded-4xl p-3" onClick={handleSubmit}>Delete</button> */}


        </div>
    )
}

export default ProductsDetails
