// impored image
import sec4_img from "../assets/img/sec4_img.png";
// import css
import "../assets/css/Section4.css"
// import Dependency
import { useState } from "react";
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

const Section4 = () => {
    const [counterState, setCounterState] = useState(false);
    return (        
        <section id="section_4" className="section_4">
            <div className="row title mb-11"> 
                <div className="container">
                    <div className="col">
                        <h1 className="text-black font-poppins text-5xl not-italic font-semibold leading-[120%] text-center mx-auto pb-4">We are a global, boutique real estate brokerage</h1>
                    </div>
                </div>
            </div>
            <div className="row">
                    <div className="container flex flex-col-reverse lg:flex-row justify-between  gap-y-12">
                        <div className="col lg:w-[42%] max-w-[520px]">
                            <div className="sec4_txt">
                                <h2 className="sec4_header text-black-1 font-poppins text-4xl text-center md:text-left lg:text-left lg:text-3xl not-italic font-semibold leading-[120%]">The transfer of real estate</h2>
                                <p className="sec4_desc text-black-1 font-poppins text-base text-center md:text-left lg:text-left not-italic font-normal leading-[120%] mt-6">Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.</p>
                                <div className="sec4-btn mt-6 flex gap-4 justify-center md:justify-start lg:justify-start lg:ms-2">
                                    <button type="submit" className="capitalize text-white-1 hover:text-text-heading-1 border border-text-heading-1 bg-text-heading-1 hover:bg-white-1 focus:ring-1 focus:outline-none focus:ring-gray-300 rounded-full px-5 py-3 text-center font-poppins text-base font-normal leading-[100%] lg:text-sm dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all ease-linear duration-300">Book Now</button>
                                    <button type="submit" className="capitalize text-white-1 hover:text-text-heading-1 border border-text-heading-1 bg-text-heading-1 hover:bg-white-1 focus:ring-1 focus:outline-none focus:ring-gray-300 rounded-full px-5 py-3 text-center font-poppins text-base font-normal leading-[100%] lg:text-sm dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all ease-linear duration-300">Read more</button>
                                </div>
                                <ScrollTrigger onEnter={ ()=> setCounterState(true)} onExit={()=> setCounterState(false)}>
                                <div className="sec4_counter flex justify-around flex-wrap mt-20">
                                    <div className="sec4_counter_item">
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">
                                            {
                                                counterState &&
                                                <CountUp end={12} duration={2} />
                                            }
                                            </span>
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">+</span>
                                        <span className="block capitalize text-black-1 font-poppins text-base not-italic font-normal leading-[120%]">Customers</span>
                                    </div>
                                    <div className="sec4_counter_item">
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">
                                            {
                                                counterState &&
                                                <CountUp end={14} duration={2} />
                                            }
                                            </span>
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">+</span>
                                        <span className="block capitalize text-black-1 font-poppins text-base not-italic font-normal leading-[120%]">Offices</span>
                                    </div>
                                    <div className="sec4_counter_item">
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">
                                            { 
                                                counterState &&
                                                <CountUp end={10} duration={2} />
                                            }
                                            </span>
                                        <span className="text-black-1 font-poppins text-[67px] not-italic font-semibold leading-[120%]">+</span>
                                        <span className="block capitalize text-black-1 font-poppins text-base not-italic font-normal leading-[120%]">students</span>
                                    </div>
                                </div>
                                </ScrollTrigger>
                            </div>
                        </div>
                        <div className="col lg:w-1/2">
                            <div className="sec4_img rounded-2xl overflow-hidden">
                                <LazyLoadImage effect="blur" src={sec4_img} className="w-full h-full" alt="image" />
                            </div>
                        </div>
                    </div>
            </div>
        </section>
    );
};
export default Section4;