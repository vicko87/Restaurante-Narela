import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar.jsx'
// import Footer from '../components/layout/Footer'
// import About from '../components/sections/About'
// import Menu from '../components/sections/Menu'
// import Gallery from '../components/sections/Gallery'
// import Contact from '../components/sections/Contact'



function Home() {
    return (
        <>
            <main className="pt-24">
                <Navbar />
                <Hero />
                {/* <About/> */}
                {/* <Menu/> */}
                {/* <Gallery/> */}
                {/* <Contact/> */}
            </main>
            {/* <Footer/> */}
        </>
    )
}
export default Home
