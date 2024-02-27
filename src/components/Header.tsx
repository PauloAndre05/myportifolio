import imgPerfil from '../assets/images/cropped-foto.jpg';
import { Banner } from './Banner';

export function Header () {
    return(
        <main>
            <section className="flex justify-between items-center px-[5rem] py-[1rem] bg-secound fixed right-0 left-0 z-50 max-sm:px-3 max-sm:py-4">
                <a href='#' className="flex items-center gap-2">
                    <div className='w-12 rounded-[100%] overflow-hidden max-sm:w-11'>
                        <img
                            className='animate-spinSlow w-full rounded-[100%'
                            src={imgPerfil}
                            alt="Profile Image"
                        />
                    </div>
                    <h1 className="font-bold text-[1.5rem]  border-b-4 max-sm:text-[1.3rem]">Paulo</h1>
                </a>
                <nav className='max-sm:hidden'>
                    <ul className="flex items-center gap-7 text-[1.2rem]">
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
            </section>
            
            <Banner />
        </main>
    )
}