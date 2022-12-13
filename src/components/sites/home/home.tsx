import React from 'react'
import styles from './home.module.scss'
type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
      <div className={styles.name}>
        <h1>Ville Mäkinen</h1>
        <div className={styles.about}>
          <p>Software Developer</p>
          </div>
        </div>
    </div>
  )
}

export default Home
