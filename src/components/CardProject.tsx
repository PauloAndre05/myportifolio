interface CardProps {
    image: string,
    title: string,
    description: string
    link: string 
}

export function CardProject ({image, title, description, link}: CardProps) {
    return(
        <article className='shadow shadow-third p-8 rounded-[.4rem] w-80 hover:scale-110 cursor-zoom-in max-sm:w-full max-sm:p-5 max-sm:hover:scale-105'>
                    <div className=' w-full overflow-hidden rounded-[.4rem] max-sm:shrink-0'>
                        <img 
                            className='w-full object-cover'
                            src={image} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-[1.1rem] text-third'>{title}</h1>
                        <p className='text-justify opacity-40'>{description}</p>

                        <a href={link} className='text-center tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>
    )
}