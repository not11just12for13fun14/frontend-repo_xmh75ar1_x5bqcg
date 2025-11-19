import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center">
      {/* Background gradient + grain */}
      <div className="absolute inset-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-10%,rgba(99,102,241,0.35),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.25),transparent)]" />
        <div className="pointer-events-none absolute inset-0" style={{backgroundImage:'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTAwJScgaGVpZ2h0PScxMDAlJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnPjZmaWx0ZXIgaWQ9J2EnPjxmZUNvbG9yTWF0cml4IGluPSJTb3VyY2VHcmFwaGljIiB0eXBlPSJtYXRyaXgiIHZhbHVlcz0iMC4xIDAgMCAwIDAgIDAgMC4xIDAgMCAwICAwIDAgMC4xIDAgMCAgMCAwIDAgMSAwIi8+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOSIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPTEwMCVoZWlnaHQ9MTAwJSBmaWx0ZXI9InVybCgjYSkiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMDEiLz48L3N2Zz4=)'}} />
      </div>

      {/* 3D Scene */}
      <div className="relative z-10 w-full h-[60vh] sm:h-[70vh] lg:h-[78vh]">
        <Spline scene="https://prod.spline.design/wwTRdG1D9CkNs368/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Copy */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center">
        <div className="mx-auto max-w-7xl px-6 w-full">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_2px_35px_rgba(99,102,241,0.35)]">A futuristic, interactive canvas</h1>
            <p className="mt-4 text-blue-200/85 text-lg">Move your cursor to explore the 3D object floating in a deep, grainy gradient. Built for modern, immersive web experiences.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#features" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 text-white px-5 py-3 backdrop-blur-md border border-white/10 transition-colors">Explore Features</a>
              <a href="#" className="pointer-events-auto inline-flex items-center gap-2 rounded-lg bg-indigo-500/90 hover:bg-indigo-500 text-white px-5 py-3 shadow-lg shadow-indigo-500/30 transition-colors">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
