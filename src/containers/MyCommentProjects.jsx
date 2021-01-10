import React, { Component } from 'react'
import {Route} from "react-router-dom";
import Projects from '../components/Projects/Projects'
import Comments from './myComments'

export default class MyComment extends Component {
    state = {
        projects: [
            {
                id: 1,
                name: "MyTodoList",
            },
            {
                id: 2,
                name: "MyComments",
            },
            {
                id: 3,
                name: "MyComments",
            },
            {
                id: 4,
                name: "MyComments",
            },
            {
                id: 5,
                name: "MyComments",
            },
        ]
    }

    render() {
        return (
            <div> 
                
                <Route path="/" exact render={(props) => <Projects projects={this.state.projects} {...props} /> } />
                
                {this.state.projects.map(ctrl => {
                    return <Route key={ctrl.id} path={"/" + ctrl.name} exact component={(props) => <Comments projectName={ctrl.name} projectId={ctrl.id} {...props} />}  />
                })}
                
            </div>
        )
    }
}
