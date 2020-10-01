import React from "react";
import s from "./Preloader.module.css";

const {
  preloaderContent,
  preloaderFirst,
  preloaderSecond,
  preloaderThird,
  preloader,
} = s;

export const Preloader = () => (
  <div className={preloader}>
    <div className={preloaderContent}>
      <div className={preloaderFirst}></div>
      <div className={preloaderSecond}></div>
      <div className={preloaderThird}></div>
    </div>
  </div>
);
