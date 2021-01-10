import React from 'react'
import Comment from './Comment/Comment'

import style from './Comments.module.css'

const Comments = (props) => {
    return (
        <div className={style.comments}>
            {props.comments.map((a) => {
                return <Comment deleteComment={props.deleteComment} onCommentEdit={props.onCommentEdit} key={a.id} comment={a}></Comment>
            })}
        </div>
    )
}

export default Comments