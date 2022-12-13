import styles from './Sidebar.module.css'


export function Sidebar(){
  return(
    <aside className={styles.sidebar}>
      <img  className={styles.cover} 
        src='https://images.unsplash.com/photo-1669672764165-9fd29232ff62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50'/>
      <div className={styles.profile}>
        <img className ={styles.avatar} src='https://github.com/odontoblasto.png'/>
        <strong>Carlos</strong>
        <span>student</span>
      </div>
      <footer>
    
        <a href='#'>Editar seu Perfil</a>
     
      
      </footer>
    </aside>
    
  )
}