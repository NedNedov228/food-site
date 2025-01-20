import React from 'react'
import "./DishInfo.css";

export const DishInfo = () => {
  return (
    <div className="selected__dish__info">
        <h2>$32</h2>
        <h3>Green Goddess Chicken Salad</h3>
        <p>
          It is a non vegetarian salad which consists of the green goddess
          dressing mixed with chicken, peppers, olives and celery.
        </p>
        <button className="selected__dish__info__order">Order Now</button>
      </div>
  )
}
