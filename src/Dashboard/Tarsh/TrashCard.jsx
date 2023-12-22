import { CiTrash } from "react-icons/ci";
import { RiDeviceRecoverFill } from "react-icons/ri";
import { axiosUrl } from "../../Hooks/useUrl";
import Swal from "sweetalert2";
const TrashCard = ({item,refetch}) => {
   

    const handleDelete = (item)=>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                axiosUrl.delete(`/trash/${item?._id}`)
          .then(res=>{
            if (res.data.deletedCount > 0) {
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
              
                  refetch()
      
            }
           
          })
            } else{
                alert ('Something Went Wrong')
            }
          });
        
      
    }





    return (
        <div>
             <article className="rounded-xl font-dmsnas cursor-pointer mt-5 border-2 border-gray-100 bg-white">

<div className="flex items-start gap-4 p-4 sm:p-6 lg:p-8">

  <div>
      
    <h3 className="font-medium sm:text-lg">
      <a href="#" className="hover:underline font-dmsnas font-semibold">{item.taskname}</a>
    </h3>

    <p className="line-clamp-2 text-sm text-gray-700">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, accusantium temporibus
      iure delectus ut totam natus nesciunt ex? Ducimus, enim.
    </p>
<div className="flex items-center gap-5 mt-5">
  <button className="font-dmsnas text-xl text-white bg-violet-800 rounded-lg border p-2"><RiDeviceRecoverFill /></button>
  <button onClick={()=>handleDelete(item)} className="font-dmsnas font-bold text-[20px] text-white bg-red-600 rounded-lg border p-2"><CiTrash /></button>
 
</div>
  </div>
</div>


<div className="flex justify-end">
  <strong
    className="-mb-[2px] -me-[2px] inline-flex items-center gap-1 rounded-ee-xl rounded-ss-xl bg-green-600 px-3 py-1.5 text-white"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
      />
    </svg>

    <span className="text-[10px] font-medium sm:text-xs">{item.selectedOption}</span>
  </strong>
</div>

</article>
        </div>
    );
};

export default TrashCard;