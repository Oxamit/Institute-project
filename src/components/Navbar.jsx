// const Navbar = () => {
//   return (
//     <nav className="w-full flex items-center justify-between px-32 py-4 bg-white shadow-sm sticky top-0 z-50">
//       {/* LOGO */}
//       <div className="text-2xl font-bold text-blue-600 tracking-tight">
//         Computer<span className="text-gray-800">Create</span>
//       </div>

//       {/* NAV LINKS */}
//       <ul className="flex gap-8 text-gray-600 font-medium text-md">
//         <li>
//           <a href="#home" className="hover:text-blue-600 transition-colors">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="#course" className="hover:text-blue-600 transition-colors">
//             Course
//           </a>
//         </li>
//         <li>
//           <a href="#services" className="hover:text-blue-600 transition-colors">
//             Services
//           </a>
//         </li>
//         <li>
//           <a href="#contact" className="hover:text-blue-600 transition-colors">
//             Contact
//           </a>
//         </li>
//       </ul>

//       {/* FEEDBACK BUTTON */}
//       <a
//         href="#feedback"
//         className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
//       >
//         Feedback
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-4 h-4 -rotate-0"
//           viewBox="0 0 24 24"
//           fill="currentColor"
//         >
//           <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
//         </svg>
//       </a>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from 'react';

const services = [
  { icon: '🖥️', name: 'Computer Repair Services' },
  { icon: '🖨️', name: 'Printer Repair Services' },
  { icon: '🌐', name: 'Remote Support' },
  { icon: '💿', name: 'OS Support' },
  { icon: '🛡️', name: 'Antivirus Support' },
  { icon: '🏷️', name: 'Brand Support' },
  { icon: '⚙️', name: 'Setup & Installation' },
  { icon: '☕', name: 'Java Support' },
  { icon: '📡', name: 'Internet Support' },
  { icon: '📧', name: 'Email Support' },
  { icon: '🔒', name: 'PC Security' },
  { icon: '💻', name: 'Laptop / Computer AMC' },
];

const Navbar = () => {
  const [showServices, setShowServices] = useState(false);
  const [locked, setLocked] = useState(false);

  return (
    <>
      <nav className="w-full flex items-center justify-between px-32 py-2 bg-white shadow-sm sticky top-0 z-50">
        {/* LOGO */}
        <div className="flex ">
          <img
            src="src/assets/computercreatesc.png"
            alt="Computer Create"
            className="h-12 w-auto"
          />
          <span className="flex flex-col justify-center">
            <div
              style={{ fontFamily: "'Sora', sans-serif" }}
              className="text-l font-extrabold  text-blue-600 tracking-tight leading-none gap-2 uppercase mx-3"
            >
              Computer<span className="text-gray-800 uppercase">Creates</span>
            </div>
              <hr className='text-gray-500 '  />
            <div className="text-sm text-gray-400  tracking-widest ">
              Computer Training Institute
            </div>
          </span>
        </div>

        {/* NAV LINKS */}
        <ul className="flex gap-8 text-gray-600 font-medium text-sm absolute left-1/2 -translate-x-1/2">
          <li>
            <a href="#home" className="hover:text-blue-600 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#course" className="hover:text-blue-600 transition-colors">
              Course
            </a>
          </li>

          {/* Services with mega menu trigger */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setShowServices(true)}
            onMouseLeave={() => {
              if (!locked) setShowServices(false);
            }}
            onClick={() => setLocked(!locked)}
          >
            <span
              className={`flex items-center gap-1 transition-colors ${showServices ? 'text-blue-600' : 'hover:text-blue-600'}`}
            >
              Services
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${showServices ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* FEEDBACK BUTTON */}
        <a
          href="#feedback"
          className="flex items-center gap-2 bg-blue-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 -rotate-45"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
          </svg>
          Feedback
        </a>
      </nav>

      {/* MEGA MENU */}
      <div
        onMouseEnter={() => setShowServices(true)}
        onMouseLeave={() => setShowServices(false)}
        className={`absolute top-18 left-0 w-full z-40 transition-all duration-300 ease-in-out
          ${showServices ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
        style={{ height: '55vh' }}
      >
        <div className="w-full h-full bg-white border-t border-gray-100 shadow-2xl flex">
          {/* LEFT — Services grid */}
          <div className="flex-1 px-16 py-10 overflow-y-auto">
            <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-6">
              Our Services
            </p>
            <div className="grid grid-cols-3 gap-4">
              {services.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 cursor-pointer group transition-colors"
                >
                  <span className="text-2xl">{s.icon}</span>
                  <span className="text-sm text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Promise card */}
          <div className="w-80 bg-blue-600 flex flex-col justify-center px-10 py-10 gap-5 shrink-0">
            <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-2xl">
              🏆
            </div>
            <h3
              style={{ fontFamily: "'Sora', sans-serif" }}
              className="text-white text-2xl font-extrabold leading-snug"
            >
              Best Service Provider in the Area
            </h3>
            <p className="text-blue-100 text-sm leading-relaxed">
              We promise fast, reliable, and affordable IT services right at
              your doorstep. Trusted by 100+ homes and businesses in Rambagh,
              Purnea.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-blue-600 text-sm font-bold px-5 py-3 rounded-full hover:bg-blue-50 transition-colors w-fit"
            >
              Get Service Now →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
