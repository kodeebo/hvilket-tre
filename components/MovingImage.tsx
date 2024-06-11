"use client";

import Image, { ImageProps } from "next/image";
import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import styles from "./movingImage.module.css";
let counter = 0;
let refreshRate = 3;

const isTimeToUpdate = () => {
  return counter++ % refreshRate === 0;
};

type Props = {
  src: string;
} & ImageProps;

const MovingImage = (props: Props) => {
  const wrapper = useRef<HTMLDivElement>(null);
  const image = useRef<HTMLImageElement>(null);
  const [mouseOrigin, setMouseOrigin] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setOrigin();
  }, []);

  const setOrigin = () => {
    if (wrapper.current) {
      setMouseOrigin({
        x:
          wrapper.current.offsetLeft +
          Math.floor(wrapper.current.offsetWidth / 2),
        y:
          wrapper.current.getBoundingClientRect().top +
          Math.floor(wrapper.current.offsetHeight / 2),
      });
    }
  };

  const onMouseLeaveHandler = () => {
    if (image.current) {
      image.current.style.transform = "";
    }
  };

  const onMouseMoveEnter = (e: MouseEvent) => {
    setOrigin();
    onMouseMoveHandler(e);
  };

  const onMouseMoveHandler = (e: MouseEvent) => {
    if (!isTimeToUpdate() || !image.current) return;

    const mouseX = e.clientX - mouseOrigin.x;
    const mouseY = (e.clientY - mouseOrigin.y) * -1;

    var style =
      "rotateX(" +
      (-mouseY / image.current.offsetHeight / 2).toFixed(2) +
      "deg) rotateY(" +
      (-mouseX / image.current.offsetWidth / 2).toFixed(2) +
      "deg) scale(1.04)";
    image.current.style.transform = style;
  };

  return (
    <div
      className={styles.wrapper}
      ref={wrapper}
      onMouseEnter={
        onMouseMoveEnter as unknown as MouseEventHandler<HTMLDivElement>
      }
      onMouseLeave={onMouseLeaveHandler}
      onMouseMove={
        onMouseMoveHandler as unknown as MouseEventHandler<HTMLDivElement>
      }>
      <Image
        ref={image}
        onLoad={props.onLoad}
        className={`${styles.image}`}
        {...props}
      />
    </div>
  );
};

export default MovingImage;
