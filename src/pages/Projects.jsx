import React, { useEffect, useState } from 'react'
import '../styles/Projects.scss' 
import '../styles/Buttons.scss'




function Projects({ history }) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async() => {
      const allProjects = await fetch('https://api.github.com/users/magno-vicentini/repos', { 
                         headers: {
                              'Accept' : 'application/vnd.github.v3+json'
                          }}).then(response => response.json())
      setProjects(allProjects)
      console.log(projects)
    } 

    fetchProjects()
  }, [])
  
  return (    
    <div className='projects-page' id="projects">
      <h1 data-aos="zoom-in">Projects</h1>
      { console.log(projects)}
      <div className='projects-container'>
        {
          projects.map((repos) => {
            if(repos.name.includes('magno')) return '';
            return (
              <div className={`repos-box repo-${repos.name}`} data-aos="fade-up">
                <h3>{(repos.name).toUpperCase()}</h3>
                <div className='repos-container'>
                  <div className='desc-container'>
                    <p>{repos.description}</p>
                    {
                      repos.topics.map((topic) => {
                        return (
                          <div className='topic-button'>{topic}</div>
                        )
                      })
                    }
                  </div>
                    <div className='links-button'>
                   
                      <div className="button-border" onClick={() => history.push(repos.url)}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        View Code
                      </div>
                             
                    <div className="button-border">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      View Project
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Projects;
