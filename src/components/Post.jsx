import styles from './Post.module.css'


export  function Post() {
  return(
    <article className={styles.post}>
      <header className={styles.header}>
        <div className={styles.author}>
          <img className={styles.avatar}         
            src='https://github.com/odontoblasto.png'/>
          <div className={styles.authorinfo}>
            <strong>Carlos</strong>
            <span>Estudante</span>
            
          </div>
        
        </div>
        <time title='' dateTime="">Publicado há</time>
      </header>
      <div className={styles.content}>
        <p>Fala galera</p>
        <p>
          <a href="">cedfv.com </a>
          <a href=""> cedfv.com </a>
          <a href=""> cedfv.com</a>
        </p>
      </div>
        
     </article>
    )
}