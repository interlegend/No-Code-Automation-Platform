import './App.css'
import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
function Home() {


    return (
        <div className='min-h-screen w-full flex flex-col'>
            <Nav />
            <Hero />
        </div>
    )
}

export default Home