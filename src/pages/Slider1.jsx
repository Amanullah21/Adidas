import React from 'react'
import Slider from 'react-slick';
import "../slider.css"
const images = [
    "https://images-static.nykaa.com/uploads/a557ef30-a34e-47c6-bda2-df9f87affe9b.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/2d312445-12bd-4d54-b562-561696f12c71.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/34fd9e91-51c1-44a6-9b16-22b38f9beb0e.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/34fd9e91-51c1-44a6-9b16-22b38f9beb0e.jpg?tr=w-1200,cm-pad_resize"
  ];

const Slider1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay:true,
        autoplaySpeed:2000 
      };
    
  return (
    <div >
       <Slider className="slideImg" {...settings}>
        {images.map((el,i) => (
          <img key={i} src={el} alt="" />
        ))}
      </Slider>
      </div>

  )
}

export default Slider1