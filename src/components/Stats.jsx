const Stats = () => {
  return (
    <section className="w-full px-8 py-16 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-6">

        {/* STATS BAR */}
        <div className="w-full bg-blue-900 rounded-2xl px-10 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          {[
            { icon: "🎓", number: "100+", label: "Happy Students Enrolled" },
            { icon: "📜", number: "4",    label: "Industry Recognised Courses" },
            // { icon: "💼", number: "80+",  label: "Students Got Placed" },
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-4 flex-1">
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl">
                {stat.icon}
              </div>
              <div>
                <p style={{ fontFamily: "'Sora', sans-serif" }} className="text-white text-3xl font-extrabold leading-none">
                  {stat.number}
                </p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
              {i < 2 && <div className="hidden md:block w-px h-12 bg-white/20 ml-auto" />}
            </div>
          ))}
        </div>

        {/* BOTTOM TWO CARDS */}
        <div className="flex flex-col md:flex-row gap-6 h-44">

          {/* LEFT — Skills card */}
          <div className="flex-1 bg-emerald-500 rounded-2xl p-8 flex flex-col gap-4">
            <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-white text-2xl font-extrabold leading-snug">
              Real skills for real workplaces
            </h3>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Every course is built around tools that businesses actually use every day — not outdated theory.
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {["MS Excel", "MS Word", "PowerPoint", "Tally Prime", "GST Filing", "Data Entry", "Internet & Email"].map((tag, i) => (
                <span key={i} className="border border-white/60 text-white text-xs font-medium px-4 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* RIGHT — Affiliation card */}
          <div className="w-full md:w-80 bg-blue-900 rounded-2xl p-8 flex flex-col gap-4 relative overflow-hidden">
            {/* decorative circles */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-white/5" />
            <div className="absolute -bottom-8 -left-4 w-24 h-24 rounded-full bg-white/5" />

            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-xl">🏛️</div>
            <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-white text-2xl font-extrabold leading-snug relative z-10">
              Affiliated & Recognised Institute
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed relative z-10">
              Computer Create is affiliated with recognised educational bodies — your certificate carries real weight with employers.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Stats