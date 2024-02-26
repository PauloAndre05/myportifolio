import imgBanner from '../assets/images/cropped-foto.jpg'

export function Banner () {
    return(
        <main className="h-[100vh] flex p-20 pt-44 justify-between relative items-center">
            <img 
                src={imgBanner} 
                className="absolute inset-0 w-full h-full object-cover opacity-5" 
                alt="Imagem de Fundo"
            />
            <div className="flex flex-col gap-4 z-10">
                <h1 className="text-6xl font-bold text-third">Front-End Developer</h1>
                <p className="text-xl">Paulo Samuel António André</p>
                <p className="text-xl">HTML * CSS * TYPESCRIPT</p>
                <button className='w-40 p-2 rounded-full bg-four font-bold hover:opacity-50 '>Download CV</button>
            </div>

            <div className='w-[30rem] h-[30rem] rounded-[50%]'>
                <img 
                    className='w-full h-full rounded-[50%] opacity-70'
                    src={imgBanner} 
                    alt="" 
                />
            </div>
        </main>
    )
}