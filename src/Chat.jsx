import React, { Component, Fragment } from 'react';
import ChatHead from './components/chat/ChatHead'
import Message from './components/chat/Message'
import ChatFooter from './components/chat/ChatFooter'
import GlobalStyle from './GlobalStyle'
import { Container, ChatContainer, ChatBody } from './elements'

class Chat extends Component {
  state = {
    name: 'Bmw Service(ben)',
    messages: [],
    toggleChat: false
  }

  onSubmitMessage = msg => {
    var d = new Date();
    var hrs = d.getHours(); // => 9
    var mnts = d.getMinutes(); // =>  30
    this.setState((prevState) => {
      const newMessage = {
        userId: 1,
        message:msg,
        time: `${hrs}:${mnts}`
      }
      return {   
        messages: [...prevState.messages, newMessage]
      }
    })
    this.setState((prevState) => {
      const newMessage = {
        userId: 2,
        message: ['resp message'],
        time: `10:10`
      }
      return {   
        messages: [...prevState.messages, newMessage]
      }
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
            toggle={this.state.toggleChat}
          >
            <ChatHead 
              name={this.state.name} 
              toggle={this.state.toggleChat}
              onClick={this.handleToggle}
            />
            <ChatBody toggle={this.state.toggleChat}>
              <Message messages={this.state.messages} />
            </ChatBody>
            <ChatFooter 
              toggle={this.state.toggleChat}
              onSubmitMessage={this.onSubmitMessage}/>
          </ChatContainer>
        </Container>        
      </Fragment>
    );
  }
}

export default Chat;
