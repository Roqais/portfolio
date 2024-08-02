import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hannah from "../assets/finalhannah.jpg";
import { SocialIcon } from 'react-social-icons'



const Home = () => {
    return (

        <>
            {/* Home */}
            <div className='bg-slate-200'>
                <div className='min-h-content max-w-screen-xl mx-auto md:py-20  md:px-4'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-14'>
                        <div className='order-1 md:order-2 md:col-span-1'>
                            <img src={hannah} className='object-center w-full h-auto rounded-half ' alt="Hannah Viqar" />
                        </div>
                        <div className='order-2 md:order-1 md:col-span-1 md:mt-4 text-center'>
                            <h1 className='text-6xl tracking-tighter md:text-6xl text-red-900 font-bold mb-4'>Hannah Viqar</h1>
                            <TypeAnimation
                                sequence={[
                                    'Cybersecurity Expert',
                                    1500,
                                    'Vulnerability Assessment',
                                    1000,
                                    'Penetration Tester',
                                    1000,
                                    'Documentation',
                                    1000,
                                ]}
                                speed={50}
                                className='md:text-2xl text-2xl font-medium md:font-normal '
                                repeat={Infinity}
                            />
                            <p className=' md:my-0 my-10  md:py-10 px-6 md:px-12 text-lg text-justify'>
                                This is Hannah Viqar, an experienced penetration tester, driven by my passion for
                                uncovering vulnerabilities and making digital spaces safer. I love the challenge of staying ahead in
                                cybersecurity and thrive on learning new skills. My goal is to help companies strengthen their
                                security measures by identifying weaknesses and providing practical solutions. I believe in
                                sharing knowledge with others in the cybersecurity community and promoting ethical hacking
                                practices. Ultimately, my objective is to exceed client expectations and build lasting relationships
                                based on trust and reliability
                            </p>

                        </div>
                    </div>
                </div>

            </div>

            {/* About ME */}
            < div className='bg-gray-700' >
                <div className='md:h-80 max-w-screen-lg mx-auto  flex flex-col md:pb-0 pb-8  pt-14 items-center'>
                    <div className=' text-center text-white'>
                        <h1 className='md:text-6xl text-4xl font-bold mb-8 '>About ME</h1>
                        <p className='my-10 md:px-0 px-6 text-justify font-base'>
                            A cybersecurity penetration tester with a Bachelor's degree in Software Engineering from IMSciences Peshawar, I am known for my hardworking and detail-oriented approach to security challenges. I specialize in penetration testing, vulnerability assessment, web application security, and network security. At Secure Purple, I conduct thorough assessments, identify vulnerabilities, and collaborate with teams to implement effective security measures. Proficient in tools like Acunetix, Burp Suite, Dirsearch, Metasploit, Nmap, and Nuclei,
                             I am dedicated to continuous learning and staying updated with the latest cybersecurity trends.
                        </p>
                    </div>

                    <div className='border w-full mt-5 border-gray-400'></div>

                </div>
            </div >



            {/* INFO */}
            <div className='bg-gray-700'>
                <div className=' max-w-screen-lg mx-auto'>
                    <div className='grid grid-cols-2 md:h-60 h-40 text-white justify-between items-center'>

                        <div className='col-span-1  md:text-left text-center font-medium '>
                            <h2 className='md:mb-7 md:text-3xl mb-4 text-xl uppercase'>Location</h2>

                            <h2 className='md:text-xl text-md'>Peshawar, Pakistan</h2>
                        </div>

                        <div className=' col-span-1 text-center font-medium'>
                            <h2 className='md:block hidden md:mb-3 md:text-3xl text-xl uppercase'>Around the Web</h2>
                            <div className='    '>
                                <SocialIcon url="www.facebook.com" className='mx-1' />
                                <SocialIcon url="www.linkedin.com" className='mx-1' />
                            </div>

                        </div>
                    </div>
                </div>
            </div>


            <div className='bg-gray-900'>
                <div className=' max-w-screen-lg md:h-20 mx-auto flex justify-center items-center'>

                    <p className='text-white md:text-md text-xs'>©2024 <span className='underline text-green-400 uppercase'>Hannah Viqar</span> | Protecting Your Digital World</p>

                </div>


            </div>


        </>
    );
}

export default Home;
