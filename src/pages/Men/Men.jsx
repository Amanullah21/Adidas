import React from "react";
import styled from "./Men.module.css";
import { Link } from "react-router-dom";
// import "../../slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { images } from "../../../src/Img";

const Men = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="nav-margin">
      
      <div className={styled.Men_container}>
        <div className={styled.Men_top}>
          <div className={styled.together}>
            <h2>
              TOGETHER, IMPOSSIBLE IS <br /> NOTHING
            </h2>
            <p>Find out how you can help end plastic waste, starting May 9.</p>
            <button className={styled.button_Home}>Learn More </button>
          </div>
        </div>
        <div className={styled.video_section}>
          <video
            autoPlay
            loop
            src="https://brand.assets.adidas.com/video/upload/q_auto,vc_auto/video/upload/running-ss22-ultraboost-launch-hp-masthead-large-3d-d_wwmaoe.mp4"
          ></video>
        </div>
        <div className={styled.MenCard}>
          <div className={styled.men_img1}>
            <Link to="/product">
              <h4>Shoes </h4>
            </Link>
          </div>
          <div className={styled.men_img2}>
            <Link to="/product">
              <h4>Pants </h4>
            </Link>
          </div>
          <div className={styled.men_img3}>
            <Link to="/product">
              <h4>Hoddies </h4>
            </Link>
          </div>
          <div className={styled.men_img4}>
            <Link to="/product">
              <h4>Tops </h4>
            </Link>
          </div>
        </div>

        <div>
          <h2 className={styled.best_text}>Best of Adidas</h2>
          <div className={styled.menSlider}>
            <Link to="/product">
              <Slider className="slideImg" {...settings}>
                {images.map((ele, i) => (
                  <div className={styled.new_card}>
                    <img key={i} src={ele.url} alt={ele.title} />
                    <span>{ele.price} $</span>
                    <h5>{ele.title}</h5>
                  </div>
                ))}
              </Slider>
            </Link>
          </div>
        </div>

        <div className={styled.clothing_text}>
          <h2>MEN’S CLOTHING & SHOES</h2>
          <p>
            As a creator, you look for ways to excel and express yourself when
            and where you can, from reaching for that last rep to evolving your
            streetwear style. Log miles or tear down the baseline in men's shoes
            with responsive cushioning. Rep an athletic style off the field in
            lifestyle apparel born of sport heritage. From athletes to
            streetwear enthusiasts, adidas men’s clothing and shoes exist to let
            you go harder, dig deeper, and get the most out of yourself, from
            the pitch to the street to the road less traveled.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Men;
