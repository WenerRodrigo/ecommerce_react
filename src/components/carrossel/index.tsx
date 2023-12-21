import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const images = [
  require("../../assets/img.webp"),
  require("../../assets/logo_1.webp"),
  require("../../assets/logo_2.webp"),
  require("../../assets/logo_3.webp"),
];

export const Carrossel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  useEffect(() => {
    const intervalId = setInterval(nextImage, 5000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.arrow_left} onClick={prevImage}>
          <IoIosArrowForward />
        </div>
        <img
          className={styles.logo}
          src={images[currentImageIndex]}
          alt="Imagem Oferta"
        />
        <div className={styles.arrow_right} onClick={nextImage}>
          <IoIosArrowBack />
        </div>
      </div>
    </div>
  );
};
