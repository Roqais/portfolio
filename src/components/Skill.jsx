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
            description: 'Cybersecurity involves protecting systems, networks, and programs from digital attacks. My expertise in this area includes implementing security measures, monitoring for breaches, and responding to cyber threats to ensure the integrity, confidentiality, and availability of information.',
        },


        {
            img: pen,
            title: 'Penetration Testing',
            button: 'Details',
            description: 'Penetration testing, or ethical hacking, is a proactive approach to identifying vulnerabilities in systems and applications. I simulate cyber-attacks to uncover security weaknesses, providing actionable insights to strengthen defenses against real-world threats.',
            
        },
        {
            img: web,
            title: 'Web Application Security',
            button: 'Details',
            description: 'Web application security focuses on protecting web applications by detecting and mitigating vulnerabilities. I employ various techniques and tools to secure web applications against threats such as SQL injection, cross-site scripting, and other common attacks.',
        },
        {
            img: vul,
            title: 'Vulnerability Assessment',
            button: 'Details',
            description: 'Vulnerability assessment is a systematic process of identifying, quantifying, and prioritizing security vulnerabilities in IT systems. My skills include conducting thorough scans, analyzing results,',
        },
        {
            img: net,
            title: 'Network Security',
            button: 'Details',
            description: 'Network security involves safeguarding the integrity and usability of network and data. I implement security protocols, monitor network traffic, and respond to threats to prevent unauthorized access, data breaches, and other security incidents.',
        },
        {
            img: doc,
            title: 'Reporting & Documentation',
            button: 'Details',
            description: 'Accurate reporting and documentation are crucial in cybersecurity. I create detailed reports on findings from security assessments, including recommendations for improvement, and maintain comprehensive records of security activities to ensure compliance and facilitate communication.',
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
