import imgBanner from '../assets/images/cropped-foto.jpg'

export function Banner () {
    return(
        <main className="h-[100vh] flex p-20 pt-44 justify-between items-center relative max-sm:p-0 w-full max-sm:px-3 max-sm:h-[90svh]">
            <img 
                src={imgBanner} 
                className="absolute inset-0 w-full h-full bg-no-repeat object-cover opacity-5 max-sm:opacity-20" 
                alt="Imagem de Fundo"
            />
            <div className="flex flex-col gap-4 z-10 ">
                <h1 className="text-6xl font-bold text-third animate-fadeIn max-sm:text-5xl">Front-End Developer</h1>
                <p className="animate-fadeIn">Paulo Samuel António André</p>
                <p className="animate-fadeIn">HTML * CSS * TYPESCRIPT</p>
                <button className='w-40 p-2 rounded-full bg-four hover:opacity-50 animate-fadeIn'>Download CV</button>
            </div>

            <div className='w-[30rem] h-[30rem] rounded-[50%]  max-sm:hidden'>
                <img 
                    className='w-full h-full rounded-[50%] opacity-70'
                    src={imgBanner} 
                    alt="" 
                />
            </div>
        </main>
    )
}