import {FaSpinner} from 'react-icons/fa'
import styles from './Spiner.module.css'

export const Spinner = () => {
  return (
    <div className={styles.spinner}><FaSpinner className={styles.spinnering}/></div>
  )
}
