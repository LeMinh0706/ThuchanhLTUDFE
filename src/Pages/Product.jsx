import React, { useEffect, useState } from 'react'
import { getAllProduct } from '../Service/ProductService'
import ProductCard from '../Components/ProductCard'
import AddProduct from '../Components/AddProduct'

const Product = () => {

    const [list, setList] = useState([])


    useEffect(() => {
        getProduct()
        // console.log(list);
    }, [])

    const getProduct = async () => {
        try {
            const res = await getAllProduct();
            console.log(res.data);
            setList(res.data)
            // console.log(list);
            // console.log(list[0].category.name);
            // console.log(list[1].imgUrls[0]);
            // console.log(res.data.imgUrls);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='flex flex-col items-center justify-center pt-24 gap-3'>
                <h1 className='text-2xl font-medium'>PRODUCT</h1>
                <AddProduct></AddProduct>
                <div className='flex gap-6 flex-wrap w-1/2 justify-between'>
                    {list.map((item) => (
                        <ProductCard
                            key={item.id}
                            src={item.imgUrls[0]}
                            name={item.name}
                            category={item.category.name}
                            des={item.description}
                            price={item.price}
                        ></ProductCard>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Product