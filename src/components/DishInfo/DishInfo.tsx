import React from "react";
import "./DishInfo.css";

interface DishInfoProps {
  name: string;
  price: string;
  description: string;
}

export const DishInfo: React.FC<DishInfoProps> = ({ name, price, description }) => {
  return (
    <div className="selected__dish__info">
      <h2>{price}</h2>
      <h3>{name}</h3>
      <p>{description}</p>
      <button className="selected__dish__info__order">Order Now</button>
    </div>
  );
};
