import { useQuery } from "react-query";
import useUrl from "./useUrl";



const useComplete = () => {
const axiosUrl = useUrl();

   
    const { refetch , data:complete = []}=useQuery({
        queryKey:['complete'],
        queryFn: async() =>{
            const res = await axiosUrl.get(`/complete`);
            return res.data;
        
        }
    })

    return [complete , refetch]
};

export default useComplete;