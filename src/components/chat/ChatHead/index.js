import React from 'react';
// import styled from 'styled-components';
// import { FaBars } from 'react-icons/fa'

import {Head} from './elements'

const ChatHead = props => (
    <Head toggle={props.toggle}>
        <div>
            <span style={{ marginLeft: 10 }}>{props.name}&nbsp;</span>
        </div>
        <div>
            {/* <FaBars onClick={props.onClick}/> */}
        </div>
    </Head>
);

export default ChatHead;

