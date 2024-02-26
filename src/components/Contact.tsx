import imageContact from '../assets/images/contact.avif'

export function Contact () {
    return(
        <main className="h-svh bg-four relative p-20">
            <img 
                className="absolute top-0 right-0 bottom-0 left-0 object-cover opacity-5 w-full h-full bg-no-repeat"
                src={imageContact}
                alt="imagem de fundo" 
            />

            <div className='z-10 opacity-80 h-full'>
                <h1 className='text-3xl text-center font-bold '>Contact-me</h1>
                <form className='flex flex-col gap-5 justify-center items-center  h-full text-four font-bold'>
                    <input 
                        className='p-2 rounded-[1rem] w-80 focus:border-none'
                        type="text"  
                        placeholder='Tsype you full name'
                    />
                    <input 
                        className='p-2 rounded-[1rem] w-80 focus:border-none'
                        type="email" 
                        placeholder='Type your better e-mail'
                    /> 
                    <textarea 
                        className='p-2 rounded-[1rem] w-80 focus:border-none'
                        placeholder='Your message'>
                    </textarea>
                    <button className='text-white p-2 rounded-[1rem] w-80 bg-third hover:scale-105'>Submit</button>
                </form>
            </div>
        </main>
    )
}