    import { useState } from 'react'

const initialReviews = [
  { name: "Rahul Sharma", stars: 5, text: "Best computer institute in the area. The Excel and Tally course changed my career completely!", avatar: "RS" },
  { name: "Priya Singh", stars: 5, text: "Very practical teaching style. I got a job within 2 months of completing ADCA. Highly recommended!", avatar: "PS" },
  { name: "Amit Kumar", stars: 4, text: "Great faculty and good environment. The GST filing practice sessions were extremely helpful.", avatar: "AK" },
  { name: "Sunita Devi", stars: 5, text: "I knew nothing about computers. Now I handle all office work confidently. Thank you Computer Create!", avatar: "SD" },
  { name: "Vikash Yadav", stars: 5, text: "DCA course was very well structured. Fees are affordable and the quality is top class.", avatar: "VY" },
  { name: "Neha Gupta", stars: 4, text: "Loved the batch timings and the personal attention from teachers. Will recommend to everyone.", avatar: "NG" },
]

const Stars = ({ count }) => (
  <div className="flex gap-0.5">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className={`w-4 h-4 ${i <= count ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
)

const Feedback = () => {
  const [reviews, setReviews] = useState(initialReviews)
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const [stars, setStars] = useState(5)
  const [hovered, setHovered] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!text.trim() || !name.trim()) return
    const initials = name.trim().split(' ').map(w => w[0].toUpperCase()).join('').slice(0, 2)
    setReviews([{ name: name.trim(), stars, text: text.trim(), avatar: initials }, ...reviews])
    setText('')
    setName('')
    setStars(5)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="feedback" className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Student Reviews</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl font-extrabold text-gray-900">
            What Our Students Say
          </h2>
          <p className="text-gray-500 mt-4 text-sm">Real feedback from real students who transformed their careers.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-start">

          {/* LEFT — Write feedback */}
          <div className="w-full md:w-80 flex-shrink-0 bg-white rounded-2xl shadow-md border border-gray-100 p-6 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Share Your Experience</span>
            </div>

            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 transition-all"
            />

            {/* Star picker */}
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-400 font-medium">Your Rating</span>
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => (
                  <button
                    key={i}
                    onMouseEnter={() => setHovered(i)}
                    onMouseLeave={() => setHovered(0)}
                    onClick={() => setStars(i)}
                  >
                    <svg className={`w-7 h-7 transition-colors ${i <= (hovered || stars) ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="Write your feedback here..."
              value={text}
              onChange={e => setText(e.target.value)}
              rows={5}
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-700 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-50 resize-none transition-all"
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white font-semibold text-sm py-3 rounded-xl hover:bg-blue-700 transition-colors"
            >
              {submitted ? '✅ Submitted!' : 'Submit Feedback'}
            </button>

            {/* Google badge */}
            <div className="flex items-center gap-2 justify-center pt-1">
              <svg className="w-4 h-4" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
              <span className="text-xs text-gray-400">Reviews powered by Google</span>
            </div>
          </div>

          {/* RIGHT — Scrollable reviews */}
          <div className="flex-1 h-[500px] overflow-y-auto flex flex-col gap-4 pr-2 scroll-smooth" style={{ scrollbarWidth: 'thin' }}>
            {reviews.map((r, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {r.avatar}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">{r.name}</p>
                    <Stars count={r.stars} />
                  </div>
                  {/* Google icon */}
                  <svg className="w-5 h-5 ml-auto flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{r.text}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default Feedback