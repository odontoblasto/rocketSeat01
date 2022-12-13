import styles from './App.module.css'
import  './global.css'
import {Header} from './src/components/Header'
import {Post} from './src/components/Post'
import {Sidebar} from './src/components/Sidebar'


export function App() {
  return (
   <div className=''>
     <img src="./src/images/mh_logo.svg"/>
      <Header/>
     <div className={styles.wrapper}>
      <Sidebar/>
      <main>
        <Post/>
      </main>
     </div>
      
  </div>
  )
}
