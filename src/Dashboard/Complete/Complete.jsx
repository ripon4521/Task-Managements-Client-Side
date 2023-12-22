import { useContext } from "react";
import useComplete from "../../Hooks/useComplete";
import CompletCard from "./CompletCard";
import { AuthContext } from "../../Provider/AuthContext";

const Complete = () => {
    const [complete,refetch]=useComplete()
    // console.log(complete);
    const {user}=useContext(AuthContext)
    const filter = complete.filter(item => item?.email == user?.email);
    return (
        <div>
            <h1 className="text-2xl font-dmsnas font-bold text-center text-yellow-400">Complete Task</h1>
            {
                filter.map(item=><CompletCard key={item._id} item={item}></CompletCard>)
            }
        </div>
    );
};

export default Complete;