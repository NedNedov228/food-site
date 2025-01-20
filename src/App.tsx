import { Header } from './components/Header/Header'
import React, { useState } from "react";
import { Carousel } from './components/Carousel/Carousel'
import { DishInfo } from './components/DishInfo/DishInfo'
import Dish1 from "./images/webp/dish_1.webp";
import Dish2 from "./images/webp/dish_2.webp";
import Dish3 from "./images/webp/dish_3.webp";

function App() {
  const [selectedDish, setSelectedDish] = useState({
    name: "Green Goddess Chicken Salad",
    price: "$32",
    description:
      "It is a non-vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives, and celery.",
    src: Dish1,
  });

  const dishes = [
    {
      src: Dish1,
      name: "Green Goddess Chicken Salad",
      price: "$32",
      description:
        "It is a non-vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives, and celery.",
    },
    {
      src: Dish2,
      name: "Asian Cucumber Salad",
      price: "$35",
      description:
        "This salad features crunchy cucumber slices tossed in a tangy Asian-inspired dressing with sesame seeds and scallions.",
    },
    {
      src: Dish3,
      name: "Avocado and Tomato Salad",
      price: "$30",
      description:
        "A refreshing salad with ripe avocados, juicy tomatoes, and a hint of lemon dressing.",
    },
    {
      src: Dish1,
      name: "Green Goddess Chicken Salad",
      price: "$32",
      description:
        "It is a non-vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives, and celery.",
    },
    {
      src: Dish2,
      name: "Asian Cucumber Salad",
      price: "$35",
      description:
        "This salad features crunchy cucumber slices tossed in a tangy Asian-inspired dressing with sesame seeds and scallions.",
    },
    {
      src: Dish3,
      name: "Avocado and Tomato Salad",
      price: "$30",
      description:
        "A refreshing salad with ripe avocados, juicy tomatoes, and a hint of lemon dressing.",
    },
    {
      src: Dish1,
      name: "Green Goddess Chicken Salad",
      price: "$32",
      description:
        "It is a non-vegetarian salad which consists of the green goddess dressing mixed with chicken, peppers, olives, and celery.",
    },
    {
      src: Dish2,
      name: "Asian Cucumber Salad",
      price: "$35",
      description:
        "This salad features crunchy cucumber slices tossed in a tangy Asian-inspired dressing with sesame seeds and scallions.",
    },
    {
      src: Dish3,
      name: "Avocado and Tomato Salad",
      price: "$30",
      description:
        "A refreshing salad with ripe avocados, juicy tomatoes, and a hint of lemon dressing.",
    },
  ];

  return (
    <>
    <body>
      <Header/>
      <div className="content">
        <DishInfo name={selectedDish.name}
        price={selectedDish.price}
        description={selectedDish.description}/>
        <Carousel  dishes={dishes} setSelectedDish={setSelectedDish}/>
      </div>
    </body>
      
    </>
  )
}

export default App
