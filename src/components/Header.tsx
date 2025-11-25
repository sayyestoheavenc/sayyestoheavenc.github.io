import React from "react";

const Header: React.FC = () => (
  <header className="flex items-center justify-between px-5 mb-6">
    <a
      href="https://www.threads.com/@say.yes.to.heaven.c"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-black no-underline"
    >
      <img
        src="images/threads_icon.png"
        alt="Threads 連結"
        className="h-10 rounded-lg mr-4 cursor-pointer"
      />
      <h1 className="text-4xl m-0 select-none font-bold">Caroline&apos;s Picks</h1>
    </a>
  </header>
);

export default Header;
