// import { GiCampfire } from "react-icons/gi";
import fire from '../../../public/Task/image-removebg-preview (1).png'
import { CiCirclePlus } from "react-icons/ci";
const AddTask = () => {
    return (
        <div>
             <div className="flex items-center justify-center ">
            <img className="w-16" src={fire} alt="" />
            <h1  className="text-2xl flex gap-2 items-center font-dmsnas font-semibold">Add Task <span><CiCirclePlus className='text-2xl text-red-600 cursor-pointer' /></span></h1>
         
            </div>
            <hr />
        </div>
    );
};

export default AddTask;