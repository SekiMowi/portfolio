import React from 'react'
import styles from './home.module.scss'
import { SocialIcon } from 'react-social-icons';
type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.name}>
        <h1>Hi I'm Ville Mäkinen</h1>
          <div className={styles.about}>
            <p>Software Developer</p>
            <SocialIcon url="https://github.com/villemakinen27" style={{ margin: 10, height : 50 ,width: 50}} fgColor="#ffffff" />
            <SocialIcon url="https://www.linkedin.com/in/villehmakinen/"style={{ margin:10, height : 50 ,width: 50}} fgColor="#ffffff" />
         </div>
        </div>
        <div>
          <h1 className={styles.skills}>Skills</h1>
            <li className={styles.skillsList}>
              <h2>Programs</h2>
                <span>
                  Unity
                </span>
              <h2>Languages</h2>
                <span>
                  C#
                </span>
            </li>
        </div>
    </div>
  )
}

export default Home
