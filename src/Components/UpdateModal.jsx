import React, { useEffect, useState } from 'react'
import { getDetail, updateProduct } from '../Service/ProductService'
import { getAllCategories } from '../Service/CategoryService'

const UpdateModal = ({ name, price, description, category, Detail, id }) => {

    const [nameP, setNameP] = useState()
    const [priceP, setPriceP] = useState()
    const [des, setDes] = useState()
    const [cate, setCate] = useState()
    const [img, setImg] = useState([])
    const [cateList, setCateList] = useState([])
    useEffect(() => {
        Detail()
        setNameP(name)
        setPriceP(price)
        setDes(description)
        setCate(category)
        getCate()
    }, [name])

    const getCate = async () => {
        try {
            const res = await getAllCategories()
            console.log(res);
            setCateList(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const handleNameChange = (e) => {
        setNameP(e.target.value)
    }
    const handlePriceChange = (e) => {
        setPriceP(e.target.value)
    }
    const handleDesChange = (e) => {
        setDes(e.target.value)
    }
    const handleCateChange = (e) => {
        setCate(e.target.value)
    }

    const handleSubmit = async () => {
        try {
            // alert(nameP + priceP + des + cate + id)
            const res = await updateProduct(nameP, priceP, des, cate, id)
            Detail()
            return res
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex items-center justify-center bg-opacity-50 w-full'>
            <div className="bg-white p-6 rounded shadow-lg w-1/4 flex flex-col gap-4">
                <h2 className='text-yellow-500 font-bold text-lg text-center'>UPDATE</h2>
                {/* <input className='p-3 border w-full rounded-md' type="text" onChange={handleTextChange} value={text} /> */}
                <label htmlFor="name">Name:</label>
                <input id='name' className='p-3 border w-full rounded-md' type="text" onChange={handleNameChange} value={nameP} />
                <label htmlFor="price">Price:</label>
                <input id='price' className='p-3 border w-full rounded-md' type="text" onChange={handlePriceChange} value={priceP} />
                <label htmlFor="name">Description:</label>
                <input id='name' className='p-3 border w-full rounded-md' type="text" onChange={handleDesChange} value={des} />
                <select className='p-3 border' name="category" id="category" onChange={handleCateChange} value={cate}>
                    {cateList.map((item) => (
                        <>
                            <option className='text-black rounded-md' value={item.id}>{item.name}</option>
                        </>
                    ))}
                </select>
                <div className='flex justify-end gap-3 mt-3'>
                    {/* <button className='border rounded-md self-end p-3 text-white bg-red-500' onClick={closeModal}>Close</button> */}
                    <button className='border rounded-md self-end p-3 text-white bg-yellow-500' onClick={handleSubmit}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateModal