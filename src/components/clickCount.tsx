import React, { useEffect, useState } from 'react'
import styles from './clickCount.module.scss'
type ClickCountProps = {

}

const ClickCount: React.FC<ClickCountProps> = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log('count:', count)
    },[count]);
  
  return (
    <div className={styles.container}>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
      ClickCount
      </button>
    </div>
  )
}
export default ClickCount

