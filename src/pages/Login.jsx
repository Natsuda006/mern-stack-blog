import { useState, useContext ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const { logIn, userInfo } = useContext(UserContext);

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user.username || !user.password) {
      Swal.fire({
        title: "Error!",
        text: "Username and Password cannot be empty.",
        icon: "error",
      });
    } else {
      try {
        const response = await AuthenticationService.login(user.username, user.password);
        if (response.status === 200) {
          Swal.fire({
            title: "Success",
            text: response?.data?.message || "Login successful",
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
      } catch (error) {
        Swal.fire({
          title: "Login Failed",
          text: error.response?.data?.message || `Error: ${error.response?.status || "Unknown"}`,
          icon: "error"
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center py-8 min-h-[60vh]">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">

        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          เข้าสู่ระบบ
        </h1>

        <form onSubmit={handleSubmit}>

          {/* Username */}
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              ชื่อผู้ใช้
            </label>
            <input
              id="username"
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              placeholder="กรอกชื่อผู้ใช้"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Password */}
          <div className="mb-8">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-2"
            >
              รหัสผ่าน
            </label>
            <input
              id="password"
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              placeholder="กรอกรหัสผ่าน"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg shadow-md hover:shadow-lg"
          >
            เข้าสู่ระบบ
          </button>

        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          ยังไม่มีบัญชีใช่ไหม?{" "}
          <a href="/register" className="text-blue-600 hover:underline font-semibold">
            สมัครสมาชิก
          </a>
        </div>

      </div>
    </div>
  );
};

export default Login;
