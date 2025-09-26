import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-gray-400 text-sm">
      <div className="mx-auto max-w-7xl px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Kiri */}
        <div className="flex flex-col items-center md:items-start">
          <p className="font-general text-white">
            ©{new Date().getFullYear()} Ryan Rafidhea Reyhan
          </p>
          <p className="text-xs text-gray-500">All rights reserved.</p>
        </div>

        {/* Tengah */}
        <div className="flex flex-col items-center justify-center space-y-2">
          <nav className="flex space-x-4 font-general">
            <a href="#hero" className="hover:text-white transition">
              Home
            </a>
            <a href="#about" className="hover:text-white transition">
              About
            </a>
            <a href="#features" className="hover:text-white transition">
              Features
            </a>
            <a
              href="https://github.com/vyrons/hsr-3.6-landing-page-fanmade.git"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
            >
              GitHub Repo
            </a>
          </nav>
        </div>

        {/* Kanan */}
        <div className="flex flex-col items-center md:items-end text-xs font-general">
          <p>Assets © HoYoverse</p>
          <p>Inspired by JavaScript Mastery</p>
          <p>For learning · Non-commercial</p>
        </div>
      </div>

      {/* Bawah kecil */}
      <div className="border-t border-red-800 py-4">
        <div className="mx-auto max-w-7xl flex justify-center space-x-4">
          <a
            href="https://github.com/vyrons"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/ryan-rafidhea-reyhan-439109211/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
