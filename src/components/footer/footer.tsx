import React from 'react'
import styles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons';


type FooterProps = {

}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className={styles.footer}>
        <div>
        <SocialIcon url="https://github.com/villemakinen27" style={{ margin: 10, height : 40 ,width: 40}} fgColor="#ffffff" />
        <SocialIcon url="https://www.linkedin.com/in/villehmakinen/"style={{ margin: 10, height : 40 ,width: 40}} fgColor="#ffffff" />
        </div>

    </footer>
  )
}

export default Footer
