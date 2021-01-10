import React, { Component } from 'react'
import TextareaAutosize from 'react-textarea-autosize';
import style from './PostComment.module.css'
import StarRatings from 'react-star-ratings';

export default class CommentInput extends Component {
    state = {
        comment: '',
        rating: 0,
    }

    changeRating = (newRating, name ) => {
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
            this.props.onComment( this.state.comment, this.state.rating );
            this.setState({ comment: '', rating: 0 })
        }
    }

    cancelHandler = (e) => {
        e.preventDefault();
        this.setState({ comment: '', rating: 0 })
    }

    render() {
        return (
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
                    <button className={style.commentButton}>POST</button>
                </div>
                </div>
                
            </form>
        )
    }
}
