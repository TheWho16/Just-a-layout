import React from "react";

const Header = () => {
  let slowScroll = () => {
    console.log("scroll");
  };

  return (
    <>
      <header>
        <div id="logo">
          <span>Just a layout</span>
        </div>
        <div id="about">
          <a href="#" title="Opportunities" onClick={slowScroll}>
            Opportunities
          </a>
          <a href="#" title="Advantages" onClick={slowScroll}>
            Advantages
          </a>
          <a href="#" title="Contacts" onClick={slowScroll}>
            Contacts
          </a>
          <a href="#" title="FAQ" onClick={slowScroll}>
            FAQ
          </a>
        </div>
      </header>
    </>
  );
};

export default Header;
