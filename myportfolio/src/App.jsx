import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Navigate, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

const roles = ['Web Developer', 'Frontend Developer', 'UI/UX Designer']
const techGroups = [
  { title: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Vite'] },
  { title: 'Backend & Database', items: ['Node.js', 'Express.js', 'Java', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB'] },
  { title: 'Tools', items: ['GitHub', 'Figma', 'Database Design', 'REST APIs'] },
]
const projects = [
  { title: 'Davao Blue Eagles Marching Band (DBEMB)', type: 'Web', summary: 'Founded in 2012 and celebrated for major championship wins, DBEMB is now rebuilding post-pandemic while continuing to serve communities through music.', stack: ['React Native', 'MySQL', 'Express.js', 'Node.js'], status: 'Live Demo', link: 'https://sad-final.vercel.app/#home', preview: '/dbemb%20preview.png' },
  { title: "H's Barbershop", type: 'Web', summary: "A modern, full-stack web application for managing barbershop services with customer booking capabilities and an admin dashboard.", stack: ['React', 'Vite', 'CSS', 'Express.js', 'Node.js', 'MySQL'], status: 'Live Demo', link: 'https://hbarbershop.vercel.app/', preview: '/hbarbershop%20preview.png' },
  { title: 'Cat Adoption Project', type: 'Web', summary: 'A cat adoption web app designed to help users discover, connect with, and adopt cats more easily.', stack: ['React', 'Vite', 'CSS'], status: 'Live Demo', link: 'https://catadoption.vercel.app/', preview: '/cat%20adoption%20preview.png' },
  { title: 'DPWH Redesign Website', type: 'Web', summary: 'A website for the Department of Public Works and Highways focused on clearer navigation and accessible service information.', stack: ['HTML', 'CSS', 'JavaScript'], status: 'Live Demo', link: 'https://dpwh.vercel.app/', preview: '/dpwh%20website%20preview.png' },
  { title: 'DPWH Figma Mockup', type: 'Design', summary: 'A Figma prototype for the Department of Public Works and Highways focused on clear navigation and accessible services.', stack: ['Figma', 'UI Design', 'Prototyping'], status: 'Live Demo', link: 'https://www.figma.com/proto/2hmVfc5rXfAr3NHLNjaa1p/Midterm?node-id=22-140&p=f&t=iYPwaNpwK732V2mq-1&scaling=contain&content-scaling=responsive&page-id=0%3A1', preview: '/figma%20mockup%20preview.png' },
]
const relatedWorkImages = [
  { src: '/CCNA%20Intro.png', alt: 'CCNA Introduction to Networks certificate' },
  { src: '/IMG_8351.PNG', alt: 'Related work image 8351' },
  { src: '/IMG_8352.PNG', alt: 'Related work image 8352' },
  { src: '/IMG_8353.PNG', alt: 'Related work image 8353' },
  { src: '/IMG_8354.PNG', alt: 'Related work image 8354' },
  { src: '/IMG_8355.PNG', alt: 'Related work image 8355' },
  { src: '/IMG_8356.PNG', alt: 'Related work image 8356' },
  { src: '/IMG_8357.PNG', alt: 'Related work image 8357' },
  { src: '/IMG_8358.PNG', alt: 'Related work image 8358' },
  { src: '/IMG_8360.PNG', alt: 'Related work image 8360' },
  { src: '/IMG_8361.PNG', alt: 'Related work image 8361' },
  { src: '/IMG_8362.PNG', alt: 'Related work image 8362' },
  { src: '/IMG_8363.PNG', alt: 'Related work image 8363' },
  { src: '/IMG_8364.PNG', alt: 'Related work image 8364' },
  { src: '/IMG_8368.PNG', alt: 'Related work image 8368' },
  { src: '/IMG_8410.jpg', alt: 'Related work image 8410' },
]
const timeline = [
  { title: 'Intern', period: 'IN PROGRESS', isCurrent: true },
  { title: 'Ateneo Circle of Computer Enthusiasts for Study and Success', subtitle: 'Creative Team Member', period: '2024 - Present',},
  { title: 'Bachelor of Science in Computer Science', subtitle: 'Ateneo de Davao University', period: '2023 - Present',},
  { title: 'Hello World!', subtitle: 'Wrote my first line of code', period: '2018',},
]
const education = [
  { school: 'Ateneo de Davao University', period: '2023 - Present', isCurrent: true },
  { school: 'Ateneo de Davao Senior High School', period: '2021 - 2023' },
  { school: 'Ateneo de Davao Junior High School', period: '2018 - 2021' },
]
const learningNow = [
  'TypeScript',
  'UI Motion',
  'Swift',
  'Flutter',
]
const certification = 'CCNA: Introduction to Networks'
const socialLinks = [
  { label: 'GitHub', url: 'https://github.com/leyquinn', icon: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/harley-love-cuba-b8670a248/', icon: 'linkedin' },
  { label: 'Email', url: 'mailto:hlncuba@addu.edu.ph', icon: 'email' },
]

const SocialIcon = ({ type }) => {
  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M9 19c-4.5 1.5-4.5-2.5-6.5-3m13 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 19.5 5.7 5.07 5.07 0 0 0 19.41 2S18.32 1.65 16 3.23a13.38 13.38 0 0 0-7 0C6.68 1.65 5.59 2 5.59 2A5.07 5.07 0 0 0 5.5 5.7 5.44 5.44 0 0 0 4 9.52c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9.5 19.13V23" />
      </svg>
    )
  }

  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  }

  if (type === 'instagram') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" />
      </svg>
    )
  }

  if (type === 'email') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" ry="2" />
        <path d="m3 7 9 7 9-7" />
      </svg>
    )
  }

  if (type === 'phone') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.37 19.37 0 0 1-6-6A19.86 19.86 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.89.33 1.76.62 2.6a2 2 0 0 1-.45 2.11L8 9.91a16 16 0 0 0 6.09 6.09l1.48-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.6.62A2 2 0 0 1 22 16.92z" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

const ScrollReveal = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)

    const revealItems = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { threshold: 0.16, rootMargin: '0px 0px -6% 0px' })

    revealItems.forEach((item) => {
      observer.observe(item)
    })

    return () => {
      revealItems.forEach((item) => observer.unobserve(item))
      observer.disconnect()
    }
  }, [pathname])

  return null
}

const Home = ({ theme, toggleTheme }) => {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0)
  const [isWorkModalOpen, setIsWorkModalOpen] = useState(false)
  const totalWorkSlides = relatedWorkImages.length

  const goToWorkSlide = (nextIndex) => {
    const normalizedIndex = (nextIndex + totalWorkSlides) % totalWorkSlides
    setActiveWorkIndex(normalizedIndex)
  }

  const activeWork = relatedWorkImages[activeWorkIndex]

  const openWorkModal = () => {
    setIsWorkModalOpen(true)
  }

  const closeWorkModal = () => {
    setIsWorkModalOpen(false)
  }

  return (
  <div className="home-layout">
    <section id="home" className="hero-card reveal">
      <div className="hero-avatar">
        <div className="photo-slot"><img src="/profile.jpg" alt="Profile" /></div>
      </div>
      <div className="hero-content">
        <div className="hero-head">
          <h1>
            Harley Love N. Cuba
            <span className="verified" aria-label="Verified profile">
              <img src="/verified.png" alt="" aria-hidden="true" />
            </span>
          </h1>
          <p className="location-tag"><img className="location-icon" src="/pin.png" alt="" aria-hidden="true" /> Davao City, Davao Del Sur, Philippines</p>
        </div>
        <p className="roles-inline">{roles.join(' | ')}</p>
        <div className="hero-cta">
          <NavLink to="/contact" className="btn-black cta-with-icon">
            <img className="cta-icon-img" src="/phone.png" alt="" aria-hidden="true" />
            Contact
          </NavLink>
          <a className="btn-outline cta-with-icon" href="mailto:hlncuba@addu.edu.ph">
            <img className="cta-icon-img" src="/email.png" alt="" aria-hidden="true" />
            Send Email
          </a>
        </div>
      </div>
      <div className="hero-tools">
        <button
          type="button"
          className="theme-toggle"
          aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
          onClick={toggleTheme}
        >
          {theme === 'light' ? (
            <svg className="theme-toggle-glyph" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          ) : (
            <svg className="theme-toggle-glyph" viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2" />
              <path d="M12 20v2" />
              <path d="m4.93 4.93 1.41 1.41" />
              <path d="m17.66 17.66 1.41 1.41" />
              <path d="M2 12h2" />
              <path d="M20 12h2" />
              <path d="m6.34 17.66-1.41 1.41" />
              <path d="m19.07 4.93-1.41 1.41" />
            </svg>
          )}
        </button>
      </div>
    </section>

    <div className="reference-grid">
      <div className="left-rail">
        <section className="about-card reveal delay-1">
          <div className="card-header"><h2>About Me</h2></div>
          <p>I am a third-year BSCS student and an aspiring Front End Web Developer and UI/UX Designer focused on building clean, useful digital experiences. I enjoy creating frontend interfaces that feel intuitive and polished. I also build backend systems that keep applications reliable and smooth.</p>
          <p>I am motivated by how fast the web evolves and how much there is to learn. I approach each project with both creativity and structure. Every build is a chance to turn complex ideas into simple, user-centered solutions.</p>
        </section>

        <section className="education-card reveal delay-1">
          <div className="card-header"><h2>Education</h2></div>
          <div className="education-timeline">
            {education.map((item) => (
              <div key={item.school} className="timeline-item">
                <div className={`timeline-dot ${item.isCurrent ? 'current' : ''}`}></div>
                <div className="timeline-info">
                  <h4>{item.school}</h4>
                </div>
                <span className={`date-tag ${item.isCurrent ? 'current' : ''}`}>{item.period}</span>
              </div>
            ))}
            </div>
        </section>

        <section className="tech-card reveal delay-2">
          <div className="card-header"><h2>Tech Stack</h2></div>
          {techGroups.map(g => (
            <div key={g.title} className="tech-group">
              <h4>{g.title}</h4>
              <div className="tech-tags">{g.items.map(item => <span key={item}>{item}</span>)}</div>
            </div>
          ))}
        </section>

        <section className="learning-card reveal delay-3">
          <div className="card-header"><h2>Currently Learning</h2></div>
          <ul className="learning-list">
            {learningNow.map((item) => <li key={item} className="learning-item">{item}</li>)}
          </ul>
          <p className="learning-recommendation-title">Certification</p>
          <blockquote className="learning-recommendation">
            {certification}
          </blockquote>
        </section>

        <section className="work-carousel-card reveal delay-3">
          <div className="card-header"><h2>Related Work</h2></div>
          <div className="work-carousel-frame">
            <button
              type="button"
              className="work-carousel-nav work-carousel-nav-prev"
              onClick={() => goToWorkSlide(activeWorkIndex - 1)}
              aria-label="Previous related work image"
            >
              <span aria-hidden="true">&lt;</span>
            </button>
            <button type="button" className="work-carousel-image-button" onClick={openWorkModal} aria-label="Open related work image">
              <img src={activeWork.src} alt={activeWork.alt} loading="lazy" />
            </button>
            <button
              type="button"
              className="work-carousel-nav work-carousel-nav-next"
              onClick={() => goToWorkSlide(activeWorkIndex + 1)}
              aria-label="Next related work image"
            >
              <span aria-hidden="true">&gt;</span>
            </button>
          </div>
          <span className="work-carousel-counter">{activeWorkIndex + 1} / {totalWorkSlides}</span>
          <div className="work-carousel-dots" role="tablist" aria-label="Select related work slide">
            {relatedWorkImages.map((item, index) => (
              <button
                key={item.src}
                type="button"
                className={`work-dot ${index === activeWorkIndex ? 'active' : ''}`}
                onClick={() => goToWorkSlide(index)}
                aria-label={`Show related work image ${index + 1}`}
                aria-pressed={index === activeWorkIndex}
              />
            ))}
          </div>
        </section>
      </div>

      <div className="right-rail">
        <section id="experience" className="experience-card reveal delay-2">
          <div className="card-header"><h2>Experiences</h2></div>
          <p className="subtitle">Quick view of recent roles</p>
          <div className="timeline-v2">
            {timeline.map((item) => (
              <div key={item.title} className="timeline-item">
                <div className={`timeline-dot ${item.isCurrent ? 'current' : ''}`}></div>
                <div className="timeline-info">
                  <h4>{item.title}</h4>
                  {item.subtitle ? <p>{item.subtitle}</p> : null}
                </div>
                <span className={`date-tag ${item.isCurrent ? 'current' : ''}`}>{item.period}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="projects" className="projects-section reveal delay-3">
          <div className="card-header">
            <h2>Projects</h2>
            <NavLink to="/projects" className="view-all">View All</NavLink>
          </div>
          <div className="project-grid">
            {projects.slice(0, 4).map((project) => (
              <div key={project.title} className={`project-item${project.title === "H's Barbershop" ? ' barbershop-card' : ''}`}>
                <div className="project-top">
                  <h3>{project.title}</h3>
                  <span className="type-tag">{project.type}</span>
                </div>
                <a className="project-preview" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} live demo`}>
                  <img src={project.preview} alt={`${project.title} preview`} loading="lazy" />
                </a>
                <p>{project.summary}</p>
                <div className="tech-tags">{project.stack.map((stack) => <span key={stack}>{stack}</span>)}</div>
                {project.status === 'Live Demo' ? (
                  <a href={project.link} className="btn-live" target="_blank" rel="noreferrer">{project.status}</a>
                ) : (
                  <span className="btn-ongoing" aria-disabled="true">{project.status}</span>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-highlight reveal delay-3">
          <div className="contact-highlight-copy">
            <h2>Let's Work Together.</h2>
            <p>I am currently taking an internship and actively applying for opportunities where I can grow as a developer and contribute to meaningful projects.</p>
            <p className="contact-meta">Follow Me</p>
            <div className="social-icon-row">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.url} target="_blank" rel="noreferrer" aria-label={link.label}>
                  <SocialIcon type={link.icon} />
                </a>
              ))}
            </div>
          </div>
          <div className="contact-highlight-links">
            <p className="contact-meta">Get In Touch</p>
            <a className="contact-pill" href="mailto:hlncuba@addu.edu.ph">
              <span className="contact-pill-head"><span className="contact-pill-icon"><SocialIcon type="email" /></span><strong>Email</strong></span>
              <span>hlncuba@addu.edu.ph</span>
            </a>
            <a className="contact-pill" href="tel:09815235178">
              <span className="contact-pill-head"><span className="contact-pill-icon"><SocialIcon type="phone" /></span><strong>Let's Talk</strong></span>
              <span>09815235178</span>
            </a>
          </div>
        </section>

      </div>
    </div>

    <section className="reference-footer reveal delay-3">
      <p>© 2026 Harley Cuba. All Rights Reserved.</p>
    </section>

    {isWorkModalOpen ? (
      <div className="work-modal" role="dialog" aria-modal="true" aria-label="Related work image preview" onClick={closeWorkModal}>
        <button
          type="button"
          className="work-modal-close"
          onClick={(event) => {
            event.stopPropagation()
            closeWorkModal()
          }}
          aria-label="Close image preview"
        >
          ×
        </button>
        <div className="work-modal-panel">
          <button
            type="button"
            className="work-modal-nav work-modal-nav-prev"
            onClick={(event) => {
              event.stopPropagation()
              goToWorkSlide(activeWorkIndex - 1)
            }}
            aria-label="Show previous related work image"
          >
            <span aria-hidden="true">&lt;</span>
          </button>
          <img src={activeWork.src} alt={activeWork.alt} onClick={(event) => event.stopPropagation()} />
          <button
            type="button"
            className="work-modal-nav work-modal-nav-next"
            onClick={(event) => {
              event.stopPropagation()
              goToWorkSlide(activeWorkIndex + 1)
            }}
            aria-label="Show next related work image"
          >
            <span aria-hidden="true">&gt;</span>
          </button>
        </div>
      </div>
    ) : null}

  </div>
  )
}

const Projects = () => (
  <div className="view-container reveal projects-view">
    <div className="view-header">
      <NavLink to="/" className="back-link"><img className="back-link-icon" src="/arrow.png" alt="" aria-hidden="true" /> Back to Home</NavLink>
      <h1>Projects</h1>
      <p>Browse selected builds focused on performance, usability, and clean UI execution.</p>
    </div>
    <div className="projects-full-grid">
      {projects.map((p) => (
        <div key={p.title} className={`project-item${p.title === "H's Barbershop" ? ' barbershop-card' : ''}`}>
          <div className="project-top"><h3>{p.title}</h3><span className="type-tag">{p.type}</span></div>
          <a className="project-preview" href={p.link} target="_blank" rel="noreferrer" aria-label={`Open ${p.title} live demo`}>
            <img src={p.preview} alt={`${p.title} preview`} loading="lazy" />
          </a>
          <p>{p.summary}</p>
          <div className="tech-tags">{p.stack.map((s) => <span key={s}>{s}</span>)}</div>
          {p.status === 'Live Demo' ? (
            <a href={p.link} className="btn-live" target="_blank" rel="noreferrer">{p.status}</a>
          ) : (
            <span className="btn-ongoing" aria-disabled="true">{p.status}</span>
          )}
        </div>
      ))}
    </div>

    <section className="reference-footer reveal delay-3">
      <p>© 2026 Harley Cuba. All Rights Reserved.</p>
    </section>
  </div>
)

const Experience = () => (
  <div className="view-container reveal">
    <div className="view-header">
      <h1>Experience</h1>
      <p>A professional timeline of my education and work experience.</p>
    </div>
    <div className="timeline-expanded">
      {timeline.map((item, i) => (
        <div key={i} className="timeline-row">
          <div className="timeline-date">{item.period}</div>
          <div className="timeline-card">
            <h4>{item.title}</h4>
            <p className="subtitle">{item.subtitle}</p>
            <p className="details">{item.details}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((previous) => ({ ...previous, [name]: value }))
    if (isSubmitted) {
      setIsSubmitted(false)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
  <div className="view-container reveal contact-view">
    <div className="view-header">
      <NavLink to="/" className="back-link"><img className="back-link-icon" src="/arrow.png" alt="" aria-hidden="true" /> Back to Home</NavLink>
      <h1>Contact</h1>
      <p>Let&apos;s connect. Send a message or reach out through my social channels.</p>
    </div>
    <div className="split-row">
      <section className="contact-form-card">
        <h3>Send a Message</h3>
        <p className="subtitle">I&apos;ll get back to you as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group"><label>Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required /></div>
          <div className="form-group"><label>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" required /></div>
          <div className="form-group"><label>Message</label><textarea rows="5" name="message" value={formData.message} onChange={handleChange} placeholder="How can I help?" required></textarea></div>
          <button className="btn-black">Submit</button>
          {isSubmitted ? <p className="form-success">Your message has been submitted.</p> : null}
        </form>
      </section>
      <section className="social-card">
        <h3>Social Links</h3>
        <p className="subtitle">Find me here and let&apos;s connect.</p>
        <div className="social-links">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.url} target={link.url.startsWith('mailto:') ? undefined : '_blank'} rel={link.url.startsWith('mailto:') ? undefined : 'noreferrer'}>
              <span className="social-left">
                <span className="social-icon"><SocialIcon type={link.icon} /></span>
                <span>{link.label}</span>
              </span>
            </a>
          ))}
        </div>
      </section>
    </div>

    <section className="reference-footer reveal delay-3">
      <p>© 2026 Harley Cuba. All Rights Reserved.</p>
    </section>
  </div>
  )
}

function App() {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('portfolio-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <Router>
      <ScrollReveal />
      <div className="site-shell">
        <main>
          <Routes>
            <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
            <Route path="/myportfolio" element={<Navigate to="/" replace />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
