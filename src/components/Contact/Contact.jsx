
import { FaFacebook, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail, HiOutlineLocationMarker } from "react-icons/hi";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
    const form = useRef();
    //import.meta.env.VITE_SERVICE_ID
    const ServiceId = import.meta.env.VITE_SERVICE_ID
    const TemplateId = import.meta.env.VITE_TEMPLATE_ID
    const PublicKey = import.meta.env.VITE_PUBLIC_KEY

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(ServiceId, TemplateId, form.current, PublicKey)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Email Sent Successfully',
                    showConfirmButton: false,
                    timer: 1500
                });
                form.current.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 '>

                <div className='mb-10' data-aos="fade-right">
                    <img className='w-[100%] h-auto' src="https://i.ibb.co/6YxdMjW/94599-contact-us.gif" alt="" data-aos="zoom-in" />
                </div>
                {/* form */}
                <div data-aos="fade-left">
                    <form ref={form} onSubmit={sendEmail} className='mt-10'>
                        <div className="mb-6">
                            <label className="block font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <input
                                className="input input-bordered  w-full py-2 px-3"
                                id="name"
                                type="text"
                                name="user_name"
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block  font-bold mb-2" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="input input-bordered   w-full py-2 px-3"
                                id="email"
                                type="email"
                                name="user_email"
                                placeholder="Your Email"
                                required
                            />
                        </div>

                        <div className="mb-6">
                            <label className="block font-bold mb-2" htmlFor="message">
                                Message
                            </label>
                            <textarea
                                className="border rounded w-full py-2 px-3"
                                id="message"
                                name="message"
                                placeholder="Your Message"
                                rows="6"
                                required
                            />
                        </div>
                        <div className="flex items-center justify-center">
                            <input type="submit" value="Send"
                                className="btn btn-success text-white font-bold py-2 px-20 rounded-lg"
                            />

                        </div>
                    </form>
                </div>
            </div>

        </>
    );
};

export default Contact;