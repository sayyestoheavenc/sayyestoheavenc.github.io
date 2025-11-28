import React from "react";

const Header: React.FC = () => (
  <header className="main-header">
    <a
      href="https://www.threads.com/@say.yes.to.heaven.c"
      target="_blank"
      rel="noopener noreferrer"
      className="header-link-wrapper"
    >
      <img
        src="https://res.cloudinary.com/dfzjtpp8f/image/upload/c_fill,w_100,h_100/v1764140180/threads_icon_ztsrsl.png"
        className="threads-icon"
      />
      <h1 className="site-title">Caroline&apos;s Picks</h1>
    </a>
    <a href="#about" className="text-sm text-slate-700 underline">
  關於我
</a>
  </header>
);

export default Header;
