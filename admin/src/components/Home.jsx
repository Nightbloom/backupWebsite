import React from "react";
import "./Home.css";
import plate from "../images/delicious-rice-chicken-meat-patties-with-garlic-tomato-sauce 1.png";
import cook from "../images/cooking 1.png";
import envelope from "../images/envelope 1.png";
import phone from "../images/phone 1.png";
import foodDelivery from "../images/food-delivery (1) 1.png";
import chilli from "../images/green-chili-peppers 1.png";
import mask2 from "../images/Mask group-1.png";
import mask3 from "../images/Mask group-2.png";
import mask4 from "../images/Mask group.png";
import bike from "../images/motorbike 1.png";
import pepper from "../images/top-view-bell-pepper-pepper-sliced-white-horizontal-2 1.png";
import wicon from "../images/wicon.png";
import mask1 from "../images/pan.png";
import NavBar from "./Navbar";
import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="conatainer">
      <div className="header">
        <nav>
          <div className="logo">Zang</div>
          <div className="menu">
            <ul className="menu-group">
              <li className="list-item">Home</li>
            </ul>
          </div>
        </nav>
        <div className="zangHeading">Zang It</div>
      </div>
      <div className="maskgroup">
        <div className="maskgroup1">
          <img src={mask1} />
        </div>
        <div className="maskgroup2">
          <img src={mask2} />
        </div>
        <div className="maskgroup3">
          <img src={mask3} />
        </div>
        <div className="maskgroup4">
          <img src={mask4} />
        </div>
        <div className="chilli">
          <img src={chilli} />
        </div>
        <div className="pepper">
          <img src={pepper} />
        </div>
      </div>
      <div className="wicon">
        <img src={wicon} />
      </div>
      <div className="welcome">
        <div className="sub_heading">Welcome to the</div>
        <div className="welcome_content">
          <div className="welcome_Section1">
            <img src={plate} />
          </div>
          <div className="welcome_Section2">
            <div className="main_heading">ZangBox Provider</div>
            <p className="sub_para">
              We Provide you Traditional, Healthy and Exotic recipes that reduce
              your effort on cooking and are easy to cook under 6 steps in less
              than 30 minutes. We also offer you exotic, traditional and healthy
              culsines on special ccasios to make memorable memories.
            </p>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="heading3">How it Works</div>
        <div className="foodDelivery">
          <img src={foodDelivery} />
        </div>
        <div className="footer_heading">Choose Your Zangbox</div>
        <p className="footer_content">
          We offer a wide range of exotic cuisine keeping in mind both your
          cravings and healt
        </p>
        <div className="bike">
          <img src={bike} />
        </div>
      </div>
      <div>
        <Link to="/product" className="orderBtn">
          Order Now
        </Link>
      </div>
    </div>
  );
};
