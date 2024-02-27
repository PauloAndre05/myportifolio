export function Foorter () {
    return(
    <footer className="h-svh bg-four p-20 flex items-center max-sm:p-3 max-sm:h-full max-sm:py-16">
            <section className="flex flex-col flex-wrap gap-10 max-w-[100%]">
                <div className="flex justify-between gap-10 flex-wrap max-sm:flex-col">
                    <div className="flex flex-col gap-5 items-center ">
                        <h1 className="text-2xl">Páginas</h1>
                        <div className="flex flex-col text-third gap-2">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Work</a>
                            <a href="#">Projects</a>
                        </div>
                    </div>
                    
                    <div className="flex flex-col gap-5 items-center">
                        <h1 className="text-2xl">Contact</h1>
                        <div className="flex flex-col text-third gap-2">
                            <a href="#">pauloandrepaulinho05@gmail.com</a>
                            <a href="#">https://linkedIn/pauloandre</a>
                            <a href="#">https://github.com/pauloandre05</a>
                            <a href="#"></a>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center ">
                        <h1 className="text-2xl">Newslleter</h1>
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
                    </div>
                </div>

                <div className="">
                    Hi, I'm currently studind Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium exercitationem ducimus mollitia eveniet recusandae minus repudiandae voluptates excepturi cupiditate, facilis quidem consequuntur tenetur sapiente voluptatibus quas illo, pariatur cum. Recusandae.
                </div> 
            </section>

            <section className=''>
                
            </section>
        </footer>
    )
}