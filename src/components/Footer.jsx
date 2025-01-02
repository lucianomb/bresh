import React from 'react'
import {FaLinkedin, FaTwitter, FaGithub, FaTwitch} from "react-icons/fa";

const Footer = () => {
    const links = [
        {href: 'https://www.linkedin.com/in/lucianomb/', icon: <FaLinkedin />},
        {href: 'https://github.com/lucianomb', icon: <FaGithub />},
    ]
    return (
        <footer className="w-screen bg-pink-700 py-4 text-blue-50 text-black">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
                <p className="text-center text-sm md:text-left">
                    &copy; Luciano Monegatto 2024. All rights reserved
                </p>

                <div className="flex justify-center gap-4 md:justify-start">
                    {links.map((link) => (
                        <a key={link} href={link.href} target="_blank" rel="noopener noreferrer" className="text-blue-50 transition-colors duration-500 ease-in-out hover:text-white">
                            {link.icon}
                        </a>
                    ))}
                </div>

                <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">
                    Privacy Policy
                </a>
            </div>
        </footer>
    )
}
export default Footer
