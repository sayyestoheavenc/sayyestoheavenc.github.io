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
        src="/assets/threads_icon.png"
        className="threads-icon"
      />
      <h1 className="site-title">Caroline&apos;s Picks</h1>
    </a>
  </header>
);

export default Header;
