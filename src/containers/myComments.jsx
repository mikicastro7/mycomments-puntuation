import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import style from './myComments.module.css';
import PostComment from '../components/Comments/PostComment/PostComment'
import Comments from '../components/Comments/Comments'

export default class myComments extends Component {
    state = {
        comments: [
            {
                id : 1,
                commentText: "Comentari 1",
                projectId: 1,
                userId: 1,
                rating: 4,
                date: "01/08/2021 22:35:00"
            },
            {
                id : 2,
                commentText: "Comentari 2",
                projectId: 1,
                userId: 1,
                rating: 3,
                date: "01/01/2021 12:00:00"
            },
            {
                id : 3,
                commentText: "Comentari 3",
                projectId: 1,
                userId: 1,
                rating: 3,
                date: "01/08/2020 21:35:00"
            }
        ]
    }

    onComment = (comment, rating) => {
        let today = new Date();
        this.setState({
            comments: this.state.comments.concat({
                id: Math.random(),
                commentText: comment,
                projectId: 1,
                userId: 1,
                rating: rating,
                date: today.getFullYear() + "/" + (today.getMonth()+1) + "/" + today.getDate() + " " + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            })
        })
    }
    onCommentEdit = (commentText, rating, id) => {
        this.setState({
            comments: this.state.comments.map(comment => {
                if (comment.id === id) {
                    comment.commentText = commentText
                    comment.rating = rating
                }
                return comment
            })
        })
    }

    deleteComment = (id) => {
        this.setState({
            comments: this.state.comments.filter(comment => 
                comment.id !== id
            )
        })
    }


    render() {
        return (
            <div>
                <Header />
                <div className={style.commentsIntro}>
                    <h2>You are in the review of <strong>{this.props.projectName}</strong> project</h2>
                    <Link to={"/" + this.props.projectName}> <h3>See the project</h3> </Link>
                </div>
                <div className={style.commentsContainer}>
                    <hr/>
                    <h2>{this.state.comments.length} COMMENTS</h2>
                    <PostComment onComment={this.onComment} />
                    <Comments deleteComment={this.deleteComment} onCommentEdit={this.onCommentEdit} comments={this.state.comments}></Comments>
                    
                </div>
            </div>
        )
    }
}
