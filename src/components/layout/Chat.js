import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
// // import openSocket from 'socket.io-client';
// import { Socket } from 'react-socket-io';
// import { withEmit } from "react-emit";

var socket;
var name = localStorage.getItem('name');

class Chat extends Component{

    state = {

    }

    componentDidMount(){
        socket = socketIOClient('http://localhost:8080');
        this.listening();
    }


    handleTyping = (e) =>{
        socket.emit('typing', name)
    }

    handleSubmit = (e) =>{

        socket.emit('chat', {
            message: document.getElementById('message').value,
            sender: localStorage.getItem('name')
        });

        document.getElementById('message').value = '';
    }


    listening(){

        socket.on('typing', function(data){
            document.getElementById('feedback').innerHTML = '<p><em>' + data + ' is typing a message...</em></p>';
        });

        socket.on('chat', function(data){
            document.getElementById('feedback').innerHTML = '';
            document.getElementById('output').innerHTML += '<p><strong>' + data.sender + ': </strong>' + data.message + '</p>';
        });
       
    }


    render(){        
        return(
            <div className= "chat">
                <div id="chat-window">
                    <div id="output"></div>
                    <div id="feedback"></div>
                </div>
                <input autoComplete='off' id="message" onKeyPress={this.handleTyping} type="text" placeholder="Message" />
                <button id="send" onClick={this.handleSubmit}>Send</button>
            </div>
        )
    }
}

export default Chat
