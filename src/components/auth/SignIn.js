import React, {Component} from 'react'
import axios from 'axios'


class SignIn extends Component{

    state = {
        email:'', 
        password:'',
        store: '',
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
            email: this.state.email, 
            password: this.state.password
        }

        axios.post('http://localhost:8080/api/login', user).then((res)=>{
            console.log(res.data)
            localStorage.setItem ('store', res.data.token)
            localStorage.setItem('name', res.data.user)
            // alert("welcome " + localStorage.getItem('name'))
            
        }).catch(error =>{
            if(error.response){
                console.log(error.response.data)
                this.setState({
                    error: error.response.data
                })
            }
        }).then(()=>{
            if(!this.state.error){
                window.location.href = '/home'
            }
        })
    }

    render(){
        return(
            
            <div className="container">

                
                <form onSubmit={this.handleSubmit}>

                    <h5>Sign In</h5>
                    
                    <input autoComplete="off" type="email" id="email" placeholder="email" onChange={this.handleChange} ></input>
                
                    <input autoComplete="off" type="password" id="password" placeholder="password" onChange={this.handleChange} ></input>

                    <button autoComplete="off" className="btn pink">LOGIN</button>
                   
                </form>
                <h6>{this.state.error}</h6>
                
            </div>
        )
    }

}


export default SignIn
