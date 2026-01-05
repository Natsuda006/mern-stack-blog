import { useState } from "react";

const PostDetail = () => {
  const [post, setPost] = useState({
    tile: "กระทรวงมหาดไทยออสเตรเลียเตรียมยกระดับการใช้ Generative AI กับเอกสารระดับปกปิด",
    createdAt: " 8 December 2025 - 10:37",
    author: " lew ",
    content:
      "กระทรวงมหาดไทยออสเตรเลีย (Department of Home Affairs) เตรียมปรับระดับการอนุญาตให้ใช้งานบริการ generative AI จากเดิมกำหนดไว้ให้ใช้งานกับเอกสารระดับทางการ (official) เท่านั้น ให้สามารถใช้งานกับเอกสารระดับปกปิด (protected) ได้ด้วย แม้จะมีการปรับระดับการอนุญาตใช้งาน แต่ออสเตรเลียก็ยังคงมีแนวทางกำหนดการใช้งานเป็นกรอบ คือ Hosting Certification Framework ซึ่งกรอบนี้บังคับว่าเอกสารระดับปกปิดทั้งหมด จะต้องใช้บริการจากผู้ให้บริการที่ได้รับการรับรองเท่านั้น โดยครอบคลุมการรับรองตั้งแต่ระดับศูนย์ข้อมูลไปจนถึงผู้ให้บริการคลาวด์ ปัจจุบัน ผู้ให้บริการหลักอย่าง OpenAI, Anthropic, และ Google ต่างผ่านการรับรองแล้ว ตอนนี้แนวทางการปรับระดับยังอยู่ระหว่างการพูดคุยกับผู้ให้บริการ มีผู้ให้บริการมาพูดคุยกับทางกระทรวงถึงรายละเอียดเกณฑ์การให้บริการแล้วกว่า 80 ราย ก่อนแนวทางใหม่จะออกใช้งานจริงรัฐบาลออสเตรเลียเตรียมใช้งาน AI ค่อนข้างมาก ก่อนหน้านี้มีการประกาศแนวทางว่าพนักงานรัฐทุกคนควรมีบริการ generative AI ใช้งานในเครื่องได้โดยตรง และหน่วยงานต่างๆ ต้องมี chief AI officer ประจำหน่วยภายในกลางปีหน้า ที่มา - IT News",
  });

  return (
    <div className="post-page min-h-full min-w-full items-center justify-center p-4 pt-20">
      <div className="bg-white p-8 rounded-b-lg shadow-lg max-4xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-grey-800">{post.tile}</h1>
        <div className="text-grey-600 mb-4 text-center">
          <time className="block mb-2">{post.createdAt}</time>
          <div className="author mb-2">
            By <span className="text-blue-500">@{post.author}</span>
          </div>
        </div>
        <div className="content text-grey-700">
          {post.content}
          <img
            className="flex items-center justify-center"
            src="https://www.blognone.com/sites/default/files/news-feature-image/2025/2025-12/gemini_generated_image_p9zo4sp9zo4sp9zo.jpg"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
