import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar.jsx'
 import Footer from '../components/layout/Footer'
import About from '../components/sections/About'
import Carta from '../components/sections/Carta.jsx'
// import Gallery from '../components/sections/Gallery'
 import Contact from '../components/sections/Contact'



function Home() {
    return (
        <>
                   <Navbar />     
            <main className="pt-24">
                <Hero />
                <About/>
                <Carta/>     
                 <Contact/> 
            </main>
             <Footer/> 
        </>
    )
}
export default Home
