import React, { Component } from 'react'
import ProjectSummary from '../projects/ProjectSummary';
import Chat from '../layout/Chat'


// import {connect} from 'react-redux'


class Dashboard extends Component{
    render(){

        return(
            <div className= "Dashboard container">
                <div className="row">
                    <div className="col s12 m4">
                        <ProjectSummary/>
                    </div>
                    <div className="col s12 m6 offset-m1">
                        <Chat/>
                    </div>
                </div>
            </div>
        )
    }
}



export default Dashboard


// const mapStateToProps = (state) =>{
//     return{
//         projects: state.project.projects
//     }
// }

