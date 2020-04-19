import React, {Component} from 'react'
import Axios from 'axios';

class ProjectDetails extends Component{

    state = {
        title: '',
        content: '',
        posted_by: '',
        updated_at: ''
    }


    componentDidMount(){
       Axios.get(`http://localhost:8080/api/projects/${this.props.match.params.id}`).then((res) =>{
           this.setState({
               title: res.data.title,
               content: res.data.content,
               posted_by: res.data.posted_by,
               updated_at: res.data.updated_at
           })
       })
    }

    render(){
      
        return(
            <div className="container ProjectDetails">
                <div className="card">
                    <div className="card-content">
                        <span className="card-title">{this.state.title}</span>
                        <p>{this.state.content}</p>
                    </div>
                    <div className="card-action grey-text">
                        <div>Posted by {this.state.posted_by}</div>
                        <div>{this.state.updated_at}</div>
                    </div>
            
                </div>
            </div>
        )

    }

   
}

export default ProjectDetails 