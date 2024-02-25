import { About } from "../components/About";
import { Header } from "../components/Header";
import { Projects } from "../components/Projects";

export function Home () {
    return(
       <main>
        <Header />
        <About />
        <Projects />
       </main>
    )
}