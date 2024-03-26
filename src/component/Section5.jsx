import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
// imported images
import img_2 from "../assets/img/img_2.png" 
const Section5 = () => {
    return (
        <div>
        <section id="section_5" className="section5 mt-28">
            <div className="container">
                <div className="row  relative pt-14 md:h-96 h-[30rem] pb-2 pl-4 mb-28 w-full rounded-lg bg-gradient-to-r from-primary to-secondery">
                    <div className="col sec5_txt absolute left-0 w-full lg:w-1/2 ms-4 z-10">
                        <h2 className="sec5_header text-black-1 text-center font-poppins text-4xl leading-[120%] mb-6">Subscribe Our Newsletter</h2>
                        <p className="sec5_desc max-w-[526px] mx-auto  text-black-1 font-poppins text-base not-italic font-normal leading-[150%] mb-6">Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.</p>
                        <form action="#" className="flex justify-center lg:block">
                                <div className="hero_form_wrap border lg:bg-white-1 border-text-heading-1 mt-6 mb-24 lg:rounded-full inline-flex flex-col items-center lg:justify-between lg:flex-row gap-y-4 w-[65%] lg:min-w-[430px] border-none lg:border-solid">
                                    <input type="email" name="" id="" placeholder="Enter your email" className="bg-white-1 border-solid lg:border-none border border-text-heading-1 rounded-full focus:ring-0 focus:outline-none pl-8  w-full placeholder:text-center placeholder:m-4 lg:w-3/5" />
                                    <button type="submit" className="text-white-1 hover:text-text-heading-1 border border-text-heading-1 bg-text-heading-1 hover:bg-white-1 focus:ring-1 focus:outline-none focus:ring-gray-300 rounded-full px-5 py-3 text-center font-poppins text-base font-normal leading-[100%] lg:text-sm dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all ease-linear duration-300">Get a Quote</button>
                                </div>
                        </form>
                    </div>
                    <div className="col sec5_img absolute w-1/2 right-0 hidden lg:block">
                        <LazyLoadImage effect="blur" src={img_2} alt="hero_image" className="absolute -top-16 right-0 z-20" />
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Section5;