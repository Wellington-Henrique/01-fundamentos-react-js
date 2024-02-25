import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                
                <div className={styles.author}>
                    <Avatar src="https://github.com/Wellington-Henrique.png"/>

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
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz na especialização de em React da Rocketseat. 🚀</p>
                <p>👉<a href="#">https://github.com/Wellington-Henrique</a></p>
                <p>
                    <a href="#">#novoprojeto</a>
                    <a href="#">#nlw</a>
                    <a href="#">#rocketseat</a>
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    )
}