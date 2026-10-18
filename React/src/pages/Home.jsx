import '../App.css'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
function Home() {


    return (
        <div className='min-h-screen w-full flex flex-col'>
            <Nav />
            <Hero />
        </div>
    )
}

export default Home