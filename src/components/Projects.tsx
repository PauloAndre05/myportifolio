import imageAspo from '../assets/images/aspo.png'
import imageRestaurent from "../assets/images/restaurent.png";
import imageNetflix from '../assets/images/netflix.png'
import imageQrCode from "../assets/images/QrGenerate.png";
import imageCalculator from "../assets/images/calculatorIMC.png";
import imageTable from "../assets/images/tabuada.png";
import imageContagemRegressiva from "../assets/images/contagemRegressiva.png";
import imageLoginScreen from "../assets/images/loginScreen.png";
import imageHospital from '../assets/images/hospital.png'
import { CardProject } from './CardProject';

export function Projects () {
    return(
        <main className="bg-secound p-20 flex flex-col gap-4 max-sm:p-3 max-sm:py-16">
            <section className="">
                <h1 className="text-3xl font-bold text-center">Projects</h1>
            </section>

            <section className="mt-10 flex flex-wrap gap-10 justify-center">

                <CardProject 
                    image={imageAspo}
                    title='ASPonline'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum .'
                    link='https://github.com/PauloAndre05/ASPonline'
                />

                <CardProject 
                    image={imageRestaurent}
                    title='RestaurantAPP'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='https://github.com/PauloAndre05/Restaurant-app'
                />

                <CardProject 
                    image={imageHospital}
                    title='Hospital'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='#'
                />

                <CardProject 
                    image={imageNetflix}
                    title='Netflix'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='https://github.com/PauloAndre05/Clone-Netflix'
                />

                <CardProject 
                    image={imageQrCode}
                    title='QRCode Generate'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='https://github.com/PauloAndre05/QR_Code-Generator'
                />

                <CardProject 
                    image={imageCalculator}
                    title='Calculator IMC'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='https://github.com/PauloAndre05/Calculadora-IMC'
                />

                <CardProject 
                    image={imageTable}
                    title='Table'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='#'
                />
            
                <CardProject 
                    image={imageContagemRegressiva}
                    title='Countdown'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='#'
                />
            
                <CardProject 
                    image={imageLoginScreen}
                    title='Login Screen'
                    description='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis quod vel fuga vitae magnam quae tempora, provident tenetur harum eos similique maiores quos temporibus eum voluptatem veniam quisquam iste aliquid.'
                    link='#'
                />

            </section>
        </main>
    )
}
