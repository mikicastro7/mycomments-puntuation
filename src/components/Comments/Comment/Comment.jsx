import React, { Component } from 'react'
import style from './Comment.module.css'
import StarRatings from 'react-star-ratings';
import Dropdown from 'react-bootstrap/Dropdown';
import EditComment from '../EditComment/EditComment'




export default class Comment extends Component {

    state = {
        edit : false
    }

    getTime = (d) => {
        let actualMS = new Date().getTime();
        let commentMS = new Date(d).getTime();

        let timePassed = actualMS - commentMS

        let times = [];

        times.push(parseInt(Math.floor(timePassed / 1000)))
        times.push(parseInt(Math.floor(times[0] / 60)))
        times.push(parseInt(Math.floor(times[1] / 60)))
        times.push(parseInt(Math.floor(times[2] / 24)))
        times.push(parseInt(Math.floor(times[3] / 30)))
        times.push(parseInt(Math.floor(times[4] / 12)))
        
        let timesUnits = ["second", "minut", "hour", "day", "month", "year"]
        let unitI = 0;
        for(var i = times.length - 1; i > 0; i--){
            if (times[i] !== 0) {
                unitI = i;
                break
            }
        }
        
        let rUnit =  times[unitI] + " " + timesUnits[unitI] + (times[unitI] > 1 ? "s" : "") + " ago"
        if (times[unitI] === 0) {
            rUnit = "now"
        }
        return rUnit 
    }

   

    edit = () => {
        this.setState({
            edit: !this.state.edit
        })
        
    }

    delete = () => {
        this.props.deleteComment(this.props.comment.id)
    }


    cancelEdit = (hola) => {
        this.setState({
            edit: false
        })
    }

    render() {
        return (
            <div className={style.comment}>
                {this.state.edit ? <EditComment onCommentEdit={this.props.onCommentEdit} comment={this.props.comment} cancelEdit={this.cancelEdit}></EditComment> : 
                <React.Fragment>
                <div className={style.topComment}>
                    <div>
                        <span className={style.username}>Miquel</span>
                        <span className={style.postedTime}>{this.getTime(this.props.comment.created_at)}</span>
                    </div>
                    <Dropdown>
                        <Dropdown.Toggle className={style.dropdownI} id="dropdown-basic">
                            Options
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={this.edit}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={this.delete}>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <StarRatings
                    rating={this.props.comment.rating}
                    numberOfStars={5}
                    name='rating'
                    starDimension="20px"
                    starSpacing="0px"
                    starRatedColor="#ffd900"
                    starHoverColor="#ffcc00"
                />
                <p className={style.commentText}>{this.props.comment.comment_text}</p>
                </React.Fragment>}
                
            </div>
        )
    }
}

