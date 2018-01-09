import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../login';
import Register from '../register';
import Body from '../body';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List';
import TextField from 'material-ui/TextField';
import ListItem from 'material-ui/List/ListItem';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from 'material-ui-search-bar';
import Chip from 'material-ui/Chip';
import Avi from './avi.jpg';
import Divider from 'material-ui/Divider';
import './index.css';
//import 'typeface-roboto';

const Sidebar = () => (
    <MuiThemeProvider>
        <div>
            <List>
                <ListItem disabled={true}>
                    <SearchBar hintText="Search Chats" />
                </ListItem>
                <Divider />
            </List>
        </div>
    </MuiThemeProvider>
);

export default Sidebar;
