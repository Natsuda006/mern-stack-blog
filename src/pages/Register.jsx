import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import { UserContext } from "../context/UserContext";
import Swal from "sweetalert2";
const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser((user) => ({ ...user, [name]: value }));
  };
  const handleSubmit = async () => {
    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error",
        text: "Username or Password cannot be empty!",
        icon: "error",
      });
    } else {
      const response = await AuthService.register(user.username, user.password);
      // console.log(response);
      if (response?.status === 201) {
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
        }).then(() => {
          navigate("/login");
        });
      }
    }
  };
  return (
    <div className="card bg-base-100 w-[500px] shadow-sm">
      <div className="card-body p-10 space-y-6">
        <h2 className="card-title justify-center text-3xl font-bold text-primary">Register</h2>
        <div>
          <label className="label p-0 mb-1">
            <span className="text-base label-text font-semibold">Username</span>
          </label>
          <input
            type="text"
            placeholder="Enter your username"
            className="w-full input input-bordered"
            name="username"
            onChange={handleChange}
            value={user.username}
          />
        </div>
        <div>
          <label className="label p-0 mb-1">
            <span className="text-base label-text font-semibold">Password</span>
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full input input-bordered"
            name="password"
            onChange={handleChange}
            value={user.password}
          />
        </div>
        <button className="btn btn-primary w-full" onClick={handleSubmit}>
          Register
        </button>
      </div>
    </div>
  );
};

export default Register;
