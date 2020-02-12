import React, { useState } from "react";

import Header from "../header";
import Top from "../top";

const App = () => {
  const [styleHeader, setStyle] = useState(false);
  let last_known_scroll_position = 0;
  let ticking = false;
  function doSomething(scroll_pos) {
    if (scroll_pos !== 0) {
      setStyle(true);
    } else {
      setStyle(false);
    }
  }

  window.addEventListener("scroll", function(e) {
    last_known_scroll_position = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });

      ticking = true;
    }
  });
  return (
    <div className="main">
      <Header styleHeader={styleHeader} />
      <Top  />
    </div>
  );
};
export default App;
