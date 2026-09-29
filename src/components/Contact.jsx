import { useState } from 'react'

const courses = ["Foundation", "DCA", "ADCA", "Tally + GST"]

const Contact = () => {
  const [form, setForm] = useState({ name: '', phone: '', course: '', message: '' })

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const whatsappMsg = () => {
    const text = `Hi! I am ${form.name}. My phone: ${form.phone}. Interested in: ${form.course}. Query: ${form.message}`
    window.open(`https://wa.me/918130760810?text=${encodeURIComponent(text)}`, '_blank')
  }

  const emailMsg = () => {
    const subject = `Course Enquiry - ${form.course}`
    const body = `Name: ${form.name}\nPhone: ${form.phone}\nCourse: ${form.course}\nMessage: ${form.message}`
    window.open(`mailto:computercreate@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank')
  }

  const isValid = form.name && form.phone && form.course && form.message

  return (
    <section id="contact" className="w-full py-24 px-8 relative overflow-hidden bg-blue-900">

      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-800 -translate-x-1/2 -translate-y-1/2 opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-800 translate-x-1/3 translate-y-1/3 opacity-50" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-blue-700 opacity-20 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">

        {/* LEFT — Text */}
        <div className="flex-1 flex flex-col gap-6">
          <p className="text-blue-300 font-semibold text-sm uppercase tracking-widest">Get In Touch</p>
          <h2 style={{ fontFamily: "'Sora', sans-serif" }} className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Have a Question? <br />
            <span className="text-emerald-400">Let's Talk.</span>
          </h2>
          <p className="text-blue-200 text-sm leading-relaxed max-w-sm">
            Whether you want to enroll in a course, have a query, or just want to know more — reach out directly. We respond fast on WhatsApp!
          </p>

          {/* Contact info pills */}
          <div className="flex flex-col gap-3 mt-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white text-lg">📱</div>
              <div>
                <p className="text-white text-sm font-semibold">WhatsApp Us</p>
                <p className="text-blue-300 text-xs">+91 xxxxx 60810</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg">✉️</div>
              <div>
                <p className="text-white text-sm font-semibold">Email Us</p>
                <p className="text-blue-300 text-xs">computercreate@gmail</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div className="w-full md:w-120 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 flex flex-col gap-4">

          <h3 style={{ fontFamily: "'Sora', sans-serif" }} className="text-white text-xl font-bold mb-1">
            Send us a message
          </h3>

          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="Your Full Name"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-emerald-400 focus:bg-white/15 transition-all"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="Phone Number"
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-emerald-400 focus:bg-white/15 transition-all"
          />

          <select
            name="course"
            value={form.course}
            onChange={handle}
            className="w-full bg-blue-800 border border-white/20 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-emerald-400 transition-all"
          >
            <option value="" disabled>Select a Course</option>
            {courses.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <textarea
            name="message"
            value={form.message}
            onChange={handle}
            placeholder="Write your query here..."
            rows={4}
            className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-blue-300 text-sm outline-none focus:border-emerald-400 focus:bg-white/15 resize-none transition-all"
          />

          {/* Buttons */}
          <div className="flex gap-3 mt-1">
            <button
              onClick={whatsappMsg}
              disabled={!isValid}
              className="flex-1 flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 disabled:opacity-40 disabled:cursor-not-allowed text-white font-semibold text-sm py-3 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.553 4.122 1.523 5.855L.057 23.272a.75.75 0 00.92.92l5.455-1.473A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.718 9.718 0 01-4.953-1.355l-.355-.211-3.676.992.98-3.585-.232-.369A9.718 9.718 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              WhatsApp
            </button>

            <button
              onClick={emailMsg}
              disabled={!isValid}
              className="flex-1 flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed border border-white/30 text-white font-semibold text-sm py-3 rounded-xl transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email
            </button>
          </div>

          <p className="text-blue-300 text-xs text-center">
            Both buttons are disabled until all fields are filled ✅
          </p>

        </div>
      </div>
    </section>
  )
}

export default Contact