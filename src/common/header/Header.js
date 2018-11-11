import { FormControl, InputLabel } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import './Header.css';

//For the modal to fit the content.
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
}

const TabContainer = function (props) {
    return (
        <Typography component="div" style={{ padding: 0, textAlign: "center" }}>
            {props.children}
        </Typography>
    );
}

TabContainer.PropTypes = {
    children: PropTypes.node.isRequired
}

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0,
            username: "",
            usernameRequired: 'dispNone'
        }
    }

    openModalHandler = () => {
        this.setState({ isModalOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false });
    }

    tabChangeHandler = (event, value) => {
        this.setState({ value });
    }

    inputUsernameChangeHandler = (e) => {
        this.setState({ username: e.target.value });
    }

    loginClickHandler = () => {
        this.state.username === "" ? this.setState({ usernameRequired: 'dispBlock' }) : this.setState({ usernameRequired: 'dispNone' });
    }

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="Movies App Logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} contentLabel="Login" isOpen={this.state.isModalOpen}
                    onRequestClose={this.closeModalHandler} style={customStyles}>
                    {/*The first tab has a position of 0, the second tab has a position of 1, and so on.*/}
                    <Tabs className="tabs" value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                    {this.state.value === 0 &&
                        <TabContainer>
                            <FormControl required>
                                <InputLabel htmlFor="username">Username</InputLabel>
                                <Input id="username" type="text" username={this.state.username} onChange={this.inputUsernameChangeHandler} />
                                <FormHelperText className={this.state.usernameRequired}><span className="red">required</span></FormHelperText>
                            </FormControl>
                            <br /><br />
                            <FormControl required>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" type="password" />
                            </FormControl>
                            <br /><br />
                            <Button variant="contained" color="primary" onClick={this.loginClickHandler}>Login</Button>
                        </TabContainer>
                    }
                </Modal>
            </div>);
    }
}

export default Header;