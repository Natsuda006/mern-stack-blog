
import React, { useState } from "react";
import Post from "../components/post";

function Home() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "หินพิซซ่า คืออะไร รู้จักคำศัพท์ยอดฮิตที่มาจาก TikTok",
      cover: "https://s.isanook.com/ns/0/ud/1972/9861118/pizza.jpg?ip/crop/w1200h700/q80/webp",
      author: "s.isanook",
      createdAt: "08 ธ.ค. 68 (14:32 น)",
      summary: 'หินพิซซ่า คือคำศัพท์ที่มาจากแพลตฟอร์ม TikTok โดยมาจากอินฟลูเอนเซอร์ที่ชื่อว่า พิซซ่า (@pizzanaraa) ที่ครีเอตคอนเทนต์ในเชิงให้กำลังใจ เป็นพลังบวกให้กับผู้อื่น...'
    },
    {
      id: 2,
      title: "7 สายงานจ่อ ตกงานหมู่ ในปีหน้า! AI เล็งเสียบแทน เปิดคำทำนายนักลงทุนชื่อดัง",
      cover: "https://s.isanook.com/ns/0/ud/1971/9856086/new-thumbnail1200x720_v2(3).jpg?ip/crop/w1200h700/q80/webp",
      author: "s.isanook",
      createdAt: "16 พ.ย. 68 (16:03 น.)",
      summary: 'เมื่อพูดถึงการครองโลกของเครื่องจักร หลายคนอาจนึกถึงฉากในภาพยนตร์ Terminator ที่หุ่นยนต์ไร้ความปรานีเหยียบย่ำหัวกะโหลกมนุษย์ แต่ในความเป็นจริง การที่ AI (ปัญญาประดิษฐ์) จะเข้ามาแทนที่มนุษย์อาจเกิดขึ้นอย่างเงียบเชียบ ด้วยการค่อยๆ ดึงงานของเราไปทีละตำแหน่ง จนทุกคนต้องตกงานในที่สุด'
    },
  ]);

  return (
    <div className="flex flex-col space-y-4">
      {posts.map((post,index) => (
        <Post postDetail={post}index={index} key={post.id}  />
      ))}
    </div>
  );
}

export default Home;
