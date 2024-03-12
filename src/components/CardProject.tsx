interface CardProps {
    image: string,
    title: string,
    description: string
    /* link: string  */
}

export function CardProject ({image, title, description}: CardProps) {
    return(
        <article className='shadow-sm p-6 bg-primary rounded-[.3rem] w-80 cursor-zoom-in transition-all duration-500 max-sm:w-full max-sm:p-5 hover:scale-105'>
                    <div className=' w-full overflow-hidden rounded-[.3rem] max-sm:shrink-0'>
                        <img 
                            className='w-full object-cover'
                            src={image} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-7 w-full'>
                        <h1 className='font-bold  text-third'>{title}</h1>
                        <p className=' text-justify opacity-40'>{description}</p>                        
                    </div>
                </article>
    )
}