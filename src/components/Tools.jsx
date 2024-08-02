import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ac from '../assets/tools/ac1.png'
import bp from '../assets/tools/bp.png'
import dir from '../assets/tools/dir.png'
import ms from '../assets/tools/ms.png'
import np from '../assets/tools/np.png'
import nucl from '../assets/tools/nucl.png'


function Arrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block" }}
            onClick={onClick}
        />
    );
}


function Tools() {




    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,

                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                    dots: false
                }
            }
        ]
    };

    return (
        <>

            <div className="flex h-36 items-center justify-center  bg-slate-50">
                <h1 className="font-medium text-black text-3xl">Tools I used</h1>
            </div>
            <div className="slider-container md:px-20 md:min-h-content  md:py-11 md:mt-2 bg-gray-800">

                <p className="md:hidden text-center font-semibold text-gray-500 pt-4">Scroll horizontally to view additional slides.</p>
                <Slider {...settings}>


                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={ac}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Acunetix</h1>
                            <p className="mt-7 md:text-base text-xl">Acunetix is a powerful web vulnerability scanner used to detect security issues in
                                web applications, including SQL injection and cross-site scripting.</p>

                        </div>
                    </div>

                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={bp}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Burp Suite</h1>
                            <p className="mt-7 md:text-base text-xl">Burp Suite is a comprehensive toolset for web application security testing,
                                providing functionality for scanning, crawling, and exploiting vulnerabilities.</p>

                        </div>
                    </div>
                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={dir}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Dirsearch</h1>
                            <p className="mt-7 md:text-base text-xl">
                                Dirsearch is a command-line tool used for brute-forcing directories and files on web servers, significantly aiding in the discovery of hidden resources.</p>

                        </div>
                    </div>
                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={ms}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Metasploit</h1>
                            <p className="mt-7 md:text-base text-xl">Metasploit is a versatile framework for penetration testing that allows security professionals to identify, exploit, and efficiently validate vulnerabilities.</p>

                        </div>
                    </div>
                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={np}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Nmap</h1>
                            <p className="mt-7 md:text-base text-xl">Nmap is a network scanning tool used to discover hosts and services on a
                                network, providing information about open ports, running services, and potential
                                vulnerabilities.</p>

                        </div>
                    </div>
                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={nucl}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Nuclei</h1>
                            <p className="mt-7 md:text-base text-xl">Nuclei is a fast and customizable vulnerability scanner focused on automation,
                                enabling the detection of various security issues across large environments.</p>

                        </div>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Tools;




// < div className = 'max-w-screen-xl mx-auto bg-slate-100' >


//     <div className='flex flex-col items-center py-10'>

//         <h1 className='text-4xl font-bold'>{location.state.title}</h1>


//     </div>


//         </div >