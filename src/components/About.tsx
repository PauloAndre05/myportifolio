import imgAbout from '../assets/images/Perfil.jpg'
import imageHtml from '../assets/images/html.png'
import imageCSS from "../assets/images/css.png";
import imageReact from '../assets/images/react.png'
import imageTailwindCSS from '../assets/images/tailwindcss.png'
import imageStyledComponent from '../assets/images/styledComponents.jpg'
import imageGit from '../assets/images/git.png'
import imageGitHub from '../assets/images/gitHub.png'
import imageFigma from '../assets/images/figma.png'
import imageJs from '../assets/images/js.png';
import imageTs from '../assets/images/ts.png';
import { 
    FaFacebook, 
    FaFigma, 
    FaInstagram, 
    FaLinkedin, 
    FaGithub } from 'react-icons/fa';

export function About () {
    return(
        <main className="bg-primary flex flex-col p-20 max-sm:p-3 max-sm:py-16">
{/*             <h1 className="text-3xl text-right border-b-4 p-4 text-third font-bold">Profile</h1>
 */}            <section className="flex justify-between mt-20 max-sm:flex-col max-sm:mt-10">
                <article className='flex justify-center'>
                    <div className='group w-96 rounded overflow-hidden max-sm:w-60 max-sm:h-60 max-sm:rounded-full relative hover:cursor-pointer'>
                        <div className='hidden justify-center items-center absolute w-full h-full bg-[#00000062] transition-all duration-1000 group-hover:flex'>
                            <div className='flex flex-col w-full h-full pb-4 justify-end items-center gap-5'>
                                <h1 className='font-semibold text-[1.1rem] w-[80%] text-center'>Folow me in my social media</h1>
                                <div className='flex gap-2 flex-wrap justify-center text-2xl'>
                                    <a 
                                        href="https://github.com/pauloandre05" className='group border p-2 rounded-full'> 
                                        <FaGithub className=''/>
                                    </a>
                                    <a href="#" className='group border p-2 rounded-full'>
                                        <FaLinkedin />
                                    </a>
                                    <a href="#" className='group border p-2 rounded-full'>
                                        <FaFacebook />
                                    </a>

                                    <a href="#" className='group border p-2 rounded-full'>
                                        <FaInstagram />
                                    </a>

                                    <a href="#" className='group border p-2 rounded-full'>
                                        <FaFigma />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <img 
                            className='w-full h-full object-cover'
                            src={imgAbout} 
                            alt="About Image" 
                        />   
                    </div>
                </article>
                
                <article className="w-[50%] text-justify flex flex-col gap-5 max-sm:w-full max-sm:mt-10">
                    <h2 className="text-third font-bold uppercase max-sm:text-center">Paulo Samuel António André</h2>
                    <div className='flex flex-col'>
                        <div className='flex gap-2'>
                            <span className='font-bold uppercase opacity-800 max-sm:text-[.8rem]'>Nationality :</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase max-sm:text-[.75rem]'>Angolan</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold uppercase opacity-800 max-sm:text-[.8rem]'>Bithday :</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase max-sm:text-[.75rem]'>01/07/2002</span>
                        </div>
                        <div className='flex gap-2'>
                            <span className='font-bold uppercase opacity-800 max-sm:text-[.8rem]'>Status :</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase max-sm:text-[.75rem]'>Single</span>
                        </div>  
                        
                    </div>

                    <h2 className="text-third font-bold uppercase max-sm:text-center">About system developer</h2>
                    <p className='opacity-50'>Highly skilled and motivated software developer with solid experience in user interface development, application development, and continuous improvement. Proficient in technologies such as HTML, CSS, JavaScript, TypeScript, ReactJS, Next.JS, Node.JS, Styled-Components, Tailwind CSS, Git, and GitHub. Committed to identifying areas for enhancing user experience and developing new features to improve application functionality.</p>
                    

                    <div className='flex gap-4 mt-4 overflow-hidden'>
                        <div className='animate-marquee flex gap-5 w-full'>
                            <img
                                className='rounded-[100%] w-14 h-12 max-sm:w-12 max-sm:h-10'
                                src={imageHtml}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-14 h-12 object-contain max-sm:w-12 max-sm:h-10'
                                src={imageCSS}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageJs}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageTs}
                                alt="" 
                            />
                            
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageReact}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageTailwindCSS}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageStyledComponent}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageGit}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageGitHub}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12 max-sm:w-10 max-sm:h-10'
                                src={imageFigma}
                                alt="" 
                            />
                        </div>
                    </div>
                </article>

            </section>
        </main>
    )
}