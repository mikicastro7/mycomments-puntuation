import React, { Component } from 'react'
import {Route} from "react-router-dom";
import Projects from '../components/Projects/Projects'
import Comments from './myComments'
import Axios from 'axios';

export default class MyComment extends Component {
    state = {
        projects: []
    }

    componentDidMount() {
        Axios.get('projects')
          .then(response => {
            console.log(response)
            this.setState({projects : response.data.projects})
          })
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
