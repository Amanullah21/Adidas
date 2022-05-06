import React from "react";
import styled from "./Home.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "../../slider.css";
import { Link } from "react-router-dom";

const images = [
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/1c2febd0cacc4d6aa958ab8a00ff0a30_9366/adicolor-classics-primeblue-sst-track-pants.jpg",
    price: "2000",
    title: "Taruser Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/d4952e174de7465482d9ac46010c4aab_9366/adicolor-classics-3-stripes-tee.jpg",
    price: "2000",
    title: "Mid Cut Crew Tshirt",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
  {
    url: "https://assets.adidas.com/images/w_280,h_280,f_auto,q_auto:sensitive/f7700e507b2640b1927bab3a0104db80_9366/mid-cut-crew-socks-3-pairs.jpg",
    price: "2000",
    title: "Mid Cut Crew",
  },
];

const Home = () => {
  const menhome = () => {
    console.log("Man sessction at home page for Filtring data");
  };
  const womenhome = () => {
    console.log("Women section at Home page for Fiter data from Product page ");
  };
  const kidshome = () => {
    console.log("Kid session at home page for Filter ");
  };
  const slidingCard = () => {
    console.log("SLiding Card");
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const settings1 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className={styled.Home}>
      <div className={styled.top_section}>
      <div className={styled.together}>
            <h2>
              TOGETHER, IMPOSSIBLE IS <br /> NOTHING
            </h2>
            <p>Find out how you can help end plastic waste, starting May 9.</p>
            <button className={styled.button_Home}>Learn More </button>
          </div>
      </div>

      <div className={styled.popular_con}>
        <h1>POPULAR RIGHT NOW</h1>
        <button>FACE COVERS</button>
        <button>WHITE SNEAKERS</button>
        <button>SUPERSTAR</button>
        <button>ADIDAS ORIGINALS</button>
        <button>ULTRABOOST</button>
      </div>
      <div className={styled.who_are_you}>
        <h1>WHO ARE YOU SHOPPING FOR?</h1>
        <div className={styled.who_are_div}>
          <div className={styled.who_are_div_man} onClick={menhome}>
            Men
          </div>
          <div className={styled.who_are_div_women} onClick={womenhome}>
            Women
          </div>
          <div className={styled.who_are_div_kids} onClick={kidshome}>
            Kids
          </div>
        </div>
      </div>

      <br />
      <hr />

      <div className={styled.Slider_con}>
        <h1 style={{ "text-align": "left", "margin-left": "20x" }}>
          STILL INTERESTED?
        </h1>
        <Slider className="slideImg" {...settings}>
          {images.map((ele, i) => (
            <div className={styled.style_card} onClick={slidingCard}>
              <img key={i} src={ele.url} alt="" />
              <span>{ele.price} $</span>
              <h5>{ele.title}</h5>
            </div>
          ))}
        </Slider>
      </div>

      <div className={styled.Slider_con1}>
        <div className={styled.flex}>
          <h1>NEW ARRIVALS</h1>
          <Link to="/product">See All</Link>
        </div>

        <Slider className="slideImg" {...settings1}>
          {images.map((ele, i) => (
            <div className={styled.new_card} onClick={slidingCard}>
              <img key={i} src={ele.url} alt="" />
              <span>{ele.price} $</span>
              <h5>{ele.title}</h5>
            </div>
          ))}
        </Slider>

      
      </div>
    </div>
  );
};

export default Home;
