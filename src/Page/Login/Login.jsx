import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const {sighnIn} = useContext(AuthContext)
    const from = "/";
    const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    sighnIn(data.email, data.password)
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
    console.log(data);
  };
  return (
    <div>
      <Helmet>
        <title>Beress||Login</title>
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form   onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                   {...register("email",{ required: true })}
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
               
                />
                 {errors.name && <span className="text-red-600">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password",{ required: true })}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
               
                />
                      {errors.name && <span className="text-red-600">This field is required</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Don`t have a account?{" "}
                    <span>
                      <Link to="/signup" className="text-red-500">
                        Register
                      </Link>
                    </span>
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
