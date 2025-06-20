import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full px-8 py-4 bg-gradient-to-b from-black z-10">
      <img
        className="w-36 md:w-48"
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
        alt="Netflix Logo"
      />
    </div>
  );
};

export default Header;
