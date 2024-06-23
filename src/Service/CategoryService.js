import axios from "./AxiosCustomize";


const getAllCategories = async () =>{
    try {
        const res = await axios.get('categories')
        return res
    } catch (error) {
        console.log(error);
    }
}

const addCategory = async (cateName) =>{
    try {
        const res = await axios.post('categories',
            {
                name: cateName,
            },
        );
        return res
    } catch (error) {
        console.log(error);
    }
}

const deleteCategory = async (id) =>{
    try {
        const res = await axios.delete(`categories/${id}`)
        return res
    } catch (error) {
        console.log(error);
    }
}

const updateCategory = async (id, catename) =>{
    try {
        const res = await axios.put(`categories/${id}`, 
            {
                name: catename
            },
        );
        return res
    } catch (error) {
        console.log(res);
    }
}

export{getAllCategories, addCategory, deleteCategory, updateCategory}