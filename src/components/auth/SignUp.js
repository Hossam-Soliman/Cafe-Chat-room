import React, {Component} from 'react'
import axios from 'axios'


class SignUp extends Component{

    state = {
        email:'', 
        password:'', 
        username:'', 
        error: ''
    }

    handleChange = (e) =>{

        this.setState ({
            [e.target.id]: e.target.value,
            error: ''
        })
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        
        const user = {
            email:this.state.email, 
            password:this.state.password, 
            username:this.state.username,
        }
        
            axios.post('http://localhost:8080/api/register', user).then((res)=>{
                console.log(res.data)
            }).catch(error =>{
            if(error.response){
                console.log(error.response.data)
                this.setState({
                    error: error.response.data
                })
            }
            
            }).then(()=>{
                if(!this.state.error){
                    window.location.href = '/signin'
                }
            })

        
            
            
        document.getElementById('password').value = ''; 
    }

    render(){

        return(
            
            <div className="container">
                
                <form onSubmit={this.handleSubmit}>

                    <h5>Sign Up</h5>
                    
                    <input autoComplete="off" type="email" id="email" placeholder="email" onChange={this.handleChange} ></input>
                
                    <input autoComplete="off" type="password" id="password" placeholder="password" onChange={this.handleChange}></input>

                    <input autoComplete="off" type="text" id="username" placeholder="username" onChange={this.handleChange}></input>

                    <button className="btn pink">SIGN UP</button>
                   
                </form>
                <h6>{this.state.error}</h6>
                
            </div>
        )
    }

}


export default SignUp
