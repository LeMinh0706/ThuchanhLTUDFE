import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ src, id, name, des, category, price, index, getAll, del }) => {


    const deleteProduct = async () => {
        try {
            await del(id)
            getAll()
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='border-2 drop-shadow-md bg-white w-[280px] h-[440px] p-2 rounded-md'>
            {src === null ?
                <img src="http://camenryder.xyz/public/img/logo_web_app.png" className='w-full p-3 h-[200px] object-cover' alt="" />
                :
                <img src={`http://localhost:8080${src}`} className='w-full p-3 h-[200px] object-cover' alt="" />
            }
            <div className='flex flex-col gap-3 border-b'>
                <Link to={`/${id}`}>
                    <p className='text-center font-semibold text-2xl'>{name}</p>
                </Link>
                <p>Danh mục: {category}</p>
                <p>Mô tả: {des}</p>
                <p className='text-end font-medium'>Giá: {price}</p>
            </div>
            <div className='p-2 flex justify-between'>
                <button className='bg-green-500 text-white py-3 px-6 font-medium'>Sửa</button>
                <button className='bg-red-600 text-white py-3 px-6 font-medium' onClick={deleteProduct}>Xóa</button>


            </div>
        </div>
    )
}

export default ProductCard