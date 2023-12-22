import axios from "axios";

export const axiosUrl = axios.create({
    baseURL:'http://localhost:3000/'
})
const useUrl = () => {
   return axiosUrl
};

export default useUrl;