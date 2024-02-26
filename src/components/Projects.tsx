import imageAspo from '../assets/images/aspo.png'
import imageRestaurent from "../assets/images/restaurent.png";
import imageNetflix from '../assets/images/netflix.png'
import imageQrCode from "../assets/images/QrGenerate.png";
import imageCalculator from "../assets/images/calculatorIMC.png";
import imageTabuada from "../assets/images/tabuada.png";
import imageContagemRegressiva from "../assets/images/contagemRegressiva.png";
import imageLoginScreen from "../assets/images/loginScreen.png";

export function Projects () {
    return(
        <main className="bg-secound p-20 flex flex-col gap-4">
            <section className="">
                <h1 className="text-3xl font-bold">Projects</h1>
            </section>

            <section className="mt-10 flex flex-wrap justify-center gap-10">
                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageAspo} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>ASPonline</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>
                
                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageRestaurent} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>RestaurantAPP</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageNetflix} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>Netflix</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageQrCode} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>QRCode Generate</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageCalculator} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>Calculator</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>
                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageTabuada} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>Table</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageContagemRegressiva} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>Countdown</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

                <article className='bg-four p-8 rounded w-96'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover'
                            src={imageLoginScreen} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>Login Screen</h1>
                        <p className='text-justify opacity-70'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.</p>

                        <a href='#' className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>

            </section>
        </main>
    )
}
