import { useState } from 'react';
import '../style/About.css';

export default function About() {
  const [activeTab, setActiveTab] = useState('achievements');

  const experience = [
    {
      icon: '🎓',
      title: 'Education',
      subtitle: 'B.Com Graduate',
      description: 'Successfully transitioned from commerce background to tech, proving adaptability and dedication.'
    },
    {
      icon: '💼',
      title: 'Full Stack Developer',
      subtitle: 'Modern Tech Stack',
      description: 'Building scalable applications with Python, Django, React.js, and SQL databases.'
    },
    {
      icon: '🚀',
      title: 'Career Switch',
      subtitle: 'Biggest Achievement',
      description: 'Successfully pivoted from B.Com to IT field through self-learning and determination.'
    }
  ];

  const achievements = [
    {
      icon: '🎯',
      title: 'Career Transformation',
      description: 'Made a successful transition from B.Com to Full Stack Development'
    },
    {
      icon: '💻',
      title: 'Technical Expertise',
      description: 'Mastered full stack development with Python, Django, React.js, and SQL'
    },
    {
      icon: '🏆',
      title: 'Self-Taught Developer',
      description: 'Learned programming independently through dedication and consistent practice'
    },
    {
      icon: '🔧',
      title: 'Problem Solver',
      description: 'Strong foundation in Data Structures & Algorithms for efficient solutions'
    }
  ];

  const technicalSkills = [
    { name: 'Python', icon: '🐍' },
    { name: 'Django', icon: '🎯' },
    { name: 'React.js', icon: '⚛️' },
    { name: 'JavaScript', icon: '📜' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'ORM', icon: '🔗' },
    { name: 'HTML & CSS', icon: '🎨' },
    { name: 'DSA', icon: '🧩' },
    { name: 'Git & GitHub', icon: '📁' },
    { name: 'REST API', icon: '🌐' }
  ];

  return (
    <section className="about" id="about">
      <div className="about-container">
        
        {/* Header Section */}
        <div className="about-header">
          {/* <span className="section-label">Get To Know</span> */}
          <h2>About Me</h2>
        </div>

        {/* Introduction */}
        <div className="intro-section">
          <div className="intro-content">
            <p className="intro">
              Hi, I'm <strong>Saniya</strong>, a <span className="highlight">Full Stack Developer</span> from Kerala 🇮🇳.  
              I specialize in building robust web applications using <strong>Python, Django, React.js, SQL,</strong> and <strong>modern JavaScript</strong>.
            </p>
            <p className="intro-secondary">
              My journey into tech is unique—I'm a <strong>B.Com graduate</strong> who discovered my passion for programming and made a successful career switch to IT. 
              This transition is my biggest achievement, proving that with dedication and continuous learning, you can master any field. 
              I combine strong problem-solving skills with Data Structures & Algorithms expertise to build scalable, efficient solutions.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="experience-grid">
            {experience.map((item, index) => (
              <div className="experience-card" key={index}>
                <div className="exp-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p className="exp-subtitle">{item.subtitle}</p>
                <p className="exp-desc">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills Section */}
        <div className="technical-skills-section">
          <h3 className="tech-skills-title">
            <span className="tech-icon">💼</span>
            Technical Stack
          </h3>
          <div className="tech-skills-grid">
            {technicalSkills.map((skill, index) => (
              <div className="tech-skill-badge" key={index}>
                <span className="tech-skill-icon">{skill.icon}</span>
                <span className="tech-skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs Navigation */}
        {/* <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
            onClick={() => setActiveTab('achievements')}
          >
            Achievements
          </button>
          <button 
            className={`tab-btn ${activeTab === 'stats' ? 'active' : ''}`}
            onClick={() => setActiveTab('stats')}
          >
            Quick Stats
          </button>
        </div> */}

        {/* Achievements Tab Content */}
        {/* {activeTab === 'achievements' && (
          <div className="achievements-section">
            <div className="achievements-intro">
              <h3>My Journey & Milestones</h3>
              <p>From B.Com to Full Stack Developer - A story of transformation and dedication</p>
            </div>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div className="achievement-card" key={index}>
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h4>{achievement.title}</h4>
                  <p>{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )} */}

        {/* Stats Tab Content
        {activeTab === 'stats' && (
          <div className="stats-section">
            <div className="stat-box">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies Mastered</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">100+</div>
              <div className="stat-label">GitHub Commits</div>
            </div>
            <div className="stat-box">
              <div className="stat-number">1</div>
              <div className="stat-label">Career Transformation</div>
            </div>
          </div>
        )} */}

      </div>
    </section>
  );
}