import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="mt-10 mb-6 text-center text-sm text-teal-800">
      <a
        href="https://sites.google.com/view/u-think-too-much-policy/%E9%A6%96%E9%A0%81"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        隱私權政策
      </a>
      <span className="mx-2">|</span>
      <a
        href="https://sites.google.com/view/u-think-too-much-disclaimer/%E9%A6%96%E9%A0%81"
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        免責聲明
      </a>
    </footer>
  );
};

export default Footer;
