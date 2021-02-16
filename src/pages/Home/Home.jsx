import React from 'react';
// import ReactDom from 'react-dom';
import Header from '@components/Header';
import MessageList from '@containers/MessageList';
import ChatsList from '@containers/ChatsList';
import MsgInput from '@components/MsgInput';

import './style.scss';

export default () => {
    return <div className="wrp">
        {/* <MsgInput /> */}
        <Header />
        <ChatsList />
        <MessageList />
    </div>
}
