import axios from "./AxiosCustomize";

const getAllProduct = async () =>{
    try {
        const response = await axios.get('products')
        return response
    } catch (error) {
        console.log(error);
    }
}
const getDetail = async (id) =>{
    try {
        const response = await axios.get(`products/${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}

// const addProduct = async (name, price, des, cate, imgs) => {
//     const imgArray = Object.values(imgs);
//     try {
//         const imgUrls = imgArray.map(img => img.name);
//         const res = await axios.post('products', 
//             {
//                 "name": name,
//                 "price": price,
//                 "imgUrls": imgUrls,
//                 "description": des,
//                 "category":{
//                     "id": cate
//                 }
//             }
//         );
//         return res
//     } catch (error) {
//         console.log(error);
//     }
// }

const addProduct = async (name, price, des, cate, imgs) =>{
    const formData = new FormData();
    formData.append('product', new Blob([JSON.stringify({
        name: name,
        price: price,
        description: des,
        category: { id: cate }
    })], {
        type: 'application/json'
    }));

    for (let i = 0; i < imgs.length; i++) {
        formData.append('images', imgs[i]);
    }

    try {
        const res = await axios.post('/products', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log('Product added successfully', res.data);
        return res
    } catch (error) {
        console.error('Error adding product', error);
    }
}

const deleteProduct = async (id) =>{
    try {
        const response = await axios.delete(`products/${id}`)
        return response
    } catch (error) {
        console.log(error);
    }
}





export {getAllProduct, deleteProduct, addProduct, getDetail};