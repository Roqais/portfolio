import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
    const form = useRef();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const [msg, setMsg] = useState("Message Sent Successully")

    const [check, setCheck] = useState(false)

    const [loading, setLoading] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validate = () => {
        const newErrors = {};
        // Check if name is empty or is a number
        if (!formData.name) {
            newErrors.name = 'Name is required';
        } else if (!isNaN(formData.name)) {
            newErrors.name = 'Name cannot be a number';
        }

        // Check if email is empty
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

        // Check if message is empty
        if (!formData.message) {
            newErrors.message = 'Message is required';
        }

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = validate();

        if (Object.keys(newErrors).length === 0) {
            setLoading(true); // Set loading to true when submission starts

            emailjs
                .sendForm('service_psxtxub', 'template_0ca1tkc', form.current, {
                    publicKey: '7_Mu7ToWt_9sZDD1D',
                })
                .then(
                    () => {
                        setLoading(false);
                        setCheck(true)
                        setTimeout(() => {
                            setCheck(false)
                        }, 2000);
                        setFormData({
                            name: "",     
                            email: "",    
                            message: ""   
                          });
                          
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900" id="contact">
            {check && 
                <p className='border mt-5 text-xl text-orange-500 font-bold  p-4 flex justify-center items-center'>{msg}</p>
            }
            {loading && 
                <p className='border mt-5 text-xl text-blue-500 font-bold  p-4 flex justify-center items-center'>Sending...</p>
            }
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 text-center">
                <h2 className="text-4xl font-bold dark:text-gray-100">Contact Me</h2>
                <p className="pt-6 pb-6 text-base max-w-2xl text-center m-auto dark:text-gray-400">
                    Want to get in touch? Choose an option below, and I'll be happy to connect with you.
                </p>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 grid md:grid-cols-2 lg:grid-cols-2 gap-y-8 md:gap-x-8 md:gap-y-8 lg:gap-x-8 lg:gap-y-16">
                <div>
                    <h2 className="text-lg font-bold dark:text-gray-100">Contact Details</h2>
                    <p className="max-w-sm mt-4 mb-4 dark:text-gray-400">
                        Have something to say? Feel free to reach out via the options below.
                    </p>
                    <div className="flex items-center mt-8 space-x-2 text-dark-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                        <a href="mailto:hannahviqar13@gmail.com">hannahviqar13@gmail.com</a>
                    </div>
                    <div className="flex items-center mt-2 space-x-2 text-dark-600 dark:text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path d="M4.98 3.5a2.49 2.49 0 00-2.49 2.49v14.02A2.49 2.49 0 004.98 22.5h14.04a2.49 2.49 0 002.49-2.49V5.99a2.49 2.49 0 00-2.49-2.49H4.98zM9 8.25h2.25v1.5H9V8.25zM9 10.875h2.25v6.75H9v-6.75zM16.5 15.375v-3a1.125 1.125 0 00-1.125-1.125c-.69 0-1.125.435-1.125 1.125v3h-2.25v-6.75h2.25v.917a2.775 2.775 0 012.49-1.375c1.383 0 2.25.865 2.25 2.488v4.72H16.5z" />
                        </svg>
                        <a href="https://www.linkedin.com/in/hannah-viqar-b8264b265/" target="_blank" rel="noopener noreferrer">Hannah Viqar</a>
                    </div>
                </div>
                <div>
                    <form ref={form} onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                autoComplete="off"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                name="name"
                            />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                        </div>

                        <div className="mb-5">
                            <label htmlFor="email_address" className="sr-only">Email Address</label>
                            <input
                                id="email_address"
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                autoComplete="off"
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white rounded-md outline-none dark:placeholder:text-gray-200 dark:bg-gray-900 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                name="email"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div className="mb-3">
                            <textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 placeholder:text-gray-800 dark:text-white dark:placeholder:text-gray-200 dark:bg-gray-900 rounded-md outline-none h-36 focus:ring-4 border-gray-300 focus:border-gray-600 ring-gray-100 dark:border-gray-600 dark:focus:border-white dark:ring-0"
                                name="message"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                        </div>
                        <button
                            type="submit"
                            value="Send "
                            className="w-full py-4 font-semibold text-white transition-colors bg-gray-800 rounded-md dark:bg-gray-700 dark:hover:bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-offset-2 focus:ring-2 focus:ring-gray-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
