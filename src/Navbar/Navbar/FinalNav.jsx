import React, { useState, useEffect, Fragment } from "react";
import Top from "./Top";
import NavbarCont from "./Navbar";
import NewNav from "./NewNav";
function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}
function FinalNav() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWidth(window.innerWidth);
    }, 500);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });

  return (
    <div>
      <Top />
      {width > 960 ? <NavbarCont /> : <NewNav />}
    </div>
  );
}

export default FinalNav;
