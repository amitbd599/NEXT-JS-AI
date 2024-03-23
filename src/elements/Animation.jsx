"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
  return null;
};

export default Animation;
