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
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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
                <Slider {...settings}>


                    <div className="md:px-6 md:py-5 px-10 mx-2 pt-16 pb-8 shadow-xl  rounded-2xl">
                        <img
                            src={ac}
                            className="position-center rounded-2xl  "
                            alt=""
                        />
                        <div className="flex flex-col text-white items-center text-center my-6">
                            <h1 className=" text-4xl text-orange-500 font-semibold">Acunetix</h1>
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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
                            <p className="mt-7 md:text-base text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error doloribus consequuntur pariatur eveniet ex sint nemo voluptate tempora esse nisi?</p>

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