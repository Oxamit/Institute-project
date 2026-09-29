 function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight">
              ComputerCreates
            </h2>

            <p className="mt-5 text-gray-400 leading-7 text-sm">
              Since 2017, ComputerCreates has been building modern software
              solutions with strong market research and real-world development
              experience.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {[
                "Web Development",
                "Mobile Apps",
                "Digital Solutions",
              ].map((item) => (
                <span
                  key={item}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-gray-300 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>

            <div className="flex flex-col gap-3 text-gray-400 text-sm">
              {[
                "Home",
                "Courses",
                "Services",
                
                "Contact",
              ].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Working Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Working Hours</h3>

            <div className="space-y-5 text-sm text-gray-400">
              <div>
                <p className="text-white font-medium">Monday - Friday</p>
                <p>9:00 AM - 5:00 PM</p>
              </div>

              <div>
                <p className="text-white font-medium">Saturday</p>
                <p>10:00 AM - 5:00 PM</p>
              </div>

              <div>
                <p className="text-white font-medium">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact</h3>

            <div className="space-y-4 text-sm text-gray-400 leading-7">
              <p>support@ComputerCreates.com</p>

              <div>
                <p>+91 9472462885</p>
                <p>+91 8651762332</p>
              </div>

              <p>
                G-7, Defence Colony, Rambagh
                <br />
                Near Hanuman Mandir,
                <br />
                Purnea, Bihar
              </p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © 2020 ComputerCreates. All rights reserved.
          </p>

          <p>
            Designed by <span className="text-cyan-400">ComputerCreates</span>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer