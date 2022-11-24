import React from 'react'
import styles from './home.module.scss'
type HomeProps = {

}

const Home: React.FC<HomeProps> = () => {
  return (
    <div className={styles.home}>
        <h1>My Name</h1>
        <p>My intro</p>
    </div>
  )
}

export default Home
