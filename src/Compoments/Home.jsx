import { useState, useEffect } from 'react';
import '../style/Home.css';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const roles = ['Full Stack Developer', 'Python Expert', 'Django Specialist', 'React Developer'];
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (typedText.length < currentRole.length) {
          setTypedText(currentRole.slice(0, typedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(typedText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((roleIndex + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  const techStack = [
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' }
  ];

  return (
    <section id="home" className="home">
      <div className="home-container">
        
        {/* Profile Section */}
        <div className="home-image-section">
          <div className="profile-wrapper">
            <div className="profile-outer-ring"></div>
            <div className="profile-image">
              <img src="/assets/saniya.jpg" alt="Saniya Joseph" />
            </div>
            <div className="profile-status">
              <span className="status-dot"></span>
              <span className="status-text">Available for Work</span>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="home-content">
          
          <div className="greeting-badge">
            <span className="wave">👋</span> Hello, I'm
          </div>
          
          <h1 className="main-title">
            Saniya <span className="title-highlight">Joseph</span>
          </h1>

          <div className="role-display">
            <span className="role-label">I'm a </span>
            <span className="typed-role">{typedText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="intro-text">
            Passionate Full Stack Developer specializing in building exceptional digital experiences. 
            With expertise in Python, Django, and React.js, I transform complex problems into elegant, 
            scalable solutions that make a real impact.
          </p>

          {/* Stats */}
          {/* <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">2+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">15+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
          </div> */}

          {/* Tech Stack Icons */}
          <div className="tech-stack">
            <div className="tech-label">Tech Stack</div>
            <div className="tech-icons-grid">
              {techStack.map((tech, index) => (
                <div className="tech-icon-item" key={index} title={tech.name}>
                  <img src={tech.icon} alt={tech.name} />
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">
              <span>View My Work</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
            <a href="#contact" className="btn btn-secondary">
              <span>Let's Talk</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </a>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <div className="social-label">Connect with me</div>
            <div className="social-links">
              <a href="https://github.com/saniyajoseph112" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/saniya-joseph-1b02b329b/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="mailto:josephsaniya671@gmail.com" className="social-icon" aria-label="Email">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </a>
            </div>
          </div>

        </div>

      </div>
       <div
    className="home-container"
    style={{
      maxWidth: "1600px",
      margin: "0 auto",
      padding: "0 24px"
    }}
  ></div>

      {/* Decorative Elements */}
      <div className="bg-decoration decoration-1"></div>
      <div className="bg-decoration decoration-2"></div>
    </section>
  );
}