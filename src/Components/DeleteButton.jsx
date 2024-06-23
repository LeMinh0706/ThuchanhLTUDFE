import React from 'react'

const DeleteButton = ({ getAll, deleteFunction, id }) => {

    const handleDelete = async (id) => {
        try {
            const res = await deleteFunction(id)
            console.log(res);
            getAll()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <button className='bg-red-700 text-white p-3 border rounded-md' onClick={() => handleDelete(id)}>
            Delete
        </button>
    )
}

export default DeleteButton