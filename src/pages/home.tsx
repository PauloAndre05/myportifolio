import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Foorter } from "../components/Footer";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function Home () {
    return(
       <main>
        <Header />
        <About />
        <Projects />
        <Contact />
        <Foorter />
       </main>
    )
}