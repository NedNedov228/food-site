import React, { FC, useEffect, useRef, useState } from "react";
import "./Carousel.css";

interface Dish {
  src: string;
  name: string;
  price: string;
  description: string;
}

interface CarouselProps {
  dishes: Dish[];
  setSelectedDish: (dish: Dish) => void;
}

export const Carousel: FC<CarouselProps> = ({ dishes, setSelectedDish }) => {
  const wheelRef = useRef<HTMLDivElement>(null);
  const dishRefs = useRef<HTMLDivElement[]>([]);
  const [spin, setSpin] = useState(0);
  const [contentSelector, setContentSelector] = useState(0);
  const [isOrange, setIsOrange] = useState(true);

  useEffect(() => {
    if (dishRefs.current.length) {
      const center = { x: 280, y: 280 };
      const angle = (2 * Math.PI) / dishes.length;
      const spinRadius = 280;

      dishRefs.current.forEach((dish, i) => {
        const newAngle = angle * i;
        const newX = Math.cos(newAngle) * spinRadius;
        const newY = Math.sin(newAngle) * spinRadius;
        dish.style.left = `${center.x + newX}px`;
        dish.style.top = `${center.y - newY}px`;
      });
    }
  }, [dishes.length]);

  useEffect(() => {
    setSelectedDish(dishes[contentSelector]); // Update the selected dish whenever the selector changes
  }, [contentSelector, dishes, setSelectedDish]);

  const getSelectedDishStyles = () => {
    // Special styles for Dish3
    if (contentSelector === 2 || contentSelector === 5 || contentSelector === 8) {
      return {
        right: "calc(520px / 2)",
        top: "calc(30px + 560px / 2)",
      };
    }
    // Default styles for other dishes
    return {
      right: "calc(30px + 560px / 2)",
      top: "calc(100px + 560px / 2)",
    };
  };

  const spinRight = () => {
    const slice = 360 / dishes.length;
    setSpin((prev) => prev + slice);
    setContentSelector((prev) => (prev + 1) % dishes.length);
  };

  const spinLeft = () => {
    const slice = 360 / dishes.length;
    setSpin((prev) => prev - slice);
    setContentSelector((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  return (
    <div className="spinner">
      <div className={`spinner__container ${isOrange ? "" : "bg--green"}`}>
        <div
          className="spinner__wheel"
          style={{
            transform: `translate(-50%, -50%) rotate(${spin}deg)`,
          }}
          ref={wheelRef}
        >
          {dishes.map((dish, i) => (
            <div
              key={i}
              className="spinner__dish"
              ref={(el) => el && (dishRefs.current[i] = el)}
              style={{
                backgroundImage: `url(${dish.src})`,
              }}
            ></div>
          ))}
        </div>
      </div>
      <img
        className="selected__dish__image"
        alt={dishes[contentSelector].name}
        src={dishes[contentSelector].src}
        style={getSelectedDishStyles()} // Dynamically apply styles
      />
      <div className="arrow__buttons">
        <button
          className="shift__left"
          onClick={spinLeft}
          aria-label="Shift Left"
        ></button>
        <button
          className="shift__right"
          onClick={spinRight}
          aria-label="Shift Right"
        ></button>
      </div>
    </div>
  );
};
