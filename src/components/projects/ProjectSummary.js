import React, {Component} from 'react'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import {Link} from 'react-router-dom'


class ProjectSummary extends Component{

    state={
        projects:[]
    }

    componentDidMount(){
        Axios.get('http://localhost:8080/api/projects').then((projects, index) =>{
            this.setState({
               projects: projects.data
            })
            console.log(this.state.projects)
        })
    }



    render(){

        const projectList = this.state.projects.map((project, index)=>{
            return(
                <Link key={index} to ={`/project/${project._id}`}>
                    <div className="card" >
                        <div className="card-content">
                            <span className="card-title">{project.title}</span>
                            <p>Posted by {project.posted_by}</p>
                            <p>{project.updated_at}</p>
                        </div>
                    </div>
                </Link>
            )
            
        })
        return(
            <div className="ProjectSummary">
                {projectList}   
            </div>
            
        )
    }
}

export default withRouter(ProjectSummary)