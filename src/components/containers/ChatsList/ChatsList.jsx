import React, { Component } from 'react';
import './style.scss';

import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import { Link } from 'react-router-dom';

import Dialog from '@components/Dialog';

export default class ChatList extends Component {
    constructor (props) {
        super(props);
        this.state = {
            activeChats: [
                { name: 'Ira', id: '1' },
                { name: 'Alex', id: '2' },
                { name: 'Zo', id: '3' },
                { name: 'Mary', id: '4' }
            ]
        };
    }

    addChat = (name) => {
            this.setState({ activeChats: [...this.state.activeChats, { name: name, id: Date.now() }] });
    }
    
render() {
    const { activeChats } = this.state;
    const Chats = activeChats.map((el, i) => <Link to ={ `/chat/${el.id}` }><ListItem button key={ i }><ListItemAvatar><Avatar></Avatar></ListItemAvatar><ListItemText primary={ el.name } /></ListItem></Link>);
    return <div className="chatslist">
                    { Chats }
                <Divider />
                <Dialog add={ this.addChat } />

        </div>;
    }
};
    