import React, { FC } from 'react'
import Logo from "../../images/svg/logo.svg"
import Shopper from "../../images/svg/shopper.svg"
import ShopperH from "../images/svg/shopper_hover.svg"

import "./Header.css"

export const Header : FC = () => {
  return (
    <nav>
      <div className="nav__logo">
        <a href="#"><img src={Logo} alt="logo" /></a>
        <h1>FoodSpin</h1>
      </div>
      <ul className="nav__links">
        <li><a href="#">Breakfast</a></li>
        <li><a href="#">Lunch</a></li>
        <li><a href="#">Dinner</a></li>
      </ul>
      <div className="nav__shopper">
        <a href="#">
          <img
            src={Shopper}
            alt="shopper"
            className="shopper"
          />
        </a>
        <span className="nav__shopper__badge"></span>
      </div>
    </nav>
  )
}
