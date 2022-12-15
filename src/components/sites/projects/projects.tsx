import React from 'react'
import styles from './project.module.scss'
import pro1 from "./Project1.png"
type ProjectsProps = {

}

const Projects: React.FC<ProjectsProps> = () => {
  return (
    <div>
      <h1 className={styles.projectTitle}>My Projects</h1>
        <div className={styles.projectList}>
          <img src={pro1} alt=''/>
          <h2 className={styles.pr}>My Fps Game</h2>
        </div>
    </div>
  )
}

export default Projects
