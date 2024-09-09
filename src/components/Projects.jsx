import React, { useState } from 'react';
import devsHub from '../assets/projects/devsHub.png';
import bookmark from '../assets/projects/bookmark.png';
import w from '../assets/projects/w.png';
import nextcent from '../assets/projects/nextcent.png';
import news from '../assets/projects/new.png';
import weather from '../assets/projects/weather.png';
import hannah from '../assets/projects/hannah-portfolio.png';
import pakpride from '../assets/projects/pakpride.png';
import echowords from '../assets/projects/echowords.png';
import task from '../assets/projects/task.png';


const Projects = () => {
    // Array of portfolio items with categories
    const portfolioItems = [
        {
            href: 'https://next-js-echowords.vercel.app/',
            imgSrc: echowords,
            altText: 'Next JS application',
            category: 'Dynamic Projects',
        },
        {
            href: 'https://roqais-weather-app.netlify.app/',    
            imgSrc: weather,
            altText: 'React Weather app',
            category: 'Dynamic Projects',
        },
        {
            href: 'https://roqais-reactjs-task-tracker.netlify.app/',    
            imgSrc: task,
            altText: 'React Task Tracker app',
            category: 'Dynamic Projects',
        },
        {
            href: 'https://hannah-viqar-portfolio.vercel.app/',
            imgSrc: hannah,
            altText: 'React Weather app',
            category: 'Practice Projects',
        },
        {
            href: 'https://pak-pride-competition.vercel.app/',
            imgSrc: pakpride,
            altText: 'Landing Page competition',
            category: 'Practice Projects',
        },
        {
            href: 'https://bookmark-landing-page-tailwindcss.netlify.app/',
            imgSrc: bookmark,
            altText: 'Bookmark landing page',
            category: 'Static Projects',
        },
        {
            href: 'https://css-bootstrap-responsive-web.netlify.app/',
            imgSrc: devsHub,
            altText: 'DevsHub responsive website',
            category: 'Static Projects',
        },
        {
            href: 'https://news-home-page-tailwindcss.netlify.app/',
            imgSrc: w,
            altText: 'News homepage',
            category: 'Static Projects',
        },
        {
            href: 'https://roqais-react-bootstrap-practice.netlify.app/',
            imgSrc: nextcent,
            altText: 'React Bootstrap practice',
            category: 'Static Projects',
        },
        {
            href: 'https://prac-material-ui-react.netlify.app/',
            imgSrc: news,
            altText: 'React Material UI practice',
            category: 'Practice Projects',
        },
        
    ];

    // State for selected category
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Function to handle category change
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    // Filtered projects based on selected category
    const filteredProjects = selectedCategory === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === selectedCategory);

    return (
        <div className="container py-16 md:py-20" id="portfolio">
            <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
                Check out my Portfolio
            </h2>
            <h3 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
                Here's what I have done in the past
            </h3>

            {/* Category Selector */}
            <div className="text-center mt-8 mb-12">
                {['All', 'Static Projects', 'Dynamic Projects', 'Practice Projects'].map((category) => (
                    <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`mx-2 px-4 py-2 border-b-2 ${selectedCategory === category ? 'border-blue-600' : 'border-transparent'} text-black transition-colors duration-300`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Projects Grid */}
            <div className="mx-auto grid w-full grid-cols-1 px-6 gap-8 pt-12 sm:w-3/4 md:gap-10 lg:w-full lg:grid-cols-2">
                {filteredProjects.map((item, index) => (
                    <a
                        key={index}
                        href={item.href}
                        target="_blank" // Open link in new tab
                        rel="noopener noreferrer" // Improve security
                        className="mx-auto transform transition-all hover:scale-105 md:mx-0"
                    >
                        <img src={item.imgSrc} className="w-full max-w-full h-full shadow-xl" alt={item.altText} />
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Projects;
