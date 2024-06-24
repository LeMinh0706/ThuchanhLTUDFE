import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../Service/CategoryService'
import { addProduct } from '../Service/ProductService'

const AddProduct = ({ getAll }) => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [price, setPrice] = useState(0)
    const [img, setImg] = useState([])
    const [category, setCategory] = useState([])
    const [cate, setCate] = useState(1)

    useEffect(() => {
        getAllCate()
    }, [])

    const getAllCate = async () => {
        try {
            const res = await getAllCategories()
            console.log(res);
            setCategory(res.data)
            getAll()
        } catch (error) {
            console.log(error);
        }
    }

    const handleCateChange = (e) => {
        setCate(Number(e.target.value))
    }
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleDesChange = (e) => {
        setDes(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPrice(e.target.value)
    }
    const handleFileChange = (e) => {
        setImg(e.target.files)
    }
    const handleSubmit = async () => {
        try {
            const res = await addProduct(name, price, des, cate, img)
            console.log(res);
            getAll()
            window.location.reload()
            setCate('')
            setImg([])
            setName('')
            setPrice(0)
            setDes('')
        } catch (error) {
            console.log(error);
        }
    }

    console.log(img);
    return (
        <div className='w-1/3 flex flex-col border-2 p-3 rounded-lg bg-white drop-shadow-lg gap-4 '>

            <h2 className='text-lg font-medium text-center text-gray-400'>ADD PRODUCT</h2>
            <label className='text-gray-500 font-medium' htmlFor="name">Name:</label>
            <input className='p-3 border-2 rounded-lg' id='name' type="text" onChange={handleNameChange} value={name} />
            <label className='text-gray-500 font-medium' htmlFor="price">Price:</label>
            <input className='p-3 border-2 rounded-lg' id='price' type="number" onChange={handlePriceChange} value={price} />
            <label className='text-gray-500 font-medium' htmlFor="des">Description:</label>
            <input className='p-3 border-2 rounded-lg' id='des' type="text" onChange={handleDesChange} value={des} />
            <label className='text-gray-500 font-medium' htmlFor="file">Image:</label>
            <input className='p-3 border-2 rounded-lg' id='file' multiple type="file" onChange={handleFileChange} required />
            <select className='p-3 border' name="" id="category" onChange={handleCateChange} value={cate}>
                {category.map((item) => (
                    <>
                        <option className='text-black rounded-md' value={item.id}>{item.name}</option>
                    </>
                ))}
            </select>
            {(name === '' || price === '' || des === '') ?
                <button className='p-3 w-[120px] bg-gray-400 text-white self-end border rounded-md' disabled>
                    Add product
                </button>
                :
                <button className='p-3 w-[120px] bg-green-400 text-white self-end border rounded-md' onClick={handleSubmit}>
                    Add product
                </button>
            }
        </div>
    )
}

export default AddProduct