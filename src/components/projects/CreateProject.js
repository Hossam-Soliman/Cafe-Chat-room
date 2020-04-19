import React, {Component} from 'react'
// import {connect} from 'react-redux'
// import { createProject } from '../../store/actions/projectActions'
import axios from 'axios'


class CreateProject extends Component{

    state = {
        title:'', 
        content:'', 
        auth: ''
    }

    componentDidMount(){
        this.setState({
            auth: localStorage.getItem('store')
        })
    }

    handleChange = (e) =>{

        this.setState ({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();

        !this.state.auth ?
        console.log('acces den')
        :
        console.log('auth')

        const newProject = {
            title: this.state.title,
            content: this.state.content,
            posted_by: localStorage.getItem('name')
        }

        const token = localStorage.getItem('store');

        axios.post('http://localhost:8080/api/create-project',newProject, {
            headers: {
            'auth-token': token
            }}).then((res)=>
            console.log(res.data)
            );
           
        window.location.href = ('/home')    
        // this.props.history.push('/home');

        document.getElementById('title').value = '';
        document.getElementById('content').value = '';

    }

    render(){

         const checkStatus = !this.state.auth ? <h6>Please login</h6> : <h6>What's on your mind?</h6>
        
        return(
            
            <div className="container">

                <form onSubmit={this.handleSubmit}>
                    <h5>Create new project</h5>

                    <input autoComplete="off" type="text" id="title" placeholder="Title" onChange={this.handleChange} ></input>
                
                    <input autoComplete="off" type="text" id="content" placeholder="Project Content" onChange={this.handleChange} ></input>

                    <button className="btn pink">Submit</button>   
                </form>

                <div>{checkStatus}</div>
            </div>
        )
    }

}



export default CreateProject

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         createProject: (project) => (dispatch)(createProject(project))
//     }
// }

// export default connect(null, mapDispatchToProps)(CreateProject)
