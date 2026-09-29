import { useState, useEffect } from 'react';

const headlines = [
  'Learn Office, Excel & Account Basics to Get Hired Fast.',
  'Simple Computer Courses Built for Real Workplace Success.',
  'Master the Desktop Tools That Keep Modern Businesses Running.',
];

const badges = [
  {
    label: 'Excel',
    bg: 'bg-green-100',
    text: 'text-green-700',
    emoji: '📊',
    delay: '0s',
  },
  {
    label: 'Word',
    bg: 'bg-blue-100',
    text: 'text-blue-700',
    emoji: '📝',
    delay: '1.3s',
  },
  {
    label: 'Tally',
    bg: 'bg-orange-100',
    text: 'text-orange-700',
    emoji: '🧾',
    delay: '2.6s',
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % headlines.length);
        setFade(true);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="w-full min-h-[90vh] flex items-center px-8 py-16 bg-gray-50"
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-16">
        {/* LEFT */}
        <div className="flex-1 flex flex-col gap-6">
          <span className="inline-flex items-center gap-2 w-fit bg-blue-50 text-blue-600 text-xs font-semibold px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Trusted Computer Institute
          </span>

          <h1
            style={{ fontFamily: "'Sora', sans-serif" }}
            className={`text-4xl md:text-5xl font-bold text-gray-700 leading-tight transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
          >
            {headlines[current]}
          </h1>

          {/* Dots */}
          <div className="flex gap-2">
            {headlines.map((_, i) => (
              <span
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>

          <p className="text-gray-500 text-base leading-relaxed max-w-md">
            Join hundreds of students who built real workplace skills with our
            practical, job-ready computer courses.
          </p>

          <div className="flex gap-4 mt-2">
            <a
              href="#course"
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-700 transition-colors"
            >
              Explore Courses
            </a>
            <a
              href="#why"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* RIGHT — Image with overlay + orbiting badges */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-72 h-80">
            {/* Tilted card behind */}
            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-6 translate-x-3 translate-y-3 opacity-80" />

            {/* Main photo placeholder */}
            <div className="relative z-10 w-full h-full bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400 text-sm font-medium shadow-xl overflow-hidden">
              Owner Photo
            </div>

            {/* Orbiting badges */}
            <style>{`
              @keyframes orbit {
                from { transform: rotate(0deg) translateX(150px) rotate(0deg); }
                to   { transform: rotate(360deg) translateX(150px) rotate(-360deg); }
              }
              .orbit-badge {
                position: absolute;
                top: 50%;
                left: 50%;
                margin-top: -20px;
                margin-left: -20px;
                animation: orbit 6s linear infinite;
              }
            `}</style>

            {badges.map((b, i) => (
              <div
                key={i}
                className="orbit-badge"
                style={{ animationDelay: b.delay }}
              >
                <div
                  className={`flex items-center gap-1 ${b.bg} ${b.text} text-xs font-bold px-3 py-1.5 rounded-full shadow-md whitespace-nowrap`}
                >
                  <span>{b.emoji}</span>
                  <span>{b.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
