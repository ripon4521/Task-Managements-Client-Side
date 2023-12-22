// import { GiCampfire } from "react-icons/gi";

import { useForm } from "react-hook-form";
import fire from "../../assets/Task/image-removebg-preview (1).png";
import { CiCirclePlus } from "react-icons/ci";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { axiosUrl } from "../../Hooks/useUrl";
import { AuthContext } from "../../Provider/AuthContext";

const AddTask = () => {
    const {user} = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [data, setData] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const date = {
    selectedDate,
  };

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();



  const optionsData = [
    { value: "Low", label: "Low" },
    { value: "Midium", label: "Midim" },
    { value: "High", label: "High" },
    // Add more options as needed
  ];
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //   console.log(selectedOption);
//   console.log(info);

  const onSubmit = (data) => {
    const info = {
        taskname:data.taskName,
        description:data.description,
        selectedDate,
        selectedOption,
        email: user?.email
      };

    axiosUrl.post('/alltask',info)
    .then(res=> {
        if (res.data.acknowledged == true) {
          Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500
            });
            window.location.reload();
            setData(data);
        }else{
          return alert('SSomething Went Erong')
        }
    })
  
    
  };
 


  
  return (
    <div>
      <div className="flex items-center justify-center ">
        <img className="w-16" src={fire} alt="" />
        <h1 className="text-2xl flex gap-2 items-center font-dmsnas font-semibold">
          Add Task
          <span>
            <CiCirclePlus
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="text-2xl text-red-600 cursor-pointer"
            />
          </span>
        </h1>
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
                className="input  input-bordered input-success w-full max-w-xs"
                required
              />
                {errors.taskName && <span>This field is required</span>}
              <input
                {...register("description",{ required: true })}
                type="text"
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
                  Send
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
      </div>
      <hr />
    </div>
  );
};

export default AddTask;
