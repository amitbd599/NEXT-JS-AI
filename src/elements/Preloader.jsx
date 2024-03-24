"use client";
import React, { useEffect, useState } from "react";

const Preloader = () => {
  let [active, setActive] = useState(true);
  useEffect(() => {
    setTimeout(function () {
      setActive(false);
    }, 2000);
  }, []);
  return (
    <>
      {active === true && (
        <div className="preloader">
          <div>
            <div className="semipolar-spinner">
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
              <div className="ring" />
            </div>
            <div className="loader">
              <span className="l">L</span>
              <span className="o">o</span>
              <span className="a">a</span>
              <span className="d">d</span>
              <span className="i">i</span>
              <span className="n">n</span>
              <span className="g">g</span>
              <span className="d1">.</span>
              <span className="d2">.</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Preloader;
