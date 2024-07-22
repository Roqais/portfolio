import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import hannah from "../assets/finalhannah.jpg";
import './home.css';

const Home = () => {
    return (
        <div className='min-h-content max-w-screen-xl mx-auto md:my-14 md:px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
                <div className='order-1 md:order-2 md:col-span-1'>
                    <img src={hannah} className='object-center w-full h-auto' alt="Hannah Viqar" />
                </div>
                <div className='order-2 md:order-1 md:col-span-1 md:mt-16 text-center'>
                    <h1 className='text-6xl tracking-tighter md:text-6xl font-bold mb-4'>Hannah Viqar</h1>
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
                        className='md:text-2xl text-2xl font-medium md:font-normal'
                        repeat={Infinity}
                    />
                    <p className=' md:my-0 my-10  md:py-14 px-6 md:px-12 text-xl tracking-wide text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex accusamus rerum qui temporibus repudiandae cupiditate dolor, laborum doloribus fugiat dicta at eveniet consectetur inventore non. Incidunt, quae ducimus nobis quia culpa aut nisi cum a nemo quo labore commodi quidem harum, possimus hic tempore eveniet optio, et debitis. Mollitia, non!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Home;
