import React from "react";
import TopBannerSlider from "../TopBannerSlider/TopBannerSlider";
import CategoryFoodName from "../CategoryFoodName/CategoryFoodName";
import PropularChicken from "../PropularChicken/PropularChicken";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <TopBannerSlider></TopBannerSlider>
      <CategoryFoodName></CategoryFoodName>
      {/* home items menu */}
      <PropularChicken></PropularChicken>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
