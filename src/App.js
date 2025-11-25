import React from "react";

// Single-file React portfolio component styled with TailwindCSS
// Usage: place this as src/App.jsx in a Create React App / Vite + Tailwind project

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900 antialiased">
      <header className="max-w-5xl mx-auto px-6 py-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Abani Sikder</h1>
          <p className="text-sm text-gray-600">MERN Stack Developer • PUST (2026)</p>
        </div>
        <nav className="flex gap-6 items-center text-sm font-medium">
          <a href="https://github.com/Abanisikder" target="_blank" className="hover:text-indigo-600">GitHub</a>
          <a href="https://www.linkedin.com/in/abanisikder" target="_blank" className="hover:text-indigo-600">LinkedIn</a>
          <a href="#contact" className="px-4 py-2 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">Contact</a>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 py-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-snug">
              Building Modern Web Experiences with <span className="text-indigo-600">MERN</span>
            </h2>
            <p className="mt-5 text-gray-700 text-lg leading-relaxed">
              I’m a MERN Stack Developer focused on modern, scalable, and clean web applications.
              I create pixel-perfect UIs, robust APIs, and fully deployed production apps.
            </p>
            <div className="mt-8 flex gap-4">
              <a href="#projects" className="px-5 py-2.5 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition">View Projects</a>
              <a href="#skills" className="px-5 py-2.5 border rounded-lg hover:bg-gray-50 transition">Skills</a>
            </div>
          </div>

          <div className="p-6 bg-white shadow-xl rounded-2xl border border-gray-100">
            <h3 className="font-semibold text-xl">Quick Profile</h3>
            <ul className="mt-4 space-y-3 text-gray-700 text-sm">
              <li><strong>Email:</strong> abanisikder312@gmail.com</li>
              <li><strong>Phone:</strong> 0138551373</li>
              <li><strong>Location:</strong> Pabna, Bangladesh</li>
              <li><strong>Education:</strong> B.Sc. CSE — PUST (2026)</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="py-14">
          <h3 className="text-3xl font-bold">Projects</h3>
          <p className="text-gray-600 mt-2">Production-level apps built with the MERN Stack.</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-6">
            <article className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg">ARBnB Project</h4>
              <p className="text-sm text-gray-700 mt-3 leading-relaxed">
                A full-featured accommodation booking platform inspired by Airbnb. Includes filters, user auth,
                listing pages, bookings, and a complete MERN backend.
              </p>
              <div className="mt-4 flex gap-3 text-sm">
                <a href="https://github.com/Abanisikder/Arbnb_project" target="_blank" className="text-indigo-600 hover:underline">Source Code</a>
              </div>
            </article>

            <article className="bg-white border rounded-xl p-6 shadow hover:shadow-md transition">
              <h4 className="font-semibold text-lg">More Projects Coming</h4>
              <p className="text-sm text-gray-700 mt-3">You can add more MERN, React, or API-based projects here for a stronger portfolio.</p>
            </article>
          </div>
        </section>

        <section id="skills" className="py-14 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-xl">Technical Skills</h4>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>Frontend: React.js, Redux, JavaScript, Tailwind, Bootstrap</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB, MySQL</li>
              <li>Tools: Git, GitHub, Postman, VS Code</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h4 className="font-semibold text-xl">Certifications</h4>
            <ul className="mt-4 space-y-2 text-gray-700 text-sm">
              <li>Apna College — Full MERN Stack Development Course</li>
              <li>EDGE Program — Web Development Course</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="py-12">
          <h3 className="text-3xl font-bold">Contact</h3>
          <p className="text-gray-600 mt-2">Let’s work together — reach out anytime.</p>

          <div className="mt-6 bg-white p-6 rounded-xl shadow max-w-md">
            <p className="text-sm"><strong>Email:</strong> <a href="mailto:abanisikder312@gmail.com" className="text-indigo-600">abanisikder312@gmail.com</a></p>
            <p className="text-sm mt-3"><strong>GitHub:</strong> <a href="https://github.com/Abanisikder" target="_blank" className="text-indigo-600">github.com/Abanisikder</a></p>
          </div>
        </section>

        <footer className="py-12 text-center text-xs text-gray-500">© {new Date().getFullYear()} Abani Sikder — Portfolio built with React & Tailwind</footer>
      </main>
    </div>
  );
}
