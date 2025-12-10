import { useState } from "react";
import "../style/Project.css";

const projects = [
  
  {
  id: 1,
  title: "Instyle Women's Fashion Store",
  desc: "A modern, full-featured women's fashion e-commerce platform offering secure user authentication (email/password & Google), product management, product variants, shopping cart, wishlist, secure checkout, and an intuitive admin dashboard. Built with Python, Django, SQL, and React for a smooth and optimized shopping experience.",
  img: "/assets/fashion-store.png",
  tags: ["Python", "Django","Dsa","Sql"],
  github: "https://github.com/saniyajoseph112/IINSTYLE",
  // live: "https://fashion-store-demo.com"
},

{
  id: 2,
  title: " User Management System",
  desc: "A scalable full-stack application featuring JWT authentication with email login, role-based access control, secure CRUD operations, Redux-powered state management, and a modern admin dashboard for managing users, profiles, and permissions. Built with React and Django REST Framework.",
  img: "/assets/user-management.png",
  tags: ["React", "Django REST", "JWT", "Redux", "Python", "PostgreSQL"],
  github: "https://github.com/saniyajoseph112/django-react-usermanagement",
  // live: "https://user-management-demo.com"
}

    
  ,
 {
  id: 3,
  title: "Todo Application",
  desc: "A clean and user-friendly task management application featuring Redux Toolkit for global state management, task filtering (All/Active/Completed), persistent storage using LocalStorage, and a fully responsive UI.",
  img: "/assets/Todo.png",
  tags: ["React", "Redux Toolkit", "LocalStorage", "CSS"],
  github: "https://github.com/saniyajoseph112/Todo-App-react",
  // live: "https://todo-app-demo.com"
},

  {
  id: 4,
  title: "OLX Clone – Buy & Sell Marketplace",
  desc: "A feature-rich marketplace inspired by OLX, including user authentication with Firebase, product posting, real-time listings, category-based filtering, search functionality, and a responsive UI optimized for mobile and web.",
  img: "/assets/olx.png",
  tags: ["React", "Firebase", "Context API", "CSS"],
  github: "https://github.com/saniyajoseph112/Olx--clone---react-",
  // live: "https://olx-clone-demo.com"
},

  {
  id: 5,
  title: "Netflix Clone – Movie Streaming UI",
  desc: "A visually appealing streaming platform clone integrating TMDB API to display trending, popular, and genre-based movies with a smooth UI, hover previews, trailer playback, and responsive design.",
  img: "/assets/netflix.png",
  tags: ["React", "TMDB API", "Axios", "CSS"],
  github:"https://github.com/saniyajoseph112/Netflix-Clone",
  // live: "https://net flix-clone-demo.com"
}

];

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Django", "React", "E-commerce", "API"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="projects">
      <div className="projects-header">
        {/* <span className="section-label">Portfolio</span> */}
        <h2>Featured Projects</h2>
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
      <div className="projects-container">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="project-overlay">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="View GitHub"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  Code
                </a>
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label="View Live Demo"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Live
                </a>
              </div>
            </div>
            
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found for this category.</p>
        </div>
      )}
    </section>
  );
}