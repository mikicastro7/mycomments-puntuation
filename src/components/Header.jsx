import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import styles from './Header.module.css'

export default class Header extends Component {
    render() {
        return (
            <div className={styles.headercontainer}>
                <Link className={styles.headerMyProjects} to="/">MyProjects</Link>
                <h1 className={styles.headerTitle}>MyReviews</h1>
            </div>
        )
    }
}
