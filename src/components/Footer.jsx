function Footer() {
  return (
    <footer className="relative mt-24 py-10 border-t border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.1),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-blue-200/70">
        <p className="text-sm">© {new Date().getFullYear()} Nebula. All rights reserved.</p>
        <div className="flex items-center gap-5 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="/test" className="hover:text-white">Status</a>
          <a href="#" className="hover:text-white">Privacy</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
