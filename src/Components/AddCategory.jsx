import React, { useState } from 'react'
import { addCategory } from '../Service/CategoryService'

const AddCategory = ({ getAll }) => {

    const [category, setCategory] = useState('')

    const handleOnChange = (e) => {
        setCategory(e.target.value)
    }
    const handleSubmit = async () => {
        try {
            const res = await addCategory(category)
            console.log(res);
            setCategory('')
            getAll()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='flex flex-col w-1/3 p-3 drop-shadow-lg bg-white mb-6 gap-5 border-2 rounded-md'>
            <h2 className='text-xl font-semibold text-center'>ADD CATEGORY</h2>
            <label className='text-lg font-medium text-gray-500' htmlFor="category">Category:</label>
            <input className='p-3 border-2 rounded-md' type="text" onChange={handleOnChange} id='category' value={category} />
            <button className='p-3 bg-green-600 text-white text-lg rounded-md self-end w-[140px]' onClick={handleSubmit}>
                Add category
            </button>
        </div>
    )
}

export default AddCategory