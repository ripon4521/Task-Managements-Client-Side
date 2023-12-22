import { CiTrash } from "react-icons/ci";
import { FaPen } from "react-icons/fa";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { axiosUrl } from "../../../Hooks/useUrl";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../Provider/AuthContext";
import { useLoaderData } from "react-router-dom";



const TodoCard = ({item, refetch}) => {
    // const loader =useLoaderData()
    const {user} = useContext(AuthContext)
  
    
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedOption, setSelectedOption] = useState("");
    const handleDateChange = (date) => {
        setSelectedDate(date);
      };
    
    

    const handleSelectChange = (event) => {
  
      setSelectedOption(event.target.value);
  
    };
    
  const optionsData = [
    { value: "Low", label: "Low" },
    { value: "Midium", label: "Midim" },
    { value: "High", label: "High" },
    // Add more options as needed
  ];
 
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();



    const onSubmit =(data, item)=>{
        const taskname = data.taskName;
        const description = data.description;
       
          const update = {
            taskname,
            description,
            selectedDate,
            selectedOption,
           
        }

        axiosUrl.put(`/alltask/${item._id}`,update )
        .then(res=>{
            console.log('success');
        })

        
                   
           

    }


const handleComplete=(item)=>{

    axiosUrl.post('/complete', item)
    .then(res=> {
        if (res.data.acknowledged == true) {
            Swal.fire({
                title: "Tarsh!",
                text: "Your Todo has been Complete.",
                icon: "success" })
         axiosUrl.delete(`/alltask/${item?._id}`)
         .then(res=>{
                 if (res.data.deletedCount > 0) {
                   
     
     
                       refetch()
                     }})
          refetch()
        }else{
            console.log('Something Went Wrong');
        }
    })
}

const handleTrash=(item)=>{

    axiosUrl.post('/trash', item)
    .then(res=> {
        if (res.data.acknowledged == true) {
            Swal.fire({
                title: "Tarsh!",
                text: "Your file has been Tarsh.",
                icon: "success" })
         axiosUrl.delete(`/alltask/${item?._id}`)
         .then(res=>{
                 if (res.data.deletedCount > 0) {
                   
     
     
                       refetch()
                     }})
          refetch()
        }else{
            console.log('Something Went Wrong');
        }
    })
}













  return (
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
        <button onClick={() => document.getElementById("my_modal_5").showModal()} className="font-dmsnas text-xl text-white bg-violet-800 rounded-lg border p-2"><FaPen /></button>

        <dialog id="my_modal_5" className="modal modal-center sm:modal-middle">
          <from onSubmit={handleSubmit(onSubmit)} className="modal-box">
            <h3 className="text-2xl font-dmsnas font-bold text-center">
              Add Task
            </h3>
            <div className="md:pl-16  mt-4">
              <input
                {...register("taskName",{ required: true })}
                type="text"
                placeholder="Task Name"
                defaultValue={item?.taskname}
                className="input  input-bordered input-success w-full max-w-xs"
                required
              />
                {errors.taskName && <span>This field is required</span>}
              <input
                {...register("description",{ required: true })}
                type="text"
                defaultValue={item?.description}
                placeholder="Description"
                className="input mt-2 h-16 input-bordered input-success w-full max-w-xs"
              />
                {errors.description && <span>This field is required</span>}
              <div className="md:pl-10 pl-0">
              <div>
                <label htmlFor="selectOption">Set Your Pririty</label>
                <select
                  id="selectOption"
                  value={selectedOption}
                  onChange={handleSelectChange}
                >
                  <option value="" disabled></option>
                  {optionsData.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            </div>
           

            <div className="modal-action">
              <form className="flex gap-5" method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="px-3 py-2 bg-red-600 text-white font-dmsnas font-semibold rounded-lg">
                  Update
                </button>
              </form>
             
            </div>
          </from>
          
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </dialog>



        <button  onClick={()=>handleComplete(item)}  className="font-dmsnas text-[20px] text-white bg-yellow-600 rounded-lg border p-2"><IoCheckmarkDoneSharp /></button>
        <button onClick={()=>handleTrash(item)} className="font-dmsnas font-bold text-[20px] text-white bg-red-600 rounded-lg border p-2"><CiTrash /></button>
       
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
  );
};

export default TodoCard;
