import { useState } from 'react'

const reasons = [
  { emoji: "🎯", title: "Job-Ready Skills", desc: "Every course is designed around what employers actually need — not theory, but real tools you use on day one at work.", highlight: true },
  { emoji: "🧑‍🏫", title: "Expert Local Guidance", desc: "Learn directly from experienced instructors who understand your local job market and guide you at every step.", highlight: true },
  { emoji: "📊", title: "Microsoft Office & Tally", desc: "Master the most in-demand tools — Excel, Word, PowerPoint and Tally with GST — all under one roof.", highlight: true },
  { emoji: "⚡", title: "Fast Track Learning", desc: "Short, focused courses that get you certified and confident in weeks — not months. No wasted time.", highlight: true },
  { emoji: "📜", title: "Recognised Certification", desc: "Walk away with certificates that employers trust. Our ADCA and DCA programs are industry recognised.", highlight: true },
]

const Why = () => {
  const [active, setActive] = useState(1)

  const prev = () => setActive((p) => (p - 1 + reasons.length) % reasons.length)
  const next = () => setActive((p) => (p + 1) % reasons.length)

  const getIndex = (offset) => (active + offset + reasons.length) % reasons.length

  return (
    <section id="why" className="w-full py-20 bg-gray-100">

      {/* Header */}
      <div className="text-center mb-14 px-8">
        <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
        <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl md:text-5xl font-bold text-gray-900">
          Why Computer Create?
        </h2>
        <p className="text-gray-500 mt-4 text-base max-w-xl mx-auto">
          We don't just teach computers — we build careers. Here's what makes us different.
        </p>
      </div>

      {/* Carousel row */}
      <div className="relative flex items-center">

        {/* Left Arrow */}
        <button
          onClick={prev}
          className="absolute left-4 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Cards container — overflow hidden to clip side cards */}
        <div className="w-full overflow-hidden px-20">
          <div className="flex items-stretch justify-center gap-4">

            {/* LEFT peek card */}
            <div className="w-[420px] flex-shrink-0 rounded-2xl p-8 bg-white border border-gray-100 flex flex-col gap-4 opacity-60 translate-x-16 transition-all duration-500">
              <div className="text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50">
                {reasons[getIndex(-1)].emoji}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-gray-900">
                {reasons[getIndex(-1)].title}
              </h3>
              <div className="w-10 h-1 rounded-full bg-blue-600" />
              <p className="text-sm leading-relaxed text-gray-500">{reasons[getIndex(-1)].desc}</p>
            </div>

            {/* CENTER card */}
            <div className={`w-[480px] flex-shrink-0 rounded-2xl p-8 flex flex-col gap-4 shadow-xl transition-all duration-500 z-10
              ${reasons[active].highlight ? 'bg-blue-600' : 'bg-white border border-gray-100'}`}>
              <div className={`text-4xl w-14 h-14 flex items-center justify-center rounded-xl
                ${reasons[active].highlight ? 'bg-white/20' : 'bg-blue-50'}`}>
                {reasons[active].emoji}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }}
                className={`text-xl font-bold ${reasons[active].highlight ? 'text-white' : 'text-gray-900'}`}>
                {reasons[active].title}
              </h3>
              <div className={`w-10 h-1 rounded-full ${reasons[active].highlight ? 'bg-white/50' : 'bg-blue-600'}`} />
              <p className={`text-sm leading-relaxed ${reasons[active].highlight ? 'text-blue-100' : 'text-gray-500'}`}>
                {reasons[active].desc}
              </p>
            </div>

            {/* RIGHT peek card */}
            <div className="w-[420px] flex-shrink-0 rounded-2xl p-8 bg-white border border-gray-100 flex flex-col gap-4 opacity-60 -translate-x-16 transition-all duration-500">
              <div className="text-4xl w-14 h-14 flex items-center justify-center rounded-xl bg-blue-50">
                {reasons[getIndex(1)].emoji}
              </div>
              <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-xl font-bold text-gray-900">
                {reasons[getIndex(1)].title}
              </h3>
              <div className="w-10 h-1 rounded-full bg-blue-600" />
              <p className="text-sm leading-relaxed text-gray-500">{reasons[getIndex(1)].desc}</p>
            </div>

          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={next}
          className="absolute right-4 z-20 w-10 h-10 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center hover:bg-blue-50 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-10">
        {reasons.map((_, i) => (
          <button key={i} onClick={() => setActive(i)}
            className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`} />
        ))}
      </div>

    </section>
  )
}

export default Why