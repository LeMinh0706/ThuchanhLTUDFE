import React, { useEffect, useState } from 'react'
import { getAllCategories } from '../Service/CategoryService'

const AddProduct = () => {
    const [name, setName] = useState('')
    const [des, setDes] = useState('')
    const [price, setPrice] = useState('')
    const [img, setImg] = useState([])
    const [category, setCategory] = useState([])
    const [cate, setCate] = useState()

    useEffect(() => {
        getAllCate()
    }, [])

    // console.log(name);
    // console.log(des);
    // console.log(price);
    // console.log(img);
    const getAllCate = async () => {
        try {
            const res = await getAllCategories()
            console.log(res);
            setCategory(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleCateChange = (e) => {
        setCate(e.target.value)
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
            alert(name + '-' + des + '-' + price + '-' + cate)
        } catch (error) {
            console.log(error);
        }
    }

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
            <input className='p-3 border-2 rounded-lg' id='file' multiple type="file" onChange={handleFileChange} />
            <select className='p-3 border' name="" id="category" onChange={handleCateChange} value={cate}>
                {category.map((item) => (
                    <>
                        <option className='text-black rounded-md' value={item.name}>{item.name}</option>
                    </>
                ))}
            </select>
            <button className='p-3 w-[120px] bg-green-400 text-white self-end border rounded-md' onClick={handleSubmit}>
                Add product
            </button>
        </div>
    )
}

export default AddProduct