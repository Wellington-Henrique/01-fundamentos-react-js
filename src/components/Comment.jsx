import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'

export function Comment({content}) {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/Wellington-Henrique.png"/>

            <div className={styles.commentBox}>
                 <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Wellington Henrique (você)</strong>
                            
                            <time 
                                title='24 de fevereiro às 21:40h'
                                dateTime='2024-02-24 21:40:00'>
                                Cerca de 1h
                            </time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{content}</p>
                 </div>

                 <footer>
                    <button>
                        <ThumbsUp size={20}/>
                        #aplaudir <span>20</span>
                    </button>
                 </footer>
            </div>
        </div>
    )
}