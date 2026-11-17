import { useState } from 'react'

const certifications = [
  {
    title: 'PMI Project Management Ready',
    description:
      'Validates knowledge of project management, business analysis, and traditional and agile methodologies, demonstrating the ability to apply essential project management skills across various industries.',
    image: '/images/pmi-badge.png',
  },
  {
    title: 'DevNet Associate',
    description:
      'Validates hands-on experience and foundational knowledge in Python, Linux, APIs, software development, networking, application security, and infrastructure automation.',
    image: '/images/devnet-badge.png',
  },
  {
    title: 'IT Specialist – Python',
    description:
      'Demonstrates the ability to recognize, write, and debug Python code that logically solves problems.',
    image: '/images/python-badge.png',
  },
]

const skills = ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS', 'Figma', 'UI/UX Design', 'Responsive Design']

function SectionHeading({ title, subtitle }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  )
}
const projectImages = [
  {
    src: '/images/1.png',
    alt: 'FEU COMPASS Login Page',
  },
  {
    src: '/images/2.png',
    alt: 'FEU COMPASS Dashboard',
  },
  {
    src: '/images/3.png',
    alt: 'FEU COMPASS Lost and Found',
  },
  {
    src: '/images/4.png',
    alt: 'FEU COMPASS Management Module',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [activeProjectImage, setActiveProjectImage] = useState(0)

  function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const service = form.get('service')
    const message = form.get('message')
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`)
    window.location.href = `mailto:amandanicolesamonte1@gmail.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  return (
    <div className="portfolio-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Amanda Samonte home">ANS</a>
        <button
          className="menu-toggle"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span /> <span /> <span />
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'main-nav open' : 'main-nav'}>
          <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certifications</a>
          <a href="/Amanda-Samonte-Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Resume</a>
        </nav>
        <a className="header-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact Me</a>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-glow" />
          <div className="portrait-frame">
            {/* Add your exported Figma portrait at public/images/profile.png */}
            <img src="/images/profile.png" alt="Amanda Nicole Samonte" onError={(e) => { e.currentTarget.style.display = 'none' }} />
            <div className="portrait-fallback">ANS</div>
          </div>
          <div className="hero-copy">
            <h1>Amanda Nicole Samonte</h1>
            <p>UI/UX Designer</p>
            <a className="outline-button" href="#contact">Contact Me</a>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to About">↓</a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading title="About Me" subtitle="Get to know me" />
          <div className="about-copy">
            <p>
              Hi! I'm Amanda Nicole Samonte, an aspiring Frontend Developer and a Bachelor of Science in Information Technology student specializing in Web and Mobile Applications. I enjoy transforming ideas and designs into functional, responsive, and user-friendly interfaces. I have hands-on experience in frontend development and UI/UX design through academic and capstone projects, using technologies such as HTML, CSS, JavaScript, React.js, and Figma.
            </p>
            <p>
              I'm passionate about exploring new technologies, improving my development skills, and creating meaningful digital experiences. I'm currently seeking an internship opportunity where I can apply my knowledge, gain real-world industry experience, collaborate with other professionals, and continue growing as a frontend developer.
            </p>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading title="What I Do" subtitle="Skills & expertise" />
          <div className="skill-pills">
            {skills.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="section certifications-section" id="certifications">
          <SectionHeading title="Certifications" subtitle="My achievements" />
          <div className="cert-grid">
            {certifications.map((item) => (
              <article className="cert-card" key={item.title}>
                <div className="cert-image-wrap">
                  <img src={item.image} alt={`${item.title} badge`} onError={(e) => { e.currentTarget.style.display = 'none' }} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading title="Projects" subtitle="Some of my Work" />
          <article className="project-card">
            <div className="project-slideshow">
  <img
    key={projectImages[activeProjectImage].src}
    src={projectImages[activeProjectImage].src}
    alt={projectImages[activeProjectImage].alt}
    className="slideshow-image"
  />

  <button
    className="slide-arrow prev"
    onClick={() =>
      setActiveProjectImage(
        (current) => (current - 1 + projectImages.length) % projectImages.length
      )
    }
    aria-label="Previous screenshot"
  >
    &#10094;
  </button>

  <button
    className="slide-arrow next"
    onClick={() =>
      setActiveProjectImage(
        (current) => (current + 1) % projectImages.length
      )
    }
    aria-label="Next screenshot"
  >
    &#10095;
  </button>

  <div className="slide-indicators">
    {projectImages.map((image, index) => (
      <button
        key={image.src}
        className={activeProjectImage === index ? 'slide-dot active' : 'slide-dot'}
        onClick={() => setActiveProjectImage(index)}
        aria-label={`Go to screenshot ${index + 1}`}
      />
    ))}
  </div>

  <span className="slide-counter">
    {activeProjectImage + 1} / {projectImages.length}
  </span>
</div>
            <div className="project-content">
              <h3>FEU-CDGRS / FEU COMPASS</h3>
              <p>
                Developed FEU-CDGRS, an integrated web and mobile platform for Far Eastern University (FEU) Manila, designed to streamline student discipline management, guidance referrals, and lost-and-found operations. The system features an administrative web dashboard and a student-facing mobile application that centralize records, automate disciplinary notifications, and facilitate secure communication between departments. It incorporates AI-powered asset recognition using computer vision, OCR, and semantic matching to improve lost-and-found item identification. Implemented security features such as Microsoft Entra ID Single Sign-On, Role-Based Access Control (RBAC), and AES-256 encryption to protect sensitive institutional records.
              </p>
              <div className="project-tags">
                <span>Frontend Development</span><span>UI/UX Design</span><span>System Design</span><span>Figma</span>
              </div>
            </div>
          </article>
        </section>
        
        <section className="section resume-section" id="resume">
          <SectionHeading
            title="My Resume"
            subtitle="Get to know my qualifications"
          />

          <div className="resume-container">


            <div className="resume-actions">
              <a
                href="/resume/Amanda-Samonte-Resume.pdf"
                download="Amanda-Samonte-Resume.pdf"
                className="outline-button"
              >
                <span>↓</span> Download PDF
              </a>

              <a
                href="/resume/Amanda-Samonte-Resume.png"
                download="Amanda-Samonte-Resume.png"
                className="outline-button"
              >
                <span>↓</span> Download PNG
              </a>

              <a
                href="/resume/Amanda-Samonte-Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="resume-view-link"
              >
                View Full Resume ↗
              </a>
            </div>

          </div>
        </section>

        <section className="section contact-section" id="contact">
          <SectionHeading title="Get In Touch" subtitle="Lets work together" />
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input id="name" name="name" placeholder="Full name" required />
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" placeholder="example@email.com" required />
            <label htmlFor="service">Service</label>
            <select id="service" name="service" defaultValue="" required>
              <option value="" disabled>Select a service</option>
              <option>Frontend Development</option>
              <option>UI/UX Design</option>
              <option>Website Project</option>
              <option>Internship Opportunity</option>
              <option>Other</option>
            </select>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Write your message..." rows="6" required />
            <button type="submit" className="submit-button">Get in Touch</button>
            {submitted && <p className="form-note">Your email application should open with your message ready to send.</p>}
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <h2>Let’s<br />Work Together -</h2>
          <a className="email-link" href="mailto:amandanicolesamonte1@gmail.com">
            <span className="mail-icon">✉</span> amandanicolesamonte1@gmail.com
          </a>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Amanda Nicole Samonte. All rights reserved.</p>
          
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/amanda-nicole-samonte-4451b0448/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/amandasmnte/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a href="mailto:amandanicolesamonte1@gmail.com">
            Email
          </a>

          <a href="#home">Back to top ↑</a>
        </div>

        </div>
      </footer>
    </div>
  )
}

export default App
