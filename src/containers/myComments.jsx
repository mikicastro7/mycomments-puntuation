import React, { Component } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
import style from './myComments.module.css';
import PostComment from '../components/Comments/PostComment/PostComment'
import Comments from '../components/Comments/Comments'
import Axios from 'axios';

export default class myComments extends Component {
    state = {
        comments: []
    }

    componentDidMount() {
        Axios.get('projectComments/' + this.props.projectId)
          .then(response => {
            console.log(response.data)
            this.setState({comments : response.data.comments})
          })
      }

    onComment = (comment, rating) => {
        Axios({
            method: 'post',
            url: 'comment',
            data: {
              comment_text : comment,
              rating : rating,
              project_id : this.props.projectId,
              
            }
        }).then(response =>{
            console.log(response)
            const newComment = {
                
              id : response.data.comments.id,
              comment_text : comment,
              rating : rating,
              project_id : this.props.projectId,
              created_at : response.data.comments.created_at
            }
            this.setState({
              comments : [...this.state.comments, newComment]
            })
        });
    }


    onCommentEdit = (commentText, rating, id) => {
        this.setState({
            comments: this.state.comments.map(comment => {
              if(comment.id === id){
                Axios({
                  method: 'patch',
                  url: 'comment/' + id,
                  data: {
                    comment_text : commentText,
                    rating : rating,
                    project_id : this.props.projectId
                  }
                });
                  comment.comment_text = commentText
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
        Axios.delete('comment/' + id)
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
