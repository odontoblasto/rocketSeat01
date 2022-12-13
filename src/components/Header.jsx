import styles from "./Header.module.css"
import logo from'../images/mh_team_logo.png'


export function Header(){
  return(
    <header className={styles.header}>
      <img src={logo} alt='MH team logo'/>
      <strong>MH Team Feed</strong>
    </header>
  )
}