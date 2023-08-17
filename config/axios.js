import axios from "axios";

let clientAxios = ({});
clientAxios = axios.create({
    baseURL: 'https://bff2-2806-2f0-90e1-5828-40e7-5670-3516-6233.ngrok-free.app',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});

export default clientAxios;
