
import TextareaAutosize from 'react-textarea-autosize';
import style from './EditComment.module.css'
import StarRatings from 'react-star-ratings';

import React, { Component } from 'react'

export default class EditComment extends Component {

    state = {
        comment: this.props.comment.commentText,
        rating: this.props.comment.rating,
    }

    changeRating = (newRating ) => {
        this.setState({
          rating: newRating
        });
    }

    fieldHandler = (e) => {
        this.setState({[e.target.name] : e.target.value})
    }

    submitHandler = ( event ) => {
        event.preventDefault();
        if (this.state.comment.length > 5 && this.state.rating > 0) {
            this.props.onCommentEdit( this.state.comment, this.state.rating, this.props.comment.id );
            this.setState({ comment: '', rating: 0 })
        }
        this.props.cancelEdit();
    }

    cancelHandler = (e) => {
        e.preventDefault();
        this.props.cancelEdit();
        this.setState({ comment: '', rating: 0 })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                <div>
                <TextareaAutosize name="comment" value={this.state.comment} onChange={this.fieldHandler} className={style.commentInput} placeholder="Comment here"/>
                </div>
                <div className={style.punctuationButtons}>
                    <div className={style.puntuation}>
                    <StarRatings
                        rating={this.state.rating}
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                        starDimension="30px"
                        starSpacing="1px"
                        starRatedColor="#ffd900"
                        starHoverColor="#ffcc00"
                     />
                    </div>
                    
                <div className={style.commentButtons}>
                    
                    
                    <button onClick={this.cancelHandler} className={style.cancelButton}>CANCEL</button>
                    <button className={style.commentButton}>EDIT</button>
                </div>
                </div>
                
            </form>
            </div>
        )
    }
}
