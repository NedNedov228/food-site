import React, { FC, useEffect, useRef, useState } from "react";
import Dish1 from "../../images/webp/dish_1.webp";
import Dish2 from "../../images/webp/dish_2.webp";
import Dish3 from "../../images/webp/dish_3.webp";
import "./Carousel.css";

export const Carousel: FC = () => {
  const wheelRef = useRef<HTMLDivElement>(null); // Reference to the spinner wheel
  const dishRefs = useRef<HTMLDivElement[]>([]); // References to individual dishes
  const [spin, setSpin] = useState(0); // Angle of rotation
  const [contentSelector, setContentSelector] = useState(0); // Current content index
  const [isOrange, setIsOrange] = useState(true); // Theme color toggle

  // Dish data
  const dishes = [
    { src: Dish1, name: "Green Goddess Chicken Salad", price: "$32" },
    { src: Dish2, name: "Asian Cucumber Salad", price: "$35" },
    { src: Dish3, name: "Green Goddess Chicken Salad", price: "$32" },
    { src: Dish1, name: "Green Goddess Chicken Salad", price: "$32" },
    { src: Dish2, name: "Asian Cucumber Salad", price: "$35" },
    { src: Dish3, name: "Green Goddess Chicken Salad", price: "$32" },
    { src: Dish1, name: "Green Goddess Chicken Salad", price: "$32" },
    { src: Dish2, name: "Asian Cucumber Salad", price: "$35" },
    { src: Dish3, name: "Green Goddess Chicken Salad", price: "$32" },
  ];

  useEffect(() => {
    if (dishRefs.current.length) {
      const center = { x: 280, y: 280 }; // Correctly align center (match radius of spinner)
      const angle = (2 * Math.PI) / dishes.length; // Angle between dishes
      const spinRadius = 280; // Match CSS spinner radius

      // Position dishes around the circle
      dishRefs.current.forEach((dish, i) => {
        const newAngle = angle * i;
        const newX = Math.cos(newAngle) * spinRadius;
        const newY = Math.sin(newAngle) * spinRadius;
        dish.style.left = `${center.x + newX}px`;
        dish.style.top = `${center.y - newY}px`; // Negative Y to account for inverted axis
      });
    }
  }, [dishes.length]);

 const getSelectedDishStyles = () => {
   if (contentSelector === 2 || contentSelector === 5 || contentSelector === 8) {
     return {
       right: "calc(520px / 2)",
       top: "calc(30px + 560px / 2)",
     };
   }
   return {
     right: "calc(30px + 560px / 2)",
     top: "calc(100px + 560px / 2)",
   };
 };
  // Rotate spinner clockwise
  const spinRight = () => {
    const slice = 360 / dishes.length; // Divide full circle by the number of dishes
    setSpin((prev) => prev + slice);
    setContentSelector((prev) => (prev + 1) % dishes.length);
  };

  // Rotate spinner counterclockwise
  const spinLeft = () => {
    const slice = 360 / dishes.length;
    setSpin((prev) => prev - slice);
    setContentSelector((prev) => (prev - 1 + dishes.length) % dishes.length);
  };

  // Animate content and toggle theme color
  const animateContent = () => {
    const selectedDishImg = document.querySelector(
      ".selected__dish__image"
    ) as HTMLImageElement;

    // Simple animation to scale the selected dish
    selectedDishImg.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(1.2)" },
        { transform: "scale(1)" },
      ],
      { duration: 300 }
    );

    setIsOrange((prev) => !prev);
  };

  return (
    <div className="spinner">
      <div
        className={`spinner__container ${isOrange ? "" : "bg--green"}`}
      >
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
        style={getSelectedDishStyles()}
      />
      <div className="arrow__buttons">
        <button
          className="shift__left"
          onClick={() => {
            spinLeft();
            animateContent();
          }}
          aria-label="Shift Left"
        ></button>
        <button
          className="shift__right"
          onClick={() => {
            spinRight();
            animateContent();
          }}
          aria-label="Shift Right"
        ></button>
      </div>
    </div>
  );
};
