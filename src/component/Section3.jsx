import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// imported img
import pjct_img_1 from "../assets/img/pjct_img_1.jpeg"
import pjct_img_2 from "../assets/img/pjct_img_2.jpeg"
import pjct_img_3 from "../assets/img/pjct_img_3.jpeg"
// fontawsome icon
import "../assets/css/all.min.css"
import "../assets/js/all.min.js"
// react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// custom css
import "../assets/css/Section3.css"
import { useState } from "react";
import { Button } from "flowbite-react";
// =============================
    const slidetext = {
        WebkitLineClamp: 1,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: "-webkit-box"
    };
const Prev = (props) => {
    const { onClick } = props;
    return (
        <span onClick={onClick} className="inline-block absolute top-1/2 md:-top-20 lg:-top-20 translate-y-1/2 left-0 md:left-auto lg:left-auto md:right-14 lg:right-14 w-11 h-11 text-2xl leading-[44px] text-center rounded-full bg-white-1 hover:bg-text-heading-1 text-black-1 hover:text-white-1 z-[1] transition-all ease-linear duration-500"><i className="fa-solid fa-angle-left"></i></span>
    );
  };
const Next = (props) => {
    const { onClick } = props;
    return (
        <span onClick={onClick} className="inline-block absolute top-1/2 md:-top-20 lg:-top-20 translate-y-1/2 right-0 w-11 h-11 text-2xl leading-[44px] text-center rounded-full bg-white-1 hover:bg-text-heading-1 text-black-1 hover:text-white-1 z-[1] transition-all ease-linear duration-500"><i className="fa-solid fa-angle-right"></i></span>
    );
  };
const Section3 = () => {
    
const [text,setText] = useState(true);
    var settings = {
        dots: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode:true,
        arrows: true,
        infinite: true,
        focusOnSelect: true,
        pauseOnFocus: true,
        pauseOnHover: false,
        autoplay: false,
        autoplaySpeed: 1500,
        prevArrow: <Prev/>,
        nextArrow: <Next/>,
        
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:false
            }
          }
        ]
      };    
    return (
        <div>
        <section id="section_3" className="mb-28 pt-5">
            <div className="row">
                <div className="container">
                    <div className="col">
                        <p className="text-black-1 font-poppins text-base font-normal not-italic leading-[120%] mb-2 md:mb-4 lg:mb-4">Best Project of the Years</p>
                        <div className="sec2_header flex justify-between">
                            <h2 className="sec2_header text-black-1 font-poppins text-[35px] md:text-[40px] lg:text-[50px] font-semibold not-italic leading-[120%] mb-2 md:mb-11 lg:mb-11">Our recent projects</h2>
                        </div>
                    </div>
                    <div className="col">
                        <div className="sec3_slider">
                            <Slider {...settings} className="py-4">
                            <div className="sec3_slider_item_wrapper px-5 py-4">
                                <div className="sec3_slider_item  border border-gray-1 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-100 md:hover:scale-105 lg:hover:scale-105 transition-all ease-linear duration-300">
                                    <div className="sec3_slider_item_img">
                                        <LazyLoadImage effect="blur" src={pjct_img_1} className="border h-[309px] w-full" alt="image" />
                                        <div className="sec3_slider_item_img_ovrly"></div>
                                    </div>
                                    <div className="sec3_slider_item_txt ps-6 py-7">
                                        <h3 className="sec3_slider_item_header text-black-1 font-poppins text-[21px] font-semibold not-italic leading-[120%] mb-4">Sobha Hearland II Villas</h3>
                                        <p style={text ? slidetext : null} className="sec3_slider_item_desc  text-black-1 font-poppins text-base font-normal not-italic leading-[150%] mb-4">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
                                        <Button onClick={()=>setText(!text)} outline gradientDuoTone="redToYellow">{text ? 'see more': 'see less'}</Button>
                                        <div className="sec3_slider_item_review flex gap-4">
                                            <div className="sec3_slider_item_review_icon flex gap-1">
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-regular fa-star"></i></span>
                                            </div>
                                            <div className="sec3_slider_item_review_num">4.83</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sec3_slider_item_wrapper px-5 py-4">
                                <div className="sec3_slider_item  border border-gray-1 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-100 md:hover:scale-105 lg:hover:scale-105 transition-all ease-linear duration-300">
                                    <div className="sec3_slider_item_img">
                                        <LazyLoadImage effect="blur" src={pjct_img_2} className="border h-[309px] w-full" alt="image" />
                                        <div className="sec3_slider_item_img_ovrly"></div>
                                    </div>
                                    <div className="sec3_slider_item_txt ps-6 py-7">
                                        <h3 className="sec3_slider_item_header text-black-1 font-poppins text-[21px] font-semibold not-italic leading-[120%] mb-4">Sobha Hearland II Villas</h3>
                                        <p style={text ? slidetext : null} className="sec3_slider_item_desc  text-black-1 font-poppins text-base font-normal not-italic leading-[150%] mb-4">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
                                        <Button onClick={()=>setText(!text)} outline gradientDuoTone="redToYellow">{text ? 'see more': 'see less'}</Button>
                                        <div className="sec3_slider_item_review flex gap-4">
                                            <div className="sec3_slider_item_review_icon flex gap-1">
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-regular fa-star"></i></span>
                                            </div>
                                            <div className="sec3_slider_item_review_num">4.83</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sec3_slider_item_wrapper px-5 py-4">
                                <div className="sec3_slider_item  border border-gray-1 rounded-xl overflow-hidden hover:shadow-2xl hover:scale-100 md:hover:scale-105 lg:hover:scale-105 transition-all ease-linear duration-300">
                                    <div className="sec3_slider_item_img">
                                        <LazyLoadImage effect="blur" src={pjct_img_3} className="border h-[309px] w-full" alt="image" />
                                        <div className="sec3_slider_item_img_ovrly"></div>
                                    </div>
                                    <div className="sec3_slider_item_txt ps-6 py-7">
                                        <h3 className="sec3_slider_item_header text-black-1 font-poppins text-[21px] font-semibold not-italic leading-[120%] mb-4">Sobha Hearland II Villas</h3>
                                        <p style={text ? slidetext : null} className="sec3_slider_item_desc  text-black-1 font-poppins text-base font-normal not-italic leading-[150%] mb-4">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.</p>
                                        <Button onClick={()=>setText(!text)} outline gradientDuoTone="redToYellow">{text ? 'see more': 'see less'}</Button>
                                        <div className="sec3_slider_item_review flex gap-4">
                                            <div className="sec3_slider_item_review_icon flex gap-1">
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-solid fa-star"></i></span>
                                                <span className="text-[#F59914]"><i className="fa-regular fa-star"></i></span>
                                            </div>
                                            <div className="sec3_slider_item_review_num">4.83</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Section3;