import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* subtle starfield dots */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(1px 1px at 10% 20%, #fff 40%, transparent 41%), radial-gradient(1px 1px at 30% 80%, #fff 40%, transparent 41%), radial-gradient(1px 1px at 80% 30%, #fff 40%, transparent 41%)'}} />

      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </div>
  )
}

export default App
