import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import roqais from '../assets/new/profile.png'
import roqais1 from '../assets/new/roqais.jpg'
import { SocialIcon } from 'react-social-icons'
import About from '../components/About';
import Services from './Services';



const Home = () => {
    return (

        <>
            <div className='bg-gray-900 text-white'>
                <div className='h-[32rem] max-w-screen-xl mx-auto md:py-0  md:px-4'>

                    <div className='flex flex-col h-[31rem] items-center justify-center gap-4'>

                        <img src={roqais1} className='h-36 w-36 rounded-full mb-2 object-cover object-top' alt="" />

                        <h2 className='text-3xl font-semibold tracking-wide text-yellow-500'>I am, Roqais Mahmood</h2>

                        <div className='text-center font-light'>
                            <p className='my-1 text-2xl'>&lt;A Developer who loves to build cool things /&gt;</p>

                            <div className=''>
                                <TypeAnimation
                                    sequence={[
                                        'Full Stack Developer',
                                        1500,
                                        'Mern Stack Developer',
                                        1000,
                                        'React.js & Next.js Developer',
                                        1000,
                                        'Node.js & Express.js Developer',
                                        1000,
                                        
                                    ]}

                                    speed={50}
                                    className='text-xl  '
                                    repeat={Infinity}
                                />
                            </div>
                        </div>

                        <div className='flex gap-1  mt-2'>
                            <SocialIcon url="https://github.com/Roqais" className="mx-1" />
                            <SocialIcon url="https://www.linkedin.com/in/roqais-mahmood-225a33251/" className='mx-1' />
                            <SocialIcon url="https://web.facebook.com/profile.php?id=100008989536991" className='mx-1' />
                        </div>

                        <div>
                            <a href="/Roqais_s_Resume.pdf" download="Roqais_Resume.pdf">
                                <button className="bg-primary mt-3 hover:bg-[#453490] text-white font-bold py-2 px-4 rounded">
                                    Download My CV
                                </button>
                            </a>
                        </div>


                    </div>
                </div>

            </div>

            <About />




            <Services />
           


            <div className='bg-gray-800'>
                <div className=' max-w-screen-lg md:h-20 mx-auto flex justify-center items-center'>

                    <p className='text-white md:text-[14px] text-xs'>©2024 <span className='underline text-green-400 uppercase'>Roqais Mahmood</span> | Turning Ideas into Interactive Experiences</p>

                </div>


            </div>


        </>
    );
}

export default Home;
