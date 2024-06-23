import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllCategories, updateCategory } from '../Service/CategoryService'
import AddCategory from '../Components/AddCategory'
import DeleteButton from '../Components/DeleteButton'
import UpdateCategory from '../Components/UpdateCategory'

const Category = () => {

    const [list, setList] = useState([])
    const [open, setOpen] = useState(false)
    const [select, setSelect] = useState({ id: 0, name: '' })

    useEffect(() => {
        getCategories()
    }, [])

    const getCategories = async () => {
        try {
            const res = await getAllCategories();
            console.log(res);
            setList(res.data)
        } catch (error) {
            console.log(error);
        }
    }

    const openModal = (id, name) => {
        setOpen(true)
        setSelect({ id, name })
    }
    const closeModalUpdate = () => {
        setOpen(false)
    }

    const deleteCate = async (id) => {
        try {
            const res = await deleteCategory(id)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    const updateCate = async (id, name) => {
        try {
            await updateCategory(id, name)
            // console.log(res);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <div className='flex flex-col items-center justify-center pt-24'>
            <h1 className='text-2xl font-medium mb-3'>CATEGORY</h1>
            <AddCategory getAll={getCategories}></AddCategory>
            <table className='w-1/4'>
                <thead>
                    <tr>
                        <th className='text-center border text-lg p-3'>ID </th>
                        <th className='text-center border text-lg p-3'>Name</th>
                        <th className='text-center border text-lg p-3'>Action</th>

                    </tr>
                </thead>
                <tbody className='text-center'>
                    {list.map((item) => (
                        <tr key={item.id}>
                            <td className='border text-lg p-3'>{item.id}</td>
                            <td className='border text-lg p-3'>{item.name}</td>
                            <td className='border text-lg p-3 flex items-center justify-around'>
                                <DeleteButton getAll={getCategories} deleteFunction={deleteCate} id={item.id}>
                                </DeleteButton>
                                {open && (<UpdateCategory closeModal={closeModalUpdate} id={select.id} name={select.name} getAll={getCategories} update={updateCate}></UpdateCategory>)}
                                <button className='bg-green-700 text-white p-3 border rounded-md'
                                    onClick={() => openModal(item.id, item.name)}
                                >
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    )
}

export default Category