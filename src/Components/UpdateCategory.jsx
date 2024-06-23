import React, { useState } from 'react'

const UpdateCategory = ({ closeModal, id, name, getAll, update }) => {

    const [text, setText] = useState(name)
    console.log(text);

    const handleTextChange = (e) => {
        setText(e.target.value)
    }

    const updateCate = async () => {
        try {
            const res = await update(id, text)
            console.log(res);
            getAll()
            closeModal()
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='fixed inset-0 flex items-center justify-center bg-opacity-50'>
            <div className="bg-white p-6 rounded shadow-lg w-1/4">
                <input className='p-3 border w-full rounded-md' type="text" onChange={handleTextChange} value={text} />
                <div className='flex justify-end gap-3 mt-3'>
                    <button className='border rounded-md self-end p-3 text-white bg-red-500' onClick={closeModal}>Close</button>
                    <button className='border rounded-md self-end p-3 text-white bg-yellow-500' onClick={updateCate}>Submit</button>
                </div>

            </div>
        </div>
    )
}

export default UpdateCategory