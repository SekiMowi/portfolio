import React from 'react'
import style from './placeholder.module.scss'

type PlaceholderProps = {

}

const Placeholder: React.FC<PlaceholderProps> = () => {
  return (
    <div className={style.placeholder}>
        <body>Placeholder</body>
    </div>
  )
}

export default Placeholder
