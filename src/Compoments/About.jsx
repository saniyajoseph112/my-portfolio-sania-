import '../style/About.css';

export default function About() {
  const skillsData = [
    { name: 'Backend', percentage: 95, color: '#10b981', icon: '🔧' },
    { name: 'Frontend', percentage: 90, color: '#f97316', icon: '🎨' },
    { name: 'Database', percentage: 92, color: '#3b82f6', icon: '💾' },
    { name: 'Design', percentage: 85, color: '#ec4899', icon: '✨' }
  ];

  const technologies = [
    { 
      name: 'Python', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
      color: '#3776AB'
    },
    { 
      name: 'Django', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
      color: '#092E20'
    },
    { 
      name: 'React', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      color: '#61DAFB'
    },
    { 
      name: 'PostgreSQL', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      color: '#4169E1'
    }
  ];

  const capabilities = [
    'Full-Stack Web Development',
    'RESTful API Development',
    'UI/UX Design',
    'Database Architecture'
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Header */}
        <div className="about-header-center">
          <p className="about-label">[ ABOUT ME ]</p>
          <h2 className="about-title">
            Developing <span className="highlight">Experiences</span>
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="about-grid">
          
          {/* Left Side - Tech Stack & Description */}
          <div className="about-left">
            <div className="tech-stack-card">
              <div className="tech-icons">
                {technologies.map((tech, index) => (
                  <div 
                    className="tech-icon-wrapper" 
                    key={index}
                    title={tech.name}
                  >
                    <div 
                      className="tech-icon-bg"
                      style={{ backgroundColor: tech.color }}
                    >
                      <img 
                        src={tech.icon} 
                        alt={tech.name}
                        className="tech-icon-img"
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="tech-label">
                {/* <span className="stack-text">P</span>
                <span className="years-badge">2+ Years of Excellence</span>
                <span className="stack-text">L</span> */}
              </div>
              <div className="stack-subtitle">Full Stack Developer</div>
            </div>

            <div className="about-description">
              <p>
                I'm a passionate Full Stack Developer specializing in Python and Django, 
                with a strong focus on creating scalable web applications that deliver 
                exceptional user experiences. My journey from commerce to technology has 
                given me a unique perspective on building solutions that matter.
              </p>
              <p>
                With expertise in backend development using Django and modern frontend 
                frameworks like React.js, I transform complex business requirements into 
                elegant, maintainable code. I'm committed to continuous learning and 
                staying current with industry best practices.
              </p>
            </div>
          </div>

          {/* Right Side - Skills & Capabilities */}
          <div className="about-right">
            {/* Skills Grid */}
            <div className="skills-grid">
              {skillsData.map((skill, index) => (
                <div className="skill-card" key={index}>
                  <div className="skill-icon" style={{ backgroundColor: skill.color }}>
                    {skill.icon}
                  </div>
                  <div className="skill-info">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-percentage">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-fill" 
                        style={{ 
                          width: `${skill.percentage}%`,
                          backgroundColor: skill.color 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* What I Do */}
            <div className="capabilities-card">
              <h3 className="capabilities-title">What I Do</h3>
              <ul className="capabilities-list">
                {capabilities.map((item, index) => (
                  <li key={index}>
                    <span className="bullet">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}