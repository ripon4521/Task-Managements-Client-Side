import useComplete from "../../Hooks/useComplete";
import CompletCard from "./CompletCard";

const Complete = () => {
    const [complete,refetch]=useComplete()
    console.log(complete);
    return (
        <div>
            <h1 className="text-2xl font-dmsnas font-bold text-center text-yellow-400">Complete Task</h1>
            {
                complete.map(item=><CompletCard key={item._id} item={item}></CompletCard>)
            }
        </div>
    );
};

export default Complete;