import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// imported img
import msg_svg from "../assets/img/icon/messages.svg"
import sms_svg from "../assets/img/icon/sms.svg"
import edit2_svg from "../assets/img/icon/edit-2.svg"
const Section2 = () => {
    return (
        <section id="section_2" className="pt-28 mb-28 bg-white">
            <div className="row title mb-11">
                <div className="container">
                    <div className="col">
                        <p className="text-black font-poppins text-base not-italic font-normal leading-[120%] text-center">Three steps. Three minutes.</p>
                        <h1 className="text-black font-poppins text-[35px] md:text-[40px] lg:text-[50px] not-italic font-semibold leading-[120%] text-center pb-4">Everything should be this easy.</h1>
                    </div>
                </div>
            </div>
            <div className="row sec2 ">
                <div className="container">
                    <div className="sec2_item_wrapper flex justify-center items-center lg:gap-x-8 md:gap-x-4 gap-y-20 flex-wrap px-[33px]">
                        <div className="col max-w-[300px] flex flex-col items-center md:items-center lg:items-start text-center lg:text-left lg:w-[250px] lg:ms-2 hover:scale-105 transition-all ease-linear duration-300">
                            <span className="sec2_item_icon"><LazyLoadImage effect="blur" src={msg_svg} alt="icon" /></span>
                            <h2 className="sec2_item_header text-black-1 font-poppins text-3xl not-italic font-semibold leading-[120%] mt-6 ">Answer questions</h2>
                            <p  className="sec2_item_desc text-black-1 font-poppins text-base not-italic font-normal leading-[120%] mt-6">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                        </div>
                        <div className="col max-w-[300px] flex flex-col items-center md:items-center lg:items-start text-center lg:text-left lg:w-[250px] lg:ms-2 hover:scale-105 transition-all ease-linear duration-300">
                            <span className="sec2_item_icon"><LazyLoadImage effect="blur" src={sms_svg} alt="icon" /></span>
                            <h2 className="sec2_item_header text-black-1 font-poppins text-3xl not-italic font-semibold leading-[120%] mt-6 ">Select a quote</h2>
                            <p className="sec2_item_desc text-black-1 font-poppins text-base not-italic font-normal leading-[120%] mt-6">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                        </div>
                        <div className="col max-w-[300px] flex flex-col items-center md:items-center lg:items-start text-center lg:text-left lg:w-[250px] lg:ms-2 hover:scale-105 transition-all ease-linear duration-300">
                            <span className="sec2_item_icon"><LazyLoadImage effect="blur" src={edit2_svg} alt="icon" /></span>
                            <h2 className="sec2_item_header text-black-1 font-poppins text-3xl not-italic font-semibold leading-[120%] mt-6 ">Get registered</h2>
                            <p className="sec2_item_desc text-black-1 font-poppins text-base not-italic font-normal leading-[120%] mt-6">Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section2;