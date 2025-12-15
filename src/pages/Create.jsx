import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    title: "",
    cover: "",
    author: "",
    summary: "",
    content: "",
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post Created:", data);

    alert("สร้างโพสต์เรียบร้อย!");
    navigate("/"); // กลับหน้า Home
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">สร้างโพสต์ใหม่</h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          name="title"
          placeholder="หัวข้อบทความ"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="cover"
          placeholder="ลิงก์รูปภาพหน้าปก"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="author"
          placeholder="ชื่อผู้เขียน"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="summary"
          placeholder="สรุปเนื้อหา"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg h-24"
        ></textarea>

        <textarea
          name="content"
          placeholder="เนื้อหา"
          onChange={handleChange}
          className="w-full border p-3 rounded-lg h-40"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          สร้างโพสต์
        </button>

      </form>
    </div>
  );
};

export default Create;
