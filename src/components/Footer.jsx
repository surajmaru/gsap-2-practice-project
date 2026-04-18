import React from 'react'
import { FaDiscord } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {

    const links = [
        {href: "https://surajthedev.vercel.app/", icon: <FaExternalLinkAlt />},
        {href: "https://surajthedev.vercel.app/", icon: <FaDiscord />},
        {href: "https://surajthedev.vercel.app/", icon: <FaGithub />},
        {href: "https://surajthedev.vercel.app/", icon: <FaInstagram />}
    ]

  return (
    <footer className='w-screen bg-violet-300 py-4 text-black'>
        <div className='container flex flex-col mx-auto items-center justify-between gap-4 px-6 md:flex-row'>
            <p className='text-center text-sm md:text-left'>&copy; Suraj 2026. All rights reserved</p>

            <div className='flex justify-center gap-4 md:justify-start'>
                {
                    links.map((link) => (
                        <a key={link} target='_blank' href={link.href} rel='noopener noreferrer' className='text-black transition-colors duration-500 ease-in-out hover:text-white'>
                            {link.icon}
                        </a>
                    ))
                }
            </div>

            <a href='#privacy-policy' className='text-center text-sm hover:underline md:text-right'>
                Privacy Policy
            </a>
        </div>
    </footer>
  )
}

export default Footer