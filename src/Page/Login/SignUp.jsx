import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import { useForm } from "react-hook-form";
import { MdDriveFileRenameOutline } from "react-icons/md";
import Swal from "sweetalert2";

const SignUp = () => {
  const { user, googleLogin,createUser } = useContext(AuthContext);
  // const location = useLocation();
  const from = "/";
  const navigate = useNavigate();
  const fa = (
    <>
      {" "}
      <MdDriveFileRenameOutline></MdDriveFileRenameOutline>{" "}
    </>
  );

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
    .then(result => {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your account created successfull",
        showConfirmButton: false,
        timer: 1500,
        
      });
      navigate(from, { replace: true });
      console.log(result);
    })
    .then(error => {
      console.log(error);
    })
  };

  const handleGoogleLogin = () => {
    googleLogin();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your account created successfull",
      showConfirmButton: false,
      timer: 1500,
      
    });
    navigate(from, { replace: true });
  };

  return (
    <section>
      <Helmet>
        <title>Beress||SignUp</title>
      </Helmet>
      {/* Container */}
      <div className="py-16 md:py-24 lg:py-32">
        {/* Component */}
        <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10">
          {/* Title */}
          <h2 className="text-3xl font-bold md:text-5xl">
            Start 14-day free trial
          </h2>
          <p className="mx-auto mb-5 mt-4 max-w-xl text-[#647084] md:mb-8">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,
            purus sit amet luctus magna fringilla urna
          </p>
          {/* Button */}
          <a
            onClick={handleGoogleLogin}
            href="#"
            className="mx-auto flex max-w-sm justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition shadow-[rgb(171,196,245)]-8px-8px hover:shadow-[rgb(171,196,245)]-0px-0px"
          >
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f19d23637f876_GoogleLogo.svg"
              alt=""
              className="mr-4"
            />
            <p className="font-bold">Sign up with Google</p>
          </a>
          {/* Divider */}
          <div className="mx-auto mb-14 mt-14 flex max-w-sm justify-around">
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
              alt=""
              className="inline-block"
            />
            <p className="text-sm text-[#647084]">or sign up with email</p>
            <img
              src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358f3d7490d1b3d86cf9442_Line%203.svg"
              alt=""
              className="inline-block"
            />
          </div>
          {/* Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mx-auto mb-4 max-w-sm pb-4"
            name="wf-form-password"
            method="get"
          >
            <input
              {...register("name",{ required: true })}
            
              className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
              type="text"
              placeholder="Name"
             
            />
              {errors.name && <span className="text-red-600">This field is required</span>}
            <input
              {...register("email" ,{ required: true })}
              className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
              type="email"
              placeholder="Email Address"
        
            />
             {errors.email && <span className="text-red-600">This field is required</span>}
            <input
              className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
              {...register("password" ,{ required: true })}
              type="password"
              placeholder="Password"
             
            />
             {errors.password && <span className="text-red-600">This field is required</span>}
        
            <button className="btn btn-primary">Sign Up</button>
          </form>
          <p className="text-sm text-[#636262]">
            Alrady have an account?{" "}
            <Link
              to="/login"
              className="font-[Montserrat,_sans-serif] text-sm font-bold text-black"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

const FormInput = ({ src, type, placeholder, required }) => {
  return (
    <div className="relative mb-4 pb-2">
      <img
        alt=""
        src={src}
        className="absolute bottom-0 left-[5%] right-auto top-[26%] inline-block"
      />
      <input
        type={type}
        className="mb-4 block h-9 w-full border border-black bg-white px-3 py-6 pl-14 text-sm text-[#333333]"
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
};

const SignUpButton = () => {
  return (
    <a
      href="#"
      className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-[#276ef1] px-8 py-4 text-center font-semibold text-white transition shadow-[rgb(171,196,245)]-8px-8px hover:shadow-[rgb(171,196,245)]-0px-0px"
    >
      <p className="mr-6 font-bold">Join Flowspark</p>
      <div className="h-4 w-4 flex-none">
        <svg
          fill="currentColor"
          viewBox="0 0 20 21"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Arrow Right</title>
          <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
        </svg>
      </div>
    </a>
  );
};

export default SignUp;
