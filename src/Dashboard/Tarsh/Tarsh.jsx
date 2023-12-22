import { useContext } from "react";
import useTrash from "../../Hooks/useTrash";
import TrashCard from "./TrashCard";
import { AuthContext } from "../../Provider/AuthContext";


const Tarsh = () => {
    const [trash,refetch] =useTrash()
    const {user}=useContext(AuthContext)
    const filter = trash.filter(item => item?.email == user?.email);
    return (
        <div className="container mx-auto">
            <h1 className="font-dmsnas font-bold text-2xl text-center">Trash Folder</h1>
            {
                filter.map(item=><TrashCard refetch={refetch} key={item._id} item={item} ></TrashCard>)
            }
        </div>
    );
};

export default Tarsh;