import { useState } from 'react'

const faqs = [
  { q: "What courses do you offer?", a: "We offer ADCA, DCA, Foundation Computer Course, and Tally with GST. Each course is designed to make you job-ready with practical skills." },
  { q: "What is the duration of each course?", a: "Foundation is 1 month, DCA is 6 months, ADCA is 1 year, and Tally with GST is 2-3 months depending on your pace." },
  { q: "Do I get a certificate after completing the course?", a: "Yes! You receive an industry-recognised certificate after completing any course at Computer Create, which you can use for job applications." },
  { q: "Do I need prior computer knowledge to join?", a: "Not at all. Our Foundation and DCA courses start from absolute basics. Anyone with zero experience can join and learn comfortably." },
  { q: "Is the course practical or theory based?", a: "Our courses are 80% practical. You work on real computers from day one — typing, working on Excel sheets, filing returns, and more." },
]

const FAQ = () => {
  const [open, setOpen] = useState(null)

  const toggle = (i) => setOpen(open === i ? null : i)

  return (
    <section id="faq" className="w-full py-20 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          {/* <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Got Questions?</p> */}
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl font-extrabold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-500 mt-4 text-sm">Everything you need to know before joining Computer Create.</p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${open === i ? 'border-blue-200 bg-white shadow-md' : 'border-gray-200 bg-white'}`}
            >
              {/* Question */}
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span style={{ fontFamily: "'Sora', sans-serif" }}
                  className={`font-semibold text-sm md:text-base ${open === i ? 'text-blue-600' : 'text-gray-800'}`}>
                  {faq.q}
                </span>
                <span className={`ml-4 flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300
                  ${open === i ? 'bg-blue-600 text-white rotate-45' : 'bg-gray-100 text-gray-500'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 px-6 ${open === i ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default FAQ