import { useState } from "react";
import "../style/Project.css";

const projects = [
  {
    id: 1,
    title: "Instyle Women's Fashion Store",
    desc: "A modern, full-featured women's fashion e-commerce platform offering secure user authentication (email/password & Google), product management, product variants, shopping cart, wishlist, secure checkout, and an intuitive admin dashboard. Built with Python, Django, SQL, and React for a smooth and optimized shopping experience.",
    img: "/assets/fashion-store.png",
    tags: ["Python", "Django", "SQL", "DSA","ORM"],
    category: ["Django", "E-commerce"],
    github: "https://github.com/saniyajoseph112/IINSTYLE",
    featured: true
  },
  {
    id: 2,
    title: "User Management System",
    desc: "A scalable full-stack application featuring JWT authentication with email login, role-based access control, secure CRUD operations, Redux-powered state management, and a modern admin dashboard for managing users, profiles, and permissions. Built with React and Django REST Framework.",
    img: "/assets/user-management.png",
    tags: ["React", "Django REST", "JWT", "Redux", "PostgreSQL"],
    category: ["Django", "React", "API"],
    github: "https://github.com/saniyajoseph112/django-react-usermanagement",
    featured: true
  },
  {
    id: 3,
    title: "Todo Application",
    desc: "A clean and user-friendly task management application featuring Redux Toolkit for global state management, task filtering (All/Active/Completed), persistent storage using LocalStorage, and a fully responsive UI.",
    img: "/assets/Todo.png",
    tags: ["React", "Redux Toolkit", "LocalStorage"],
    category: ["React"],
    github: "https://github.com/saniyajoseph112/Todo-App-react",
    featured: false
  },
  {
    id: 4,
    title: "OLX Clone – Buy & Sell Marketplace",
    desc: "A feature-rich marketplace inspired by OLX, including user authentication with Firebase, product posting, real-time listings, category-based filtering, search functionality, and a responsive UI optimized for mobile and web.",
    img: "/assets/olx.png",
    tags: ["React", "Firebase", "Context API"],
    category: ["React", "E-commerce"],
    github: "https://github.com/saniyajoseph112/Olx--clone---react-",
    featured: false
  },
  {
    id: 5,
    title: "Netflix Clone – Movie Streaming UI",
    desc: "A visually appealing streaming platform clone integrating TMDB API to display trending, popular, and genre-based movies with a smooth UI, hover previews, trailer playback, and responsive design.",
    img: "/assets/netflix.png",
    tags: ["React", "TMDB API", "Axios"],
    category: ["React", "API"],
    github: "https://github.com/saniyajoseph112/Netflix-Clone",
    featured: false
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Django", "React", "E-commerce", "API"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(filter));

  return (
    <section id="projects" className="projects">
      <div className="projects-wrapper"
       style={{
    maxWidth: "1600px",
    margin: "0 auto",
    padding: "0 24px"
  }}
>
        
        {/* Section Header */}
        <div className="projects-header">
          <span className="section-label">[ PORTFOLIO ]</span>
          <h2>Featured <span className="title-gradient">Projects</span></h2>
          <p className="section-desc">
            A showcase of my recent work demonstrating expertise in full-stack development, 
            from e-commerce platforms to interactive web applications.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div 
              className={`project-card ${project.featured ? 'featured' : ''}`}
              key={project.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {project.featured && (
                <div className="featured-badge">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                  Featured
                </div>
              )}

              <div className="project-image">
                <img src={project.img} alt={project.title} />
                <div className="project-overlay">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View GitHub Repository"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    View Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="View Live Demo"
                    >
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
              
              <div className="project-info">
                <h3>{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                
                <div className="project-footer">
                  <div className="tech-label-small">Technologies:</div>
                  <div className="project-tags">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <div className="no-projects-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M16 16s-1.5-2-4-2-4 2-4 2"/>
                <line x1="9" y1="9" x2="9.01" y2="9"/>
                <line x1="15" y1="9" x2="15.01" y2="9"/>
              </svg>
            </div>
            <h3>No Projects Found</h3>
            <p>No projects match this category.</p>
            <button className="filter-btn active" onClick={() => setFilter("All")}>
              View All Projects
            </button>
          </div>
        )}

      </div>
    </section>
  );
}