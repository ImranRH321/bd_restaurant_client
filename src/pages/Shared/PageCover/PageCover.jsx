import React from "react";
import { Parallax } from "react-parallax";


// const PageCover = ({ coverImg, pageCoverTitle }) => {
const PageCover = ({ coverImg, pageCoverTitle, color }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={coverImg}
            bgImageAlt="the Food Menu"
            strength={-300}
        >
            <div
                className="hero h-[500px]"
                style={{ backgroundImage: `url(${coverImg})` }}
            >
                <img src={coverImg} alt="" />
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className={`mb-5 text-5xl font-bold ${color}`}>{pageCoverTitle}</h1>
                        <p className="mb-5">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
                            excepturi exercitationem quasi.
                        </p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default PageCover;