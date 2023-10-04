import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionHeadingTitle from "../../../pages/Shared/SectionHeadingTitle/SectionHeadingTitle";
import side1 from '../../../assets/home/slide1.jpg'
import side2 from '../../../assets/home/slide2.jpg'
import side3 from '../../../assets/home/slide3.jpg'
import side4 from '../../../assets/home/slide4.jpg'
import side5 from '../../../assets/home/slide5.jpg'


const CategoryFoodName = () => {
  const basicFood = [
    { foodName: "salad", img: side5 },
    { foodName: "pizza", img: side4 },
    { foodName: "Chicken", img: side3 },
    { foodName: "Burger ", img: side2 },
    { foodName: "Potato", img: side1 },
  ];

  var settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <SectionHeadingTitle
        sectionTitle={""}
        sectionHeading={"ORDER ONLINE"}
      ></SectionHeadingTitle>
      <div>
        {/* <h2> Responsive </h2>  */}
        <Slider {...settings}>
          {basicFood.map((food) => (
            <div className="px-2">
              <img src={food.img} alt="no found" />
              <h4 className="text-center uppercase -mt-14 text-semibold text-white">
                {food.foodName}
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CategoryFoodName;
