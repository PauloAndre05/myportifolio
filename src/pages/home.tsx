import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Foorter } from "../components/Footer";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";
import { Work } from "../components/Work";

export function Home () {
    return(
       <main className="w-full">
        <Header />
        <About />
        <Work />
        <Projects />
        <Contact />
        <Foorter />
       </main>
    )
}