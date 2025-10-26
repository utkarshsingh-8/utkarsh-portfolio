/*
Utkarsh_Singh_Portfolio.jsx

Single-file React component (TailwindCSS + Framer Motion) for a modern, classy portfolio.
How to use:
1. Add this file to a React project configured with Tailwind CSS.
2. Install framer-motion: `npm i framer-motion`
3. Replace `RESUME_URL` and `PROFILE_PHOTO` with your hosted resume/photo URLs.
4. Optionally split into components and connect a real contact endpoint.

Design choices:
- Bold hero with gradient + soft animated blob
- Timeline-style experience
- Project cards with hover lift + subtle shadow
- Skills badges and interactive contact area

Note: This is a starting production-ready component — tweak fonts/colors as you like.
*/

import React from 'react';
import { motion } from 'framer-motion';

// Replace these with real hosted URLs after deployment
const RESUME_URL = '/Utkarsh_Singh.pdf'
const PROFILE_PHOTO = '/profile.jpg'

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 antialiased">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-indigo-400">
            <img src={PROFILE_PHOTO} alt="Utkarsh Singh" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Utkarsh Singh</h1>
            <p className="text-sm text-gray-500">Software Engineer — MERN & Backend Developer</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-indigo-600">Projects</a>
          <a href="#experience" className="text-sm hover:text-indigo-600">Experience</a>
          <a href="#skills" className="text-sm hover:text-indigo-600">Skills</a>
          <a href="#contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 text-sm">Contact</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
          <div>
            <motion.h2 initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-4xl md:text-5xl font-extrabold leading-tight">
              Modern backend engineer building <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-teal-400">scalable</span> and <span className="text-indigo-600">robust</span> web systems
            </motion.h2>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-gray-600 max-w-xl">
              I design and ship production-ready backends and full-stack features focused on performance and clean APIs. Experienced with Node.js, MERN stack, databases, and cloud deployment.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md text-sm">
                Download Resume
              </a>

              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm">See Projects</a>

              <a href="mailto:utkarshsingh4345@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-100 text-indigo-700 text-sm">Email Me</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xs">
              <Stat title="Experience" value="1 yrs+" />
              <Stat title="Primary" value="Node.js" />
              <Stat title="Open to" value="Product roles" />
            </div>
          </div>

          <div className="relative">
            {/* decorative blurred shape */}
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }} className="absolute -right-12 top-8 w-72 h-72 rounded-full bg-gradient-to-r from-indigo-300 to-teal-200 opacity-40 blur-3xl transform rotate-12" />

            <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 p-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img src={PROFILE_PHOTO} alt="Utkarsh photo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">Utkarsh Singh</h3>
                  <p className="text-sm text-gray-500">Software Engineer — MERN / Node.js</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600">
                <strong>Highlights:</strong>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Optimized APIs to reduce response times by 35%.</li>
                  <li>Worked on real-time features (WebSockets) and geo-based discovery.</li>
                  <li>Experience with Docker, AWS, and scalable web architectures.</li>
                </ul>
              </div>

              <div className="mt-4 flex gap-2">
                <a href="https://github.com/utkarshsingh-8" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 ring-1 ring-gray-100 rounded-md">GitHub</a>
                <a href="https://www.linkedin.com/in/utkarsh-singh--" target="_blank" rel="noreferrer" className="text-sm px-3 py-2 ring-1 ring-gray-100 rounded-md">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Selected Projects" subtitle="Projects that showcase backend and full-stack engineering work" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard
            title="Elite Tube"
            tech="React · Node.js · MongoDB · WebSockets"
            desc="YouTube-like platform with streaming, real-time chat and JWT-based auth. Optimized for concurrent viewers."
            link="#"
          />

          <ProjectCard
            title="P2P Carpooling DApp"
            tech="Solidity · Ethereum · JavaScript"
            desc="Blockchain-powered carpooling DApp with smart contracts for secure ride agreements and payments."
            link="#"
          />

          <ProjectCard
            title="Code Junction"
            tech="MERN · Express · MongoDB"
            desc="Ed-tech platform with coding contests, interactive quizzes and student engagement features."
            link="#"
          />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white/80 py-12">
        <div className="max-w-6xl mx-auto p-6">
          <SectionTitle title="Experience" subtitle="Where I've shipped impact" />

          <div className="mt-8 space-y-6">
            <TimelineItem
              period="Mar 2025 - Present"
              role="Software Engineer — Mindnerves Technology"
              location="Pune, Maharashtra, India"
              bullets={["Back-end for SmoochBox: geolocation-based discovery & real-time order tracking.", "Optimized REST APIs — 35% faster responses.", "Integrated geolocation for improved delivery accuracy."]}
            />

            <TimelineItem
              period="May 2024 - Feb 2025"
              role="Software Engineer — SVAM International Inc."
              location="Noida, Uttar Pradesh, India"
              bullets={["Back-end development for US-targeted mobile app.", "Optimized DB queries and API responses — load times down 40%.", "Fixed critical bugs raising app stability by 30%."]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Skills & Tools" subtitle="Technologies I use on a daily basis" />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            'Node.js', 'Express', 'React', 'MongoDB', 'MySQL', 'Docker', 'AWS', 'GCP'
          ].map((s) => (
            <div key={s} className="p-3 bg-gradient-to-r from-white to-gray-50 rounded-xl ring-1 ring-gray-100 shadow-sm">
              <div className="text-sm font-medium">{s}</div>
              <div className="text-xs text-gray-500 mt-1">Proficient</div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Contact" subtitle="Let's work together — I'm open to product and startup roles" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-gray-600">Prefer email? Reach me at <a className="text-indigo-600" href="mailto:utkarshsingh4345@gmail.com">utkarshsingh4345@gmail.com</a></p>

            <div className="bg-white rounded-xl p-4 ring-1 ring-gray-100 shadow-sm">
              <h4 className="font-semibold">Availability</h4>
              <p className="text-sm text-gray-500 mt-2">Open to full-time product roles. Based in Noida / India — willing to relocate for the right opportunity.</p>

              <div className="mt-4 flex gap-2">
                <a href="https://github.com/utkarshsingh-8" target="_blank" rel="noreferrer" className="px-3 py-2 ring-1 ring-gray-100 rounded-md">GitHub</a>
                <a href="https://www.linkedin.com/in/utkarsh-singh--" target="_blank" rel="noreferrer" className="px-3 py-2 ring-1 ring-gray-100 rounded-md">LinkedIn</a>
              </div>
            </div>
          </div>

          <form className="bg-white rounded-xl p-6 ring-1 ring-gray-100 shadow-sm">
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="Your name" />

            <label className="block text-sm font-medium text-gray-700 mt-4">Email</label>
            <input className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" placeholder="you@company.com" />

            <label className="block text-sm font-medium text-gray-700 mt-4">Message</label>
            <textarea className="mt-1 block w-full rounded-md border-gray-200 shadow-sm p-2" rows={4} placeholder="Tell me about the role…" />

            <div className="mt-4 flex items-center justify-between">
              <button type="button" className="px-4 py-2 bg-indigo-600 text-white rounded-md">Send</button>
              <div className="text-xs text-gray-400">Responses within 48 hours</div>
            </div>
          </form>
        </div>
      </section>

      <footer className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Utkarsh Singh — Built with care.
      </footer>
    </div>
  );
}

/* ---------- Small helper components ---------- */
function Stat({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-3 ring-1 ring-gray-100 shadow-sm">
      <div className="text-xs text-gray-500">{title}</div>
      <div className="text-lg font-semibold">{value}</div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
    </div>
  );
}

function ProjectCard({ title, tech, desc, link }) {
  return (
    <motion.a whileHover={{ translateY: -6 }} className="block bg-white rounded-2xl p-5 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-shadow" href={link} target="_blank" rel="noreferrer">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500">{tech}</div>
        <div className="text-xs px-2 py-1 rounded-md ring-1 ring-gray-100">Open Source</div>
      </div>

      <h4 className="mt-3 font-semibold text-lg">{title}</h4>
      <p className="text-sm text-gray-600 mt-2">{desc}</p>

      <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600">View →</div>
    </motion.a>
  );
}

function TimelineItem({ period, role, location, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 ring-2 ring-white" />
      <div className="text-sm text-gray-500">{period} • {location}</div>
      <div className="font-semibold mt-1">{role}</div>
      <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
