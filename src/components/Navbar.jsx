import { useState } from 'react'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-30">
      <nav className="mx-auto max-w-7xl px-6 py-5 flex items-center justify-between">
        <a href="/" className="inline-flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 shadow-lg shadow-indigo-500/30">
            <span className="h-3 w-3 rounded-sm bg-white/90 rotate-45"></span>
          </span>
          <span className="text-white font-semibold tracking-tight text-lg">Nebula</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm text-blue-200/80 hover:text-white transition-colors">Features</a>
          <a href="#about" className="text-sm text-blue-200/80 hover:text-white transition-colors">About</a>
          <a href="/test" className="text-sm text-blue-200/80 hover:text-white transition-colors">Status</a>
          <a href="#" className="inline-flex items-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 text-sm backdrop-blur-md border border-white/10 transition-colors">Get Started</a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-white/10 text-white/90">
          <span className="i">{open ? '✕' : '☰'}</span>
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 rounded-xl border border-white/10 bg-slate-900/70 backdrop-blur-md text-sm text-blue-100">
          <div className="p-4 flex flex-col gap-3">
            <a onClick={() => setOpen(false)} href="#features" className="hover:text-white">Features</a>
            <a onClick={() => setOpen(false)} href="#about" className="hover:text-white">About</a>
            <a onClick={() => setOpen(false)} href="/test" className="hover:text-white">Status</a>
            <a onClick={() => setOpen(false)} href="#" className="inline-flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/15 text-white px-4 py-2 mt-2 border border-white/10">Get Started</a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
