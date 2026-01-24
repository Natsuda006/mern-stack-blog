import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { logIn, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
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
      const response = await AuthService.login(user.username, user.password);
      // console.log(response);
      if (response?.status === 200) {
        Swal.fire({
          title: "Success",
          text: response?.data?.message,
          icon: "success",
        }).then(() => {
          logIn({
            id: response.data.id,
            username: response.data.username,
            accessToken: response.data.accessToken,
          });
          navigate("/");
        });
      }
    }
  };
  return (
    // <form onSubmit={handleSubmit}>
    <div className="card bg-base-100 w-[500px] shadow-sm">
      <div className="card-body p-10 space-y-6">
        <h2 className="card-title justify-center text-3xl font-bold text-primary">Login</h2>
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
          Login
        </button>
      </div>
    </div>
    // </form>
  );
};

export default Login;
