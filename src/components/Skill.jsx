import React from 'react';
import { useNavigate } from 'react-router-dom';

import cyber from '../assets/cyber.png';
import pen from '../assets/pen.jpg'
import vul from '../assets/vul.jpg'
import web from '../assets/web.jpg'
import net from '../assets/net.jpg'
import doc from '../assets/doc.jpg'

//Penetration Testing


const Skill = () => {

    const navigate = useNavigate();


    const skills = [
        {
            img: cyber,
            title: 'Cyber Security',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
        },


        {
            img: pen,
            title: 'Penetration Testing',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
            
        },


        {
            img: vul,
            title: 'Vulnerability Assessment',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
            
        },
        {
            img: web,
            title: 'Web Application Security',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
        },
        {
            img: net,
            title: 'Network Security',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
        },
        {
            img: doc,
            title: 'Reporting & Documentation',
            button: 'Details',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quidem quo! Repudiandae libero porro omnis temporibus tenetur, obcaecati similique nobis delectus quia necessitatibus rem repellat vero hic, natus sapiente ab.',
        }
    ];

    return (
        <div className='mx-auto pb-20 bg-slate-200 '>
            <div className='flex flex-col justify-center h-40 items-center'>
                <h1 className='uppercase mb-2 text-3xl font-bold text-red-900 '>my skills</h1>
                <p className='tracking-wider'>I do all kinds of neat stuff</p>
            </div>
            <div className='grid md:grid-cols-3 text-center md:px-20 md:gap-8 gap-10'>
                {skills.map((skill, index) => (
                    <div key={index} className='col-span-1 bg-white rounded-xl py-10 h-88 transform transition-transform duration-300 hover:scale-105'>
                        <div className='flex flex-col items-center'>
                            <img src={skill.img} className='h-auto rounded-full w-24 transform transition-transform duration-300 hover:scale-110' alt={skill.title} />
                            <h1 className='mt-3 uppercase font-bold my-7 text-lg'>{skill.title}</h1>
                            <p className='text-center px-8'>{skill.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skill;
