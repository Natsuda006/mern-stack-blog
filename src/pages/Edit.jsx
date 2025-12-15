import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const mockPosts = [
  {
    id: 1,
    title: "หินพิซซ่า คืออะไร",
    cover: "https://",
    author: "s.isanook",
    summary: "คำศัพท์ยอดฮิต...",
    content: "เนื้อหาจริง..."
  },
  {
    id: 2,
    title: "7 สายงาน...",
    cover: "https://",
    author: "s.isanook",
    summary: "AI จะเข้ามาแทนที่...",
    content: "เนื้อหาจริง..."
  }
];

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const postToEdit = mockPosts.find((p) => p.id === Number(id));

  const [data, setData] = useState({
    title: "",
    cover: "",
    author: "",
    summary: "",
    content: "",
  });

  useEffect(() => {
    if (postToEdit) {
      setData(postToEdit);
    }
  }, [postToEdit]);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Post updated:", data);

    alert("แก้ไขโพสต์เรียบร้อย!");
    navigate("/");
  };

  if (!postToEdit)
    return <div className="text-center py-20 text-red-500">ไม่เจอโพสต์นี้นะ</div>;

  return (
    <div className="max-w-3xl mx-auto p-6">

      <h1 className="text-3xl font-bold mb-6">แก้ไขโพสต์</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          value={data.title}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="cover"
          value={data.cover}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <input
          type="text"
          name="author"
          value={data.author}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg"
        />

        <textarea
          name="summary"
          value={data.summary}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg h-24"
        ></textarea>

        <textarea
          name="content"
          value={data.content}
          onChange={handleChange}
          className="w-full border p-3 rounded-lg h-40"
        ></textarea>

        <button
          type="submit"
          className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
        >
          บันทึกการแก้ไข
        </button>
      </form>

    </div>
  );
};

export default Edit;
