import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaBriefcase, FaGraduationCap, FaStar } from 'react-icons/fa';

const Experience = () => {
    return (
        <>
            <div className='bg-gray-800'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        date="2024 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >
                        <h3 className="text-xl font-semibold text-white mb-1">React & Next JS Fellow</h3>
                        <h4 className="text-lg text-gray-200 mb-2">Islamabad</h4>
                        <h5 className="text-md underline mb-2 hover:text-gray-300">
                            <a href="https://www.bytewiseltd.com/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                Bytewise Limited
                            </a>
                        </h5>
                        <p className="text-gray-200">
                            - Developed dynamic web apps with React & Next.js.<br />
                            - Styled interfaces using Tailwind CSS, Bootstrap, and Material UI.<br />
                            - Implemented responsive, user-friendly designs.<br />
                        </p>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--work text-white"
                        date="June-2023 - Dec-2023"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaBriefcase />}
                    >   <div className='text-black'>
                            <h3 className="text-xl font-semibold mb-1">Mern Stack Intern</h3>
                            <h4 className="text-lg  mb-2 text-gray-500">Islamabad</h4>
                            <h5 className="text-md underline mb-2 hover:text-gray-500">
                                <a href="https://www.devmind.pk" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    DEVMIND
                                </a>
                            </h5>
                            <p className="text-gray-500">
                                frontend development, Frontend Desinging, Backend Development, API Development, Database Development

                            </p>
                        </div>
                    </VerticalTimelineElement>



                    <VerticalTimelineElement
                        className="vertical-timeline-element--education text-white"
                        date="2020 - 2024"
                        iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                        icon={<FaGraduationCap />}
                    > <div className='text-black'>
                            <h3 className="text-xl font-semibold mb-1">Bachelor of Science in Software Engineering</h3>
                            <h4 className="text-lg text-gray-500 mb-2">Peshawar</h4>
                            <h5 className="text-md underline mb-2 hover:text-gray-500">
                                <a href="https://imsciences.edu.pk/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                                    Institute of Management and Sciences (IMSciences)
                                </a>
                            </h5>
                            <p className="text-gray-500">
                                Software Development, Programming Fundamentals, Data Structure,
                                Object-Oriented Programming (OOP), Databases
                            </p>
                        </div>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                        icon={<FaStar />}
                    />
                </VerticalTimeline>
            </div>
        </>
    )
}

export default Experience;
