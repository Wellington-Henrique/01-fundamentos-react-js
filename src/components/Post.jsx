import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <img 
                        className={styles.avatar} 
                        src="https://github.com/Wellington-Henrique.png"
                    />

                    <div className={styles.authorInfo}>
                        <strong>Wellington Henrique</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time 
                    title='24 de fevereiro às 21:40h'
                    dateTime='2024-02-24 21:40:00'>
                    Publicado há uma hora
                </time>
            </header>

            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉 <a href="#">jane.design/doctorcare</a></p>
                <p><a href="#">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}