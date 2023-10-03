import React from "react";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Rating } from '@smastrom/react-rating'
import { Navigation, Pagination } from 'swiper/modules';
import '@smastrom/react-rating/style.css'
import SectionHeadingTitle from "../../../pages/Shared/SectionHeadingTitle/SectionHeadingTitle";


const Testimonials = () => {
    const [rating, setRating] = useState(0) // Initial value
    const [reviewsData, setReviewsData] = useState([]);
    useEffect(() => {
        fetch("https://bd-restaurant-server.vercel.app/reviews")
            .then((res) => res.json())
            .then((data) => {
                setReviewsData(data);
            });
    }, []);
    return (
        <div>

            <SectionHeadingTitle sectionTitle={"What Our Clients Say"} sectionHeading={'TESTIMONIALS'}></SectionHeadingTitle>
            <section className="mx-3 mt-0">
                <Swiper
                    pagination={{
                        type: "fraction",
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {reviewsData.map((review, index) => (
                        <SwiperSlide key={review._id}>
                            <div className="flex flex-col  items-center justify-center m-16">
                                <h1><Rating style={{ maxWidth: 250 }} value={review?.rating} onChange={setRating} /></h1>
                                <p className="mt-2">{review.details}</p>
                                <h2 className="text-3xl mt-4 mb-0 fw-bolder text-yellow-600">{review.name}</h2>
                            </div>
                            ;
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>
        </div>
    );
};

export default Testimonials;