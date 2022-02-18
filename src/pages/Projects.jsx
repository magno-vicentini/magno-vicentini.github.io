import React, { useEffect, useState } from 'react';
import '../styles/Projects.scss';
import '../styles/Buttons.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const allProjects = await fetch(
        'https://api.github.com/users/magno-vicentini/repos',
        {
          headers: {
            Accept: 'application/vnd.github.v3+json',
          },
        }
      ).then((response) => response.json());
      setProjects(allProjects);
    };

    fetchProjects();
  }, []);

  return (
    <div className='projects-page' id='projects'>
      <h1 data-aos='zoom-in'>Projects</h1>
      <div className='projects-container'>
        {projects.map((repos) => {
          if (repos.name.includes('magno')) return '';
          return (
            <div
              className={`repos-box repo-${repos.name}`}
              data-aos='fade-up'
              key={repos.name}
            >
              <h3>{repos.name.toUpperCase()}</h3>
              <div className='repos-container'>
                <div className='desc-container'>
                  <p>{repos.description}</p>
                  {repos.topics.map((topic) => {
                    return (
                      <div key={topic} className='topic-button'>
                        {topic}
                      </div>
                    );
                  })}
                </div>
                <div className='links-button'>
                  <a
                    href={repos.clone_url}
                    color='white'
                    className='links-button'
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className='button-border'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      View Code
                    </div>
                  </a>
                  {
                    (repos.homepage) ? (
                      <a
                    href={repos.homepage}
                    color='white'
                    className='links-button'
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className='button-border'>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      View Project
                    </div>
                  </a>
                    ) : ''
                  }
                  
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
