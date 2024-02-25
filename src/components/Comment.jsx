import { Avatar } from './Avatar'
import { ThumbsUp, Trash } from 'phosphor-react'

import styles from './Comment.module.css'
import { useState } from 'react'

export function Comment({comment, onDelete}) {
    const [likeCount, setLikeCount] = useState(0)

    const handleLikeComment = () => {
        setLikeCount(prev => prev+1)
    }

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

                        <button 
                            title='Deletar comentário'
                            onClick={() => onDelete(comment.id)}
                        >
                            <Trash size={24}/>
                        </button>
                    </header>
                    
                    <p>{comment.content}</p>
                 </div>

                 <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp size={20}/>
                        #aplaudir <span>{likeCount}</span>
                    </button>
                 </footer>
            </div>
        </div>
    )
}