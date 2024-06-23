import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:8080/api/',
    timeout: 1000
})

instance.interceptors.response.use(function (response) {
    // console.log("itercepter: ", response);

    return response;
}, function (error) {

    let res = error.request;

    if (error.reponse) {
        res.data = error.reponse.data;
        res.status = error.reponse.status;

    } else if (error.request) {
        console.log(error.request);
    } else {
        console.log("Error: ", error.message);
    }
    return res;
});

export default instance;