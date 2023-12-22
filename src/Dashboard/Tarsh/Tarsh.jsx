import useTrash from "../../Hooks/useTrash";
import TrashCard from "./TrashCard";


const Tarsh = () => {
    const [trash,refetch] =useTrash()
    return (
        <div className="container mx-auto">
            <h1 className="font-dmsnas font-bold text-2xl text-center">Trash Folder</h1>
            {
                trash.map(item=><TrashCard refetch={refetch} key={item._id} item={item} ></TrashCard>)
            }
        </div>
    );
};

export default Tarsh;