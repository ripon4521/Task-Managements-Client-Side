import { useQuery } from "react-query";
import useUrl from "./useUrl";



const useAllTask = () => {
const axiosUrl = useUrl();

   
    const { refetch , data:Alltask = []}=useQuery({
        queryKey:['Alltask'],
        queryFn: async() =>{
            const res = await axiosUrl.get(`/alltask`);
            return res.data;
        
        }
    })

    return [Alltask , refetch]
};

export default useAllTask;