function Features() {
  const items = [
    {
      title: 'Interactive 3D',
      desc: 'A responsive, mouse-following 3D scene powered by Spline for a truly immersive hero.',
    },
    {
      title: 'Dark Aesthetic',
      desc: 'Purple-blue, grainy gradients over a deep slate background for a futuristic vibe.',
    },
    {
      title: 'Smooth & Snappy',
      desc: 'Polished transitions and clean layout with responsive design across devices.',
    },
  ]

  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_80%_10%,rgba(147,197,253,0.08),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Features</h2>
          <p className="mt-3 text-blue-200/80">Built with modern web tooling and a focus on delightful interaction.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-slate-900/40 p-6 backdrop-blur-sm text-blue-100 hover:bg-slate-900/60 transition-colors">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-indigo-500 to-blue-500 mb-4" />
              <h3 className="text-white font-semibold mb-1">{f.title}</h3>
              <p className="text-sm text-blue-200/80">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
