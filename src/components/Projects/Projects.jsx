import React from 'react'
import Header from '../Header'

import Project from './Project/Project'
import styles from './Projects.module.css'

function Projects(props) {
    return (
        <div>
            <Header/>
            <div className={styles.projects}>
                {props.projects.map(ctrl => {
                    return <Project key={ctrl.id} projectName={ctrl.name}></Project>
                })}
            </div>
        </div>
    )
}

export default Projects
