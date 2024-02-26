interface CardProps {
    image: string,
    title: string,
    description: string
    link: string 
}

export function CardProject ({image, title, description, link}: CardProps) {
    return(
        <article className='bg-four p-8 rounded-[1rem] w-80 hover:scale-110 cursor-zoom-in'>
                    <div className=' w-full overflow-hidden rounded-sm'>
                        <img 
                            className='w-full object-cover rounded-[1rem]'
                            src={image} 
                            alt="imageAspoProject" 
                        />
                    </div>

                    <div className='flex flex-col gap-2 mt-2 w-full'>
                        <h1 className='font-bold text-2xl text-third'>{title}</h1>
                        <p className='text-justify opacity-70'>{description}</p>

                        <a href={link} className='font-bold tracking-wider bg-secound p-2 rounded hover:bg-white hover:text-black'>View Project</a>
                    </div>
                </article>
    )
}