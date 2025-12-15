import React, { useState } from "react";
import DOMPurify from "dompurify";

const PostDetail = () => {
  const [post] = useState({
    id: 1,
    title: "หินพิซซ่า คืออะไร รู้จักคำศัพท์ยอดฮิตที่มาจาก TikTok",
    cover:
      "https://s.isanook.com/ns/0/ud/1972/9861118/pizza.jpg?ip/crop/w1200h700/q80/webp",
    author: "s.isanook",
    createdAt: "08 ธ.ค. 68 (14:32 น)",
    content: `
      <p>
        ในช่วงที่ผ่านมา เทรนด์การพกหินมงคลเพื่อเสริมพลังบวกกำลังมาแรงมาก
        โดยเฉพาะใน TikTok ที่ "พิซซ่า (@pizzanaraa)" โด่งดังขึ้นมาจากคลิป
        ให้กำลังใจคนดูแบบน่ารัก ๆ จนกลายเป็นคำฮิตว่า "หินพิซซ่า"
      </p>

      <p>
        ผู้คนแซวกันว่า หากพก "หินพิซซ่า" ติดตัว จะช่วยเพิ่มพลังใจดี ๆ
        และทำให้สามารถต่อสู้กับวันที่เหนื่อยล้าได้เหมือนที่พิซซ่าบอกไว้
      </p>

      <p>
        เทรนด์นี้กลายเป็นไวรัล และมีผู้คนจำนวนมากแชร์ประสบการณ์ว่าพอพกหินแล้ว
        ทำให้รู้สึกดีขึ้นจริง ๆ เพราะเกิดจากแรงสนับสนุนทางใจ
      </p>
    `,
  });

  return (
    <div className="w-full bg-base-100 pb-12">
      {/* Cover Image */}
      <div className="w-full h-[350px] md:h-[480px] overflow-hidden">
        <img
          src={post.cover}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="max-w-3xl mx-auto px-5 mt-10">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold leading-snug">
          {post.title}
        </h1>

        {/* Author info */}
        <div className="flex items-center text-gray-500 mt-4 gap-2">
          <span className="font-medium">{post.author}</span>
          <span className="text-gray-400">•</span>
          <span>{post.createdAt}</span>
        </div>

        {/* Separator */}
        <div className="border-b mt-6 mb-8"></div>

        {/* Content */}
        <div
          className="prose prose-lg max-w-none leading-8 text-gray-800"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content),
          }}
        ></div>
      </div>
    </div>
  );
};

export default PostDetail;
