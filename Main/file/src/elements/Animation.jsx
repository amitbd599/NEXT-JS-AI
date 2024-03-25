"use client";
import AOS from "aos";
import { useEffect } from "react";
import ScrollToTop from "react-scroll-to-top";

const Animation = () => {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
      duration: 1200,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <ScrollToTop smooth color="#fff" />
    </>
  );
};

export default Animation;
