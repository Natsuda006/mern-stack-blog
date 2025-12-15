import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/post";

const PostByAuthor = () => {
  const { id } = useParams(); // <--- id คือชื่อ author จาก URL เช่น s.isanook

  const [posts] = React.useState([
    {
      id: 1,
      title: "หินพิซซ่า คืออะไร รู้จักคำศัพท์ยอดฮิตที่มาจาก TikTok",
      cover: "https://s.isanook.com/ns/0/ud/1972/9861118/pizza.jpg?ip/crop/w1200h700/q80/webp",
      author: "s.isanook",
      createdAt: "08 ธ.ค. 68 (14:32 น)",
      summary: "คำศัพท์ยอดฮิตใน TikTok มาจากอินฟลูเอนเซอร์พิซซ่า..."
    },
    {
      id: 2,
      title: "7 สายงานจ่อ ตกงานหมู่ ในปีหน้า!",
      cover: "https://s.isanook.com/ns/0/ud/1971/9856086/new-thumbnail1200x720_v2(3).jpg?ip/crop/w1200h700/q80/webp",
      author: "s.isanook",
      createdAt: "16 พ.ย. 68 (16:03 น.)",
      summary: "AI จะเข้ามาแทนที่งานหลายสายงานภายในปีหน้า..."
    },
    {
      id: 3,
      title: "AI ยุคใหม่จะทำงานร่วมกับมนุษย์",
      cover: "https://images.unsplash.com/photo-1518770660439-4636190af475",
      author: "wuttha",
      createdAt: "05 Dec 2024",
      summary: "AI Agentic ทำงานร่วมกับมนุษย์เป็นเหมือนสมาชิกทีม..."
    },
  ]);

  // ❗ แก้ตรงนี้ — ใช้ id จาก useParams
  const filtered = posts.filter((post) => post.author === id);

  return (
    <div className="py-10 px-4 sm:px-6 lg:px-8 min-h-[80vh]">
      <div className="flex justify-center mb-8">
        <div className="px-6 py-4 rounded-2xl bg-white shadow-lg border border-gray-200">
          <h1 className="text-2xl font-bold">
            บทความทั้งหมดโดย: <span className="text-blue-600">{id}</span>
          </h1>
        </div>
      </div>

      {filtered.length === 0 && (
        <div className="text-center text-gray-500 text-lg py-20">
          ❗ ไม่พบบทความจากผู้เขียนนี้
        </div>
      )}

      <div className="max-w-4xl mx-auto space-y-6">
        {filtered.map((post, index) => (
          <Post key={post.id} postDetail={post} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PostByAuthor;
