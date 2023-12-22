import { useQuery } from "react-query";
import useUrl from "./useUrl";



const useTrash = () => {
const axiosUrl = useUrl();

   
    const { refetch , data:trash = []}=useQuery({
        queryKey:['trash'],
        queryFn: async() =>{
            const res = await axiosUrl.get(`/trash`);
            return res.data;
        
        }
    })

    return [trash , refetch]
};

export default useTrash;