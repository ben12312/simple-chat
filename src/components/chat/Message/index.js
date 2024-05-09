import React, { Fragment } from 'react'
import { StyledMessageWrapper, StyledMessage } from './elements'

function renderMessages(messages) {
    return messages.map((m, i) => (
        <StyledMessageWrapper key={i} type={m.userId === 1 ? 'sent' : 'received'}>
            <StyledMessage type={m.userId === 1 ? 'sent' : 'received'}>
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