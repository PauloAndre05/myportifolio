import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import imageProfile from '../assets/images/cropped-foto.jpg'
import { IoCodeSlashOutline } from "react-icons/io5";

export function Foorter () {
    return(
    <footer className=" bg-four p-20 flex flex-col max-sm:px-3 max-sm:py-16">
                <div className="flex gap-20 justify-center flex-wrap max-sm:flex-col max-sm:gap-10">
                    <div className="flex flex-col gap-2">
                        <div className="flex gap-2 items-center">
                            <img
                                className="w-5 h-5 rounded-full"
                                src={imageProfile}
                                alt="image paulo samuel for Footer"
                            />
                            <h1 className="text-[17px] font-bold opacity-90">Developer</h1>
                        </div>
                        <p className="text-[13px] text-white opacity-90">&copy; 2024</p>
                    </div>

                    <div className="flex gap-28">
                        <div className="flex flex-col gap-2 ">
                            <h1 className="font-bold text-lg text-[17px opacity-90">Pages</h1>
                            <div className="flex flex-col text-white gap-2 opacity-90 text-[13px] max-sm:gap-1">
                                <a href="#">Home</a>
                                <a href="#">About</a>
                                <a href="#">Work</a>
                                <a href="#">Projects</a>
                            </div>
                        </div>
                        <div>
                            <h1 className="font-bold text-lg text-[17px] opacity-90">Contact</h1>
                            <div className="flex flex-col text-whitw gap-2 opacity-90 text-[.9rem] max-sm:text-left max-sm:gap-1">
                                <a href="#">pauloandrepaulinho05@gmail.com</a>
                                <a href="#">https://linkedIn/pauloandre</a>
                                <a href="#">https://github.com/pauloandre05</a>
                                <a href="#"></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 ">
                       
                    </div>

                    <div className="flex flex-col gap-5 ">
                        <h1 className="font-bold text-lg text-[17px] opacity-90">Qualities</h1>
                        <div className="flex flex-col text-whitw gap-2 opacity-90 text-[.9rem] max-sm:text-left max-sm:gap-1">
                            <a href="#">Time managment</a>
                            <a href="#">Troubleshooting</a>
                            <a href="#">Easy to adapt</a>
                            <a href="#">Agil and practical</a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-between max-sm:items-start">
                        <div ><IoCodeSlashOutline className="text-[4rem] text-third shadow-xl"/> </div>
                        <div className="flex text-white gap-4 text-2xl opacity-90">
                            <a href="#"><FaTwitter /> </a>
                            <a href="#"><FaInstagram /> </a>
                            <a href="#"><FaLinkedin /> </a>
                            <a href="#"><FaGithub /></a>
                        </div>
                    </div>

                   {/*  <div className="flex flex-col gap-5 items-center opacity-80">
                        <h1 className="font-bold text-lg">Newslleter</h1>
                        <div className="flex flex-col text-third gap-2">
                            <form>
                                <div className="flex flex-col gap-2">
                                    <input 
                                        className="p-2 rounded-[1rem] w-60 focus:border-none text-black"
                                        type="email" 
                                        placeholder="Type your better e-mail"
                                    />
                                    <button className='text-white p-2 rounded-[1rem] w-60 bg-third hover:scale-105'>Submit</button>
                                </div>
                            </form>
                        </div>
                    </div> */}  
                </div>

               {/*  <div className="w-[50%] text-justify max-sm:w-full">
                    <p>Hi, I'm currently studind Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ducimus mollitia eveniet recusandae minus repudiandae voluptates excepturi cupiditate, facilis quidem consequuntur tenetur sapiente voluptatibus quas illo, pariatur cum. Recusandae.</p>
                </div>  */}


         </footer>
    )
}