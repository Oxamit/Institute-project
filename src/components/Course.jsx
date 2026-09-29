import { useState } from 'react';

const courses = [
  {
    id: 1,
    name: 'Foundation',
    tag: 'Beginner',
    tagColor: 'bg-green-100 text-green-700',
    intro: 'Perfect start for absolute beginners with zero computer knowledge.',
    img: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=600',
    // bgFallback: "from-green-400 to-emerald-600",
    structure: [
      'Basic Computer Operations',
      'MS Paint & Notepad',
      'Internet & Email Basics',
      'Typing Practice',
      'Introduction to Windows',
    ],
  },
  {
    id: 3,
    name: 'DCA',
    tag: 'Intermediate',
    tagColor: 'bg-purple-100 text-purple-700',
    intro:
      'Diploma in Computer Applications for real-world office and admin roles.',
    img: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600',
    // bgFallback: "from-purple-400 to-violet-600",
    structure: [
      'MS Word & Excel',
      'PowerPoint Presentations',
      'Internet Applications',
      'Basic Programming Concepts',
      'Data Entry & Typing',
    ],
  },
  {
    id: 2,
    name: 'ADCA',
    tag: 'Advanced',
    tagColor: 'bg-blue-100 text-blue-700',
    intro:
      'Advanced diploma covering Office, accounting and computer applications.',
    img: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    // bgFallback: "from-blue-400 to-indigo-600",
    structure: [
      'MS Office Suite (Word, Excel, PPT)',
      'Tally with GST',
      'Internet & Networking',
      'Desktop Publishing',
      'Final Project Work',
    ],
  },

  {
    id: 4,
    name: 'Tally + GST',
    tag: 'Accounting',
    tagColor: 'bg-orange-100 text-orange-700',
    intro:
      'Master business accounting, GST filing and Tally Prime from scratch.',
    img: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600',
    // bgFallback: "from-orange-400 to-red-500",
    structure: [
      'Accounting Fundamentals',
      'Tally Prime Basics',
      'GST Concepts & Filing',
      'Invoice & Payroll Management',
      'Real Business Case Studies',
    ],
  },
];

const CourseCard = ({ course }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="relative rounded-2xl overflow-hidden shadow-md border border-gray-100 bg-white h-105">
      {/* FRONT */}
      <div
        className={`absolute inset-0 flex flex-col transition-opacity duration-300 ${flipped ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        {/* Image area */}
        <div className="relative h-44 shrink-0">
          <img
            src={course.img}
            alt={course.name}
            className="w-full h-full object-cover"
            onError={(e) => (e.target.style.display = 'none')}
          />
          {/* Gradient fallback */}
          <div
            className={`absolute inset-0 bg-linear-to-br ${course.bgFallback} opacity-90`}
          />

          {/* Tag */}
          <span
            className={`absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full ${course.tagColor}`}
          >
            {course.tag}
          </span>

          {/* Teacher circle */}
          <div className="absolute -bottom-5 right-4 w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-gray-200 shadow-md">
            <img
              src="/images/teacher.jpg"
              alt="Teacher"
              className="w-full h-full object-cover"
              onError={(e) => (e.target.style.display = 'none')}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col gap-3 p-5 pt-7 flex-1">
          <h3
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-xl font-bold text-gray-900"
          >
            {course.name}
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            {course.intro}
          </p>

          <div className="flex gap-2 mt-auto">
            <button
              onClick={() => setFlipped(true)}
              className="flex-1 border border-blue-600 text-blue-600 text-sm font-semibold py-2 rounded-xl hover:bg-blue-50 transition-colors"
            >
              Course Structure
            </button>
            <a
              href="#contact"
              className="flex-1 bg-blue-600 text-white text-sm  font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors text-center"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* BACK — Course Structure overlay */}
      <div
        className={`absolute inset-0 bg-blue-600 flex flex-col p-6 transition-opacity duration-300 ${flipped ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="flex items-center justify-between mb-4">
          <h3
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-white text-xl font-bold"
          >
            {course.name} — Structure
          </h3>
          <button
            onClick={() => setFlipped(false)}
            className="w-8 h-8 rounded-full bg-white/20 text-white flex items-center justify-center hover:bg-white/30"
          >
            ✕
          </button>
        </div>

        <ul className="flex flex-col gap-3 flex-1">
          {course.structure.map((item, i) => (
            <li
              key={i}
              className="flex items-center gap-3 text-sm text-blue-100"
            >
              <span className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center text-xs font-bold shrink-0"> 
                {i + 1}
              </span>
              {item}
            </li>
          ))}
        </ul>

        <a  href="#contact" className="mt-4 w-full bg-white text-blue-600 font-semibold text-sm text-center py-3 rounded-xl hover:bg-blue-50 transition-colors">
          Get Started
        </a>
      </div>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="course" className="w-full py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">
            What We Offer
          </p>
          <h2
            style={{ fontFamily: "'Sora', sans-serif" }}
            className="text-4xl font-extrabold text-gray-900"
          >
            Our Courses
          </h2>
          <p className="text-gray-500 mt-4 text-sm max-w-lg mx-auto">
            Choose the right course for your goals. All courses are practical,
            beginner-friendly and job-focused.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
