import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar.jsx'
 import Footer from '../components/layout/Footer'
import About from '../components/sections/About'
// import Menu from '../components/sections/Menu'
// import Gallery from '../components/sections/Gallery'
 import Contact from '../components/sections/Contact'



function Home() {
    return (
        <>
                   <Navbar />     
            <main className="pt-24">
                <Hero />
                <About/>
                {/* <Menu/> */}     
                 <Contact/> 
            </main>
             <Footer/> 
        </>
    )
}
export default Home
