import Button from '@material-ui/core/Button';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import './Header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false,
            value: 0
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

    render() {
        return (
            <div>
                <header className="app-header">
                    <img src={logo} className="app-logo" alt="logo" />
                    <div className="login-button">
                        <Button variant="contained" color="default" onClick={this.openModalHandler}>Login</Button>
                    </div>
                </header>
                <Modal ariaHideApp={false} contentLabel="Login" isOpen={this.state.isModalOpen} onRequestClose={this.closeModalHandler}>
                    {/*The first tab has a position of 0, the second tab has a position of 1, and so on.*/}
                    <Tabs value={this.state.value} onChange={this.tabChangeHandler}>
                        <Tab label="Login"></Tab>
                        <Tab label="Register"></Tab>
                    </Tabs>
                </Modal>
            </div>);
    }
}

export default Header;