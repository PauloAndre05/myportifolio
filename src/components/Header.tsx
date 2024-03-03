import { useState } from 'react';
import imgPerfil from '../assets/images/cropped-foto.jpg';
import { Banner } from './Banner';

import { IoCloseOutline, IoCodeSlashOutline } from "react-icons/io5";

export function Header () {
    const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
        setIsOpen(!isOpen);
      };

      const closeMenuToScreen = () => {
        setIsOpen(false)
      }

    return(
        <header>
            <section className="flex justify-between items-center px-[5rem] py-[1rem] bg-secound fixed right-0 left-0 z-50 max-sm:px-3 max-sm:py-4 max-sm:bg-transparent max-sm:absolute">
                <a href='#' className="flex items-center gap-2">
                    <div className='w-12 rounded-[100%] overflow-hidden max-sm:w-8'>
                        <img
                            className='animate-spinSlow w-full rounded-[100%'
                            src={imgPerfil}
                            alt="Profile Image"
                        />
                    </div>
                    <h1 className="font-bold text-[1.5rem]  border-b-4 border-third max-sm:text-[1.5rem]  tracking-wider max-sm:border-none">Paulo</h1>
                </a>
                <nav className='max-sm:hidden'>
                    <ul className="flex items-center gap-7 text-[1rem] uppercase">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Work</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </nav>

                <div className="flex flex-col justify-center items-center max-sm:hidden">
            
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="font-bold text-[1.5rem]">Software Developer</h1>
                    </div>
            
                    <div className="flex gap-3 ">
                            <a href="#" className="px-5 flex justify-center items-center pb-1 bg-third rounded-full hover:opacity-80">
                                LinkedIn
                            </a>
                            <a href="https://github.com/pauloandre05" target='_blank' className="px-5 flex justify-center items-center pb-1 bg-primary rounded-full hover:bg-white hover:text-black">
                                GitHub
                            </a>
                    </div>
                </div>

                {/* SECÇÃO MENU MOBILE*/}

                {
                    isOpen && 
                    <div
                        onClick={closeMenuToScreen} 
                        className='fixed bg-black h-full left-0 bottom-0 top-0 right-0 opacity-60'></div>
                }

                <div
                    onClick={toggleMenu} 
                    className='flex flex-col items-center fixed right-3 bg-third py-1 px-2 shadow-md rounded-[1rem] md:hidden hover:scale-105 cursor-pointer '>
                    {isOpen ? 
                        <IoCloseOutline className=' font-bold text-[1.9rem]' /> :
                        <div className='flex flex-col items-center justify-center'>
                            <IoCodeSlashOutline className='text-[1.1rem] font-bold'/>
                            <h6 className='uppercase font-bold text-[10px]'>Menu</h6>
                        </div>
                    }       
                    
                </div>

                {
                    isOpen && 
                    <div
                    className=' fixed right-3 left-3 top-16 p-3 rounded-[1rem] bg-[#2F323A] shadow-sm shadow-third'>
                    <nav className=''>
                        <ul className=" flex flex-col gap-3 w-full text-center text-[14px]">
                            <a href="#" className='py-2' onClick={closeMenuToScreen}>Home</a>
                            <a href="#" className='py-2' onClick={closeMenuToScreen}>About</a>
                            <a href="#" className='py-2' onClick={closeMenuToScreen}>Work</a>
                            <a href="#" className='py-2' onClick={closeMenuToScreen}>Projects</a>
                        </ul>
                    </nav>

                    <div className="flex justify-center items-center flex-col mt-7 gap-3">
                        <h1 className="font-bold">Software Developer</h1>
                        <div className="flex gap-3 text-[.8rem]">
                                <a 
                                    onClick={closeMenuToScreen}
                                    href="#" 
                                    target='_blank'
                                    className="px-5 flex justify-center items-center bg-third py-1 rounded-full hover:opacity-80">
                                    LinkedIn
                                </a>

                                <a 
                                    onClick={closeMenuToScreen}
                                    href="https://github.com/pauloandre05" target='_blank' 
                                    className="px-5 flex justify-center items-center bg-primary rounded-full py-1 hover:bg-white hover:text-black">
                                    GitHub
                                </a>
                        </div>
                    </div>
                </div>
                }
                
            </section>
            
            <Banner />
        </header>
    )
}