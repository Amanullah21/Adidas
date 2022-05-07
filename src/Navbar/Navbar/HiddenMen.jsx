import React from "react";
import "./HiddenMen.css";
import { Link } from "react-router-dom";
function HiddenMen() {
  return (
    <div className="hidden-nav-container">
      <div>
        <ul>
          <li>
            <div className="hidden-heading-nav">
              <Link to="/product">All Product</Link>
            </div>
          </li>
          <li>New Arrivals</li>
          <li>Originals</li>
          <li>Manchester United</li>
          <li>Ultraboost</li>
          <li>4DFWD</li>
          <li>Stan Smith</li>
          <br />

          <li className="hidden-red">Outlet</li>
        </ul>
      </div>
      <div className="hidden-left-flex">
        <div>
          <ul>
            <li>
              <div className="hidden-heading-nav">FOOTWEAR</div>
            </li>
            <Link to="/product">
              <li>Shoes</li>
            </Link>
            <li>Sneakers</li>
            <li>Originals</li>
            <li>Slides &amp; Sandals</li>
            <li>Football</li>
            <li>Basketball</li>
            <li>Tennis</li>
            <li>Skateboarding</li>
            <li>Swim</li>
            <li>Hiking &amp; Outdoor</li>
            <li>Cricket</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="hidden-heading-nav">CLOTHING</div>
            </li>
            <li>T-Shirts &amp; Tank Tops</li>
            <li>Joggers &amp; Track Pants</li>
            <li>Originals</li>
            <li>Football Jerseys &amp; T-Shirts</li>
            <li>Shorts</li>
            <li>Jackets</li>
            <li>Hoodies</li>
            <li>Tracksuits</li>
            <li>Sweatshirts</li>
            <li>Swimwear</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>
              <div className="hidden-heading-nav">Accessories</div>
            </li>
            <li>Face Covers</li>
            <li>Socks</li>
            <li>All Bags</li>
            <li>Backpacks</li>
            <li>Gym &amp; Training Bags</li>
            <li>Headwear</li>
            <li>Gloves</li>
          </ul>
        </div>
        <div>
          <div>
            <ul>
              <li>
                <div className="hidden-heading-nav">Sports</div>
              </li>
              <li>Running </li>
              <li>Gym &amp; Training</li>
              <li>Football</li>
              <li>Tennis</li>
              <li>Basketball</li>

              <li>Hiking &amp; Outdoor</li>
              <li>Swim</li>
              <li>Skateboarding</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <div className="hidden-heading-nav">Sports</div>
              </li>
              <li>Made with Recycled Material</li>
              <li>Vegan</li>
              <li>Organic Cotton</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HiddenMen;
