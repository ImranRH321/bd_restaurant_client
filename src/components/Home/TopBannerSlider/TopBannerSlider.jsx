import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const TopBannerSlider = () => {
  return (
    <Carousel>
      <div>
        <img src="https://c4.wallpaperflare.com/wallpaper/596/763/771/artwork-painting-nighthawks-edward-hopper-wallpaper-preview.jpg" />
        <p className="legend">Legend 1</p>
      </div>
      <div>
        <img src="https://c4.wallpaperflare.com/wallpaper/837/898/423/food-fruit-healthy-acorn-wallpaper-preview.jpg" />
        <p className="legend">Legend 2</p>
      </div>
      <div>
        <img src="https://c0.wallpaperflare.com/preview/452/100/984/restaurant-bar-coffee-shop.jpg" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};

export default TopBannerSlider;
