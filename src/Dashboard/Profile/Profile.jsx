import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Profile = () => {
    const {user, logout} =useContext(AuthContext)
    const from = "/";
    const navigate = useNavigate();
    // console.log(user?.photoURL);
    const handleLogout=()=>{
        logout()
        .then(result=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, { replace: true });
        })

    }
    return (
        <div>
              <div className="dropdown dropdown-center">
    <div className="flex items-center font-dmsnas gap-1 text-xl font-semibold btn btn-ghost">
    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
      
      <div className="flex g" >
          <img className="w-5 rounded-full" alt="Tailwind CSS Navbar component" src={user?.photoURL} />
         
        </div>
       
     
        
      </div>
      <h1 className=" font-semibold font-dmsnas">{user?.displayName}</h1>
    </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handleLogout}>Logout</a></li>
      </ul>
    </div>
        </div>
    );
};

export default Profile;