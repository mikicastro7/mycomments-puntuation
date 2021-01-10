

import { Link } from 'react-router-dom';

import React, { Component } from 'react'
import styles from './Project.module.css'

export default class Project extends Component {
    render() {
        return (
        <div className={styles.project}>
           <Link to={"/" + this.props.projectName}> 
                <img src={process.env.PUBLIC_URL + "/" + this.props.projectName + '.png'} alt=""/>
                <h1>{this.props.projectName}</h1>
           </Link>
        </div>
        )
    }
}
