import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthenticationService from "../../services/authentication.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const Register = () => {
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

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
        const response = await AuthenticationService.register(user.username, user.password);
        if (response.status === 200) {
          Swal.fire({
            title: "Success",
            text: response?.data?.message || "Registration successful",
            icon: "success",
          }).then(() => {
            navigate("/login");
          });
        }
      } catch (error) {
        Swal.fire({
          title: "Registration Failed",
          text: error.response?.data?.message || "registration failed. Please try again.",
          icon: "error"
        });
      }
    }
  };

  return (
    <div className="flex justify-center items-center py-8 min-h-[60vh]">
      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">
          ลงทะเบียน
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
              placeholder="กรอกชื่อผู้ใช้ที่ต้องการ"
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
              placeholder="อย่างน้อย 6 ตัวอักษร"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-medium text-lg shadow-md hover:shadow-lg"
          >
            สมัครสมาชิก
          </button>
        </form>

        <div className="mt-6 text-center text-gray-600 text-sm">
          มีบัญชีแล้วใช่ไหม?{" "}
          <a href="/login" className="text-blue-600 hover:underline font-semibold">
            เข้าสู่ระบบ
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
