import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDetail } from '../Service/ProductService'
import UpdateModal from '../Components/UpdateModal'

const ProductDetail = () => {

    const param = useParams()
    const [product, setProduct] = useState({})
    const [category, setCategory] = useState()
    const [cate, setCate] = useState()
    const [image, setImage] = useState([])
    const thisid = param.id

    useEffect(() => {
        detailProduct()
    }, [])
    // console.log(Number(param.id));
    const detailProduct = async () => {
        try {
            const res = await getDetail(param.id)
            // console.log(res);
            setProduct(res.data)
            setCategory(res.data.category.name)
            setCate(res.data.category.id)
            setImage(res.data.imgUrls)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='flex flex-col gap-10 w-full items-center justify-center pt-24'>
            <div className='w-1/3 flex flex-col gap-10'>
                <h1 className='text-center text-3xl font-bold uppercase text-green-500 border-b-2 p-3'>{product.name}</h1>
                <p className='text-lg font-medium'>Loại: {category}</p>
                <p className='text-lg font-medium'>Giá: {product.price}$</p>
                <div className='flex flex-wrap gap-10'>
                    {image.map((item, index) => (
                        <div key={index}>
                            <img className='w-[180px] h-[180px] object-cover' src={`http://localhost:8080${item}`} alt="" />
                        </div>
                    ))}
                </div>
                <p className='text-gray-400 text-lg font-medium border-t-2 p-3'>Mô tả: {product.description}</p>
            </div>
            <UpdateModal
                name={product.name}
                price={product.price}
                category={cate}
                description={product.description}
                Detail={detailProduct}
                id={thisid}
            ></UpdateModal>
        </div>
    )
}

export default ProductDetail