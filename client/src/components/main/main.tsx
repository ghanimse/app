import Contact from "./contact/contact"
import Header from "../header/header"
import Home from "./home/home"
import Services from "./services/services"
import About from "./about/about"

export default function Main() {
    return (
        <>
            <Header />
            {/* <Home />
            <Services />
            <Contact /> */}
            <About />
        </>
    )
}