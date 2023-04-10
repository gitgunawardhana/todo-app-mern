import { useEffect } from "react";

const getWindowSize = (setWindowSize) => {
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 1024) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - 175,
        });
      } else if (window.innerWidth > 640) {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - 167,
        });
      } else {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - 175,
        });
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // set initial window size

    return () => window.removeEventListener("resize", handleResize);
  }, []);
};

export default getWindowSize;
