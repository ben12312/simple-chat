import React, { Fragment } from 'react'
import { StyledMessageWrapper, StyledMessage } from './elements'

function renderMessages(messages) {
    let userIdLogin = JSON.parse(localStorage.getItem('accessToken'))._id;
    
    return messages.map((m, i) => (
        <StyledMessageWrapper key={i} type={m.userId === userIdLogin ? 'sent' : 'received'}>
            <StyledMessage type={m.userId === userIdLogin ? 'sent' : 'received'}>
                {m.message}
                <span style={{marginLeft: 10, fontSize: 10, marginBot: 100}}>{m.time}</span>
            </StyledMessage>
        </StyledMessageWrapper>
    ))
}

export default props => (
    <Fragment>
        {renderMessages(props.messages)}
    </Fragment>
)