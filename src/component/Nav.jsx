import logo from "../assets/img/icon/Logo.png";
import "../assets/css/all.min.css";
import { HiMiniBars3BottomLeft,HiXMark } from "react-icons/hi2";
import { useState } from "react";
import { Link } from "react-scroll";

const Nav = () => {

    const [nav , setnav] = useState(false);
    const navHandler = ()=> {
        setnav(!nav);
    };

    return (
        <section id="navbar" className="Navbar z-[999999] absolute top-0 w-full mx-auto ">
            <div className="row">
                <div className="container">
                    <div className="col relative flex items-center justify-between lg:shadow bg-gray-2 rounded-xl lg:rounded-full py-4 px-6 mt-8 ">
                        <div className="nav_logo">
                            <a href="#" className="flex items-center h-full ps-2.5 mb-2">
                                <img src={logo} className="" alt="Logo" />                    
                            </a>
                        </div>
                        <div className={`nav_item-wrapper absolute lg:static ${nav ? `top-14` : `-top-[200vh]`} left-0 w-full flex flex-col lg:flex-row lg:justify-end gap-y-8 bg-gray-2 -z-10 lg:z-0 ease-in transition-all duration-500`}>
                            <ul className="font-medium bg-white flex flex-col lg:flex-row items-center gap-y-4 lg:gap-[0.5vw] rounded-md lg:rounded-full lg:ms-10 px-3 pt-16 lg:py-2">
                                <li>
                                    <Link to="/" spy={true} smooth={true} offset={50} duration={1000} onClick={()=>navHandler()} className="flex items-center gap-3 p-2 text-text-heading-1 rounded-lg hover:ms-4 lg:hover:ms-0 active:text-secondery dark:text-white hover:text-secondery transition-all ease-linear duration-300 dark:hover:bg-gray-700">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-address-card"></i>
                                        </span>
                                        <span className="font-poppins text-sm font-normal leading-[100%] text-center">About</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=>navHandler()} to="section_3" spy={true} smooth={true} offset={50} duration={1000} className="flex items-center gap-3 p-2 text-text-heading-1 rounded-lg hover:ms-4 lg:hover:ms-0 active:text-secondery dark:text-white hover:text-secondery transition-all ease-linear duration-300 dark:hover:bg-gray-700">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-briefcase"></i>
                                        </span>
                                        <span className="font-poppins lg:text-sm font-normal leading-[100%] text-center">Projects</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=>navHandler()} to="/" spy={true} smooth={true} offset={50} duration={1000} className="flex items-center gap-3 p-2 text-text-heading-1 rounded-lg hover:ms-4 lg:hover:ms-0 active:text-secondery dark:text-white hover:text-secondery transition-all ease-linear duration-300 dark:hover:bg-gray-700">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-users"></i>
                                        </span>
                                        <span className="font-poppins lg:text-sm font-normal leading-[100%] text-center">Agents</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=>navHandler()} to="section_4" spy={true} smooth={true} offset={50} duration={1000} className="flex items-center gap-3 p-2 text-text-heading-1 rounded-lg hover:ms-4 lg:hover:ms-0 active:text-secondery dark:text-white hover:text-secondery transition-all ease-linear duration-300 dark:hover:bg-gray-700">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-gift"></i>
                                        </span>
                                        <span className="font-poppins lg:text-sm font-normal leading-[100%] text-center">Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=>navHandler()} to="/" spy={true} smooth={true} offset={50} duration={1000} className="flex items-center gap-3 p-2 text-text-heading-1 rounded-lg hover:ms-4 lg:hover:ms-0 active:text-secondery dark:text-white hover:text-secondery transition-all ease-linear duration-300 dark:hover:bg-gray-700">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-list-check"></i>
                                        </span>
                                        <span className="font-poppins lg:text-sm font-normal leading-[100%] text-center">Listing</span>
                                    </Link>
                                </li>
                                <li>
                                    <form action="#" className="ms-12">
                                        <span className="lg:mt-0 flex items-center">
                                            <div className="relative z-0 w-full mb-5 mr-3 group lg:hidden">
                                                <input type="search" name="floating_search" id="floating_search" className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-text-heading-1 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-primary peer" placeholder=" "/>
                                                <label htmlFor="floating_search" className="peer-focus:font-medium absolute text-sm text-text-heading-1 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-secondery peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Search</label>
                                            </div>
                                            <button onClick={()=>navHandler()} className="-mt-3 lg:mt-0 hover:bg-text-heading-1 hover:text-white-1 bg-secondery h-8 w-11 rounded-full transition-all ease-in-out duration-300" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                                        </span>
                                    </form>
                                </li>
                            </ul>
                            <ul className="font-medium bg-gray-2 flex flex-col lg:flex-row items-center gap-y-2 lg:gap-[0.5vw] px-3 py-2 pb-[4.25rem] lg:pb-0 rounded-md lg:rounded-full">
                                <li>
                                    <Link onClick={()=>navHandler()} to="/" spy={true} smooth={true} offset={50} duration={1000} className="inline-flex items-center gap-3 p-2 text-text-heading-1 rounded-lg dark:text-white hover:text-secondery dark:hover:bg-gray-700 transition-all ease-linear duration-500">
                                        <span className="lg:hidden ">
                                            <i className="fa-solid fa-briefcase"></i>
                                        </span>
                                        <span className=" font-poppins lg:text-sm font-normal leading-[100%] text-center">Other Services</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link onClick={()=>navHandler()} to="section_5" spy={true} smooth={true} offset={50} duration={1000} className="inline-flex items-center ">
                                        <button type="button" className="hover:text-white border border-gray-1 rounded-md lg:rounded-full px-5 py-2.5 text-center text-text-heading-1 font-poppins text-base font-normal leading-[100%]  lg:text-sm hover:bg-gray-900 focus:ring-1 focus:outline-none focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800 transition-all ease-linear duration-300">Contuct us</button>
                                    </Link>
                                </li>                    
                            </ul>
                        </div>  
                        <button  onClick={()=>navHandler()} type="button" className="inline-flex lg:hidden items-center p-2 mt-2 ms-3 text-sm rounded-lg sm:text-blue-600 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                            {nav ? <HiXMark size={40} style={{fontWeight:800}}/> : <HiMiniBars3BottomLeft size={40} style={{fontWeight:800}}/>}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Nav;