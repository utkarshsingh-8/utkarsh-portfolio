/* Utkarsh_Singh_Portfolio.jsx (patched with dark variants) */
import React from 'react';
import { motion } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import { FaGithub, FaLinkedin, FaLink } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import { SiNodedotjs, SiExpress, SiReact, SiMongodb, SiMysql, SiDocker, SiAmazonwebservices, SiGooglecloud } from "react-icons/si";


const RESUME_URL = '/Utkarsh_Singh.pdf';
const PROFILE_PHOTO = '/profile.jpg';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-800 dark:from-gray-900 dark:to-black dark:text-gray-100 antialiased transition-colors duration-300">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-indigo-400">
            <img src={PROFILE_PHOTO} alt="Utkarsh Singh" className="w-full h-full object-cover" />
          </div>
          <div>
            <h1 className="text-xl font-semibold tracking-tight">Utkarsh Singh</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer — MERN & Backend Developer</p>
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <a href="#projects" className="text-sm hover:text-indigo-400">Projects</a>
          <a href="#experience" className="text-sm hover:text-indigo-400">Experience</a>
          <a href="#skills" className="text-sm hover:text-indigo-400">Skills</a>
          <a href="#contact" className="ml-4 inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 text-sm">Contact</a>
          <ThemeToggle />
        </nav>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center p-6">
          <div>
            <motion.h2
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight"
            >
              Modern backend engineer building <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-teal-400">scalable</span> and <span className="text-indigo-400">robust</span> web systems
            </motion.h2>

            <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="mt-4 text-gray-600 max-w-xl dark:text-gray-300">
              I design and ship production-ready backends and full-stack features focused on performance and clean APIs. Experienced with Node.js, MERN stack, databases, and cloud deployment.
            </motion.p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={RESUME_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white ring-1 ring-gray-200 shadow-sm hover:shadow-md text-sm dark:bg-gray-800 dark:ring-gray-700 dark:shadow-none">
                Download Resume
              </a>

              <a href="#projects" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 text-sm">See Projects</a>

              <a href="mailto:utkarshsingh4345@gmail.com" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-indigo-100 text-indigo-700 text-sm dark:border-indigo-700 dark:text-indigo-300">Email Me</a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 max-w-xs">
              <Stat title="Experience" value="1 yrs+" />
              <Stat title="Primary" value="Node.js" />
              <Stat title="Open to" value="Product roles" />
            </div>
          </div>

          <div className="relative">
            {/* decorative blurred shape (muted in dark) */}
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.15 }} className="absolute -right-12 top-8 w-72 h-72 rounded-full opacity-40 blur-3xl transform rotate-12 bg-gradient-to-r from-indigo-300 to-teal-200 dark:from-indigo-800 dark:to-teal-900 hidden md:block" />

            <div className="relative bg-white rounded-2xl shadow-2xl ring-1 ring-gray-100 p-6 dark:bg-gray-800 dark:shadow-none dark:ring-gray-700">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-lg overflow-hidden">
                  <img src={PROFILE_PHOTO} alt="Utkarsh photo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-semibold">Utkarsh Singh</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Software Engineer — MERN / Node.js</p>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                <strong>Highlights:</strong>
                <ul className="mt-2 list-disc list-inside space-y-1">
                  <li>Optimized APIs to reduce response times by 35%.</li>
                  <li>Worked on real-time features (WebSockets) and geo-based discovery.</li>
                  <li>Experience with Docker, AWS, and scalable web architectures.</li>
                </ul>
              </div>

              <div className="mt-4 flex gap-2 flex-wrap">
                <a
                  href="https://github.com/utkarshsingh-8"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 ring-1 ring-gray-200 rounded-md hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                >
                  <FaGithub className="text-xl" /> GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/utkarsh-singh--"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 ring-1 ring-gray-200 rounded-md hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                >
                  <FaLinkedin className="text-blue-600 text-xl" /> LinkedIn
                </a>

                <a
                  href="https://www.geeksforgeeks.org/user/utkarshsinghthakur1476/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 ring-1 ring-gray-200 rounded-md hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                >
                  <SiGeeksforgeeks className="text-green-600 text-xl" /> GfG
                </a>

                <a
                  href="https://leetcode.com/u/utkarshsingh_8/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm px-3 py-2 ring-1 ring-gray-200 rounded-md hover:bg-gray-50 dark:ring-gray-700 dark:hover:bg-gray-800"
                >
                  <SiLeetcode className="text-yellow-500 text-xl" /> LeetCode
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Selected Projects" subtitle="Projects that showcase backend and full-stack engineering work" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ProjectCard title="Elite Tube" tech="React · Node.js · MongoDB · WebSockets" desc="YouTube-like platform with streaming, real-time chat and JWT-based auth. Optimized for concurrent viewers." link="#" />
          <ProjectCard title="P2P Carpooling DApp" tech="Solidity · Ethereum · JavaScript" desc="Blockchain-powered carpooling DApp with smart contracts for secure ride agreements and payments." link="#" />
          <ProjectCard title="Code Junction" tech="MERN · Express · MongoDB" desc="Ed-tech platform with coding contests, interactive quizzes and student engagement features." link="#" />
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white/80 py-12 dark:bg-black/20">
        <div className="max-w-6xl mx-auto p-6">
          <SectionTitle title="Experience" subtitle="Where I've shipped impact" />

          <div className="mt-8 space-y-6">
            <TimelineItem
              period="Feb 2025 - Present"
              role="Software Engineer — Mindnerves Technology"
              location="Pune, Maharashtra, India"
              bullets={[
                "Back-end for SmoochBox: geolocation-based discovery & real-time order tracking.",
                "Optimized REST APIs — 35% faster responses.",
                "Integrated geolocation for improved delivery accuracy.",
              ]}
            />

            <TimelineItem
              period="May 2024 - Feb 2025"
              role="Software Engineer — SVAM International Inc."
              location="Noida, Uttar Pradesh, India"
              bullets={[
                "Back-end development for US-targeted mobile app.",
                "Optimized DB queries and API responses — load times down 40%.",
                "Fixed critical bugs raising app stability by 30%.",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Skills & Tools" subtitle="Technologies I use on a daily basis" />

        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Node.js", icon: <SiNodedotjs className="text-green-500 text-xl" /> },
            { name: "Express", icon: <SiExpress className="text-gray-500 text-xl" /> },
            { name: "React", icon: <SiReact className="text-sky-400 text-xl" /> },
            { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-xl" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500 text-xl" /> },
            { name: "Docker", icon: <SiDocker className="text-blue-400 text-xl" /> },
             { name: "AWS", icon: <SiAmazonwebservices className="text-orange-400 text-xl" /> },
            { name: "GCP", icon: <SiGooglecloud className="text-red-400 text-xl" /> },
          ].map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-3 p-4 bg-gradient-to-r from-white to-gray-50 rounded-xl ring-1 ring-gray-100 shadow-sm 
        hover:shadow-md transition-all dark:from-gray-800 dark:to-gray-800 dark:ring-gray-700 dark:shadow-none"
            >
              <div className="flex-shrink-0">{skill.icon}</div>
              <div>
                <div className="text-sm font-medium text-gray-800 dark:text-gray-100">{skill.name}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Proficient</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto p-6">
        <SectionTitle title="Contact" subtitle="Let's work together — I'm open to product and startup roles" />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300">Prefer email? Reach me at <a className="text-indigo-600 dark:text-indigo-300" href="mailto:utkarshsingh4345@gmail.com">utkarshsingh4345@gmail.com</a></p>

            <div className="bg-white rounded-xl p-4 ring-1 ring-gray-100 shadow-sm dark:bg-gray-800 dark:ring-gray-700 dark:shadow-none">
              <h4 className="font-semibold dark:text-gray-100">Availability</h4>
              <p className="text-sm text-gray-500 mt-2 dark:text-gray-300">Open to full-time product roles. Based in Noida / India — willing to relocate for the right opportunity.</p>

              <div className="mt-4 flex gap-2">
                <a href="https://github.com/utkarshsingh-8" target="_blank" rel="noreferrer" className="px-3 py-2 ring-1 ring-gray-100 rounded-md dark:ring-gray-700">GitHub</a>
                <a href="https://www.linkedin.com/in/utkarsh-singh--" target="_blank" rel="noreferrer" className="px-3 py-2 ring-1 ring-gray-100 rounded-md dark:ring-gray-700">LinkedIn</a>
              </div>
            </div>
          </div>

          <form
            action="https://formspree.io/f/xvgvgjyd"
            method="POST"
            className="bg-white rounded-xl p-6 ring-1 ring-gray-100 shadow-sm dark:bg-gray-800 dark:ring-gray-700 dark:shadow-none transition-colors duration-300"
          >
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Name
            </label>
            <input
              name="name"
              required
              className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm p-2 placeholder-gray-400 dark:placeholder-gray-400"
              placeholder="Your name"
            />

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mt-4">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm p-2 placeholder-gray-400 dark:placeholder-gray-400"
              placeholder="you@company.com"
            />

            <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mt-4">
              Message
            </label>
            <textarea
              name="message"
              required
              className="mt-1 block w-full rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 shadow-sm p-2 placeholder-gray-400 dark:placeholder-gray-400"
              rows={4}
              placeholder="Tell me about the role…"
            />

            <div className="mt-4 flex items-center justify-between">
              <button
                type="submit"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow-md transition-colors duration-200"
              >
                Send
              </button>
              <div className="text-xs text-gray-400 dark:text-gray-500">
                Responses within 48 hours
              </div>
            </div>
          </form>


        </div>
      </section>

      <footer className="max-w-6xl mx-auto p-6 text-center text-sm text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Utkarsh Singh — Built with care.
      </footer>
    </div>
  );
}

/* ---------- Small helper components ---------- */
function Stat({ title, value }) {
  return (
    <div className="bg-white rounded-xl p-3 ring-1 ring-gray-100 shadow-sm dark:bg-gray-800 dark:ring-gray-700 dark:shadow-none">
      <div className="text-xs text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-lg font-semibold dark:text-gray-100">{value}</div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div>
      <h3 className="text-2xl font-bold dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-500 mt-1 dark:text-gray-400">{subtitle}</p>
    </div>
  );
}

function ProjectCard({ title, tech, desc, link }) {
  return (
    <motion.a whileHover={{ translateY: -6 }} className="block bg-white rounded-2xl p-5 ring-1 ring-gray-100 shadow-sm hover:shadow-lg transition-shadow dark:bg-gray-800 dark:ring-gray-700 dark:shadow-none" href={link} target="_blank" rel="noreferrer">
      <div className="flex items-center justify-between">
        <div className="text-sm text-gray-500 dark:text-gray-400">{tech}</div>
        <div className="text-xs px-2 py-1 rounded-md ring-1 ring-gray-100 dark:ring-gray-700">Open Source</div>
      </div>

      <h4 className="mt-3 font-semibold text-lg dark:text-gray-100">{title}</h4>
      <p className="text-sm text-gray-600 mt-2 dark:text-gray-300">{desc}</p>

      <div className="mt-4 flex items-center gap-2 text-sm text-indigo-600 dark:text-indigo-300">View →</div>
    </motion.a>
  );
}

function TimelineItem({ period, role, location, bullets }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1 w-3 h-3 rounded-full bg-indigo-600 ring-2 ring-white dark:ring-gray-900" />
      <div className="text-sm text-gray-500 dark:text-gray-400">{period} • {location}</div>
      <div className="font-semibold mt-1 dark:text-gray-100">{role}</div>
      <ul className="text-sm text-gray-600 mt-2 list-disc list-inside space-y-1 dark:text-gray-300">
        {bullets.map((b, i) => <li key={i}>{b}</li>)}
      </ul>
    </div>
  );
}
