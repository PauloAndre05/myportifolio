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

export function About () {
    return(
        <main className="bg-primary flex flex-col p-20 max-sm:p-3 max-sm:py-16">
{/*             <h1 className="text-3xl text-right border-b-4 p-4 text-third font-bold">Profile</h1>
 */}            <section className="flex justify-between mt-20 max-sm:flex-col max-sm:mt-10">
                <article className='w-[30%] max-sm:w-full opacity-80 rounded-[.4rem] overflow-hidden'>
                    <div className=''>
                        <img src={imgAbout} alt="About Image" />   
                    </div>
                </article>
                
                <article className="text-[1.3rem] w-[50%] text-justify max-sm:w-full max-sm:mt-10">
                    <h2 className="text-third font-bold text-[1.5rem] mb-4">Paulo Samuel António André</h2>
                    <div className='flex justify-between'>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold uppercase text-[1rem] opacity-800'>Nationality</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase'>Angolan</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold uppercase text-[1rem] opacity-800'>Bithday</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase'>01/07/2002</span>
                        </div>
                        <div className='flex flex-col items-center'>
                            <span className='font-bold uppercase text-[1rem] opacity-800'>Status</span>
                            <span className='text-secound font-bold text-[.9rem] uppercase'>Single</span>
                        </div>
                    </div>
                    <p className='opacity-50'>Highly skilled and motivated software developer with solid experience in user interface development, application development, and continuous improvement. Proficient in technologies such as HTML, CSS, JavaScript, TypeScript, ReactJS, Next.JS, Node.JS, Styled-Components, Tailwind CSS, Git, and GitHub. Committed to identifying areas for enhancing user experience and developing new features to improve application functionality.</p>
                    

                    <div className='flex gap-4 mt-4 overflow-hidden'>
                        <div className='animate-marquee flex gap-5 w-full'>
                            <img
                                className='rounded-[100%] w-14 h-12'
                                src={imageHtml}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-14 h-12 object-contain'
                                src={imageCSS}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageJs}
                                alt="" 
                            />

                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageTs}
                                alt="" 
                            />
                            
                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageReact}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageTailwindCSS}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageStyledComponent}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageGit}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12'
                                src={imageGitHub}
                                alt="" 
                            />
                            <img
                                className='rounded-[100%] w-12 h-12'
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