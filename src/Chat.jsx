import React, { Component, Fragment } from 'react';
import ChatHead from './components/chat/ChatHead'
import Message from './components/chat/Message'
import ChatFooter from './components/chat/ChatFooter'
import GlobalStyle from './GlobalStyle'
import { Container, ChatContainer, ChatBody } from './elements'
import io from 'socket.io-client';
const SERVER_URL = `http://localhost:5000`;

class Chat extends Component {
  state = {
    name: 'Bmw Service(ben)',
    messages: this.props.initChat,
    toggleChat: false
  }

  onSubmitMessage = msg => {
    let userIdLogin = JSON.parse(localStorage.getItem('accessToken'))._id;
    var d = new Date();
    var hrs = d.getHours(); // => 9
    var mnts = d.getMinutes(); // =>  30
    const newMessage = {
      userId: userIdLogin,
      // roomId: // IF WANT TO CHAT WITH LOT PEOPLE
      message:msg,
      time: `${hrs}:${mnts}`,
      realTime: new Date()
    }
    this.setState((prevState) => {
      return {   
        messages: [...prevState.messages, newMessage]
      }
    })
    this.socketForChat(newMessage)
  }
  
  socketForChat = (param) => { // SEND CHAT TO BE
    const socket = io(SERVER_URL, { transports: ['websocket'] });
    socket.emit('send_chat', { message: param });
    socket.on('reply_chat', (data) => {
      this.setState((prevState) => { // ADD TO CHAT LIST
        return { messages: [...prevState.messages, data]}
      })
    })
  }

  handleToggle = () => {
    this.setState({toggleChat: !this.state.toggleChat})
  }

  render() {
    return (
      <Fragment>
        <GlobalStyle />
        <Container>
          <ChatContainer
            toggle={this.state.toggleChat.toString()}
          >
            <ChatHead 
              name={this.state.name} 
              toggle={this.state.toggleChat.toString()}
              onClick={this.handleToggle}
            />
            <ChatBody toggle={this.state.toggleChat.toString()}>
              <Message messages={this.state.messages} />
            </ChatBody>
            <ChatFooter 
              toggle={this.state.toggleChat.toString()}
              onSubmitMessage={this.onSubmitMessage}/>
          </ChatContainer>
        </Container>        
      </Fragment>
    );
  }
}

export default Chat;
