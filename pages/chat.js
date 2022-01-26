import styles from '../styles/Chat.module.css'


export default function PaginaDoChat() {
    return (
    <div className={styles.container}>
        <div className={styles.main}>
        <div className={styles.header}>
        <h1>Chat</h1>
        <button type='button'>Logout</button>
        </div>
          <div className={styles.content}>
              <input className={styles.message} placeholder='Insira sua mensagem aqui...'>
                  
              </input>
          </div>
        </div>
    </div>
    
    )

}