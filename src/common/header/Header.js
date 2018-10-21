import Button from '@material-ui/core/Button';
import React, { Component } from 'react';
import Modal from 'react-modal';
import logo from '../../assets/logo.svg';
import './Header.css';

class Header extends Component {

    constructor() {
        super();
        this.state = {
            isModalOpen: false
        }
    }

    openModalHandler = () => {
        this.setState({ isModalOpen: true });
    }

    closeModalHandler = () => {
        this.setState({ isModalOpen: false });
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
                </Modal>
            </div>);
    }
}

export default Header;