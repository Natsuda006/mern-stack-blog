import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-gray-800 text-neutral-content rounded">
      <div>
        <p className="text-lg font-bold">© {new Date().getFullYear()} Software Engineering, NPRU. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
