import React from "react";
import TopBannerSlider from "../TopBannerSlider/TopBannerSlider";
import CategoryFoodName from "../CategoryFoodName/CategoryFoodName";
import PropularChicken from "../PropularChicken/PropularChicken";

const Home = () => {
  return (
    <div>
      <TopBannerSlider></TopBannerSlider>
      <CategoryFoodName></CategoryFoodName>
      {/* home items menu */}
      <PropularChicken></PropularChicken>
    </div>
  );
};

export default Home;
