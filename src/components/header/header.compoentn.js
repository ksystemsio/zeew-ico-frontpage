import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import logo from '../../images/zeew-green-websites-logo.svg';
import './header.component.css';

export class AppHeader extends Component {
    render() {
        return (
            <div id="main-wrapper">
                <div className="page-wrapper">
                    <div className="container-fluid">
                        <div className="header1 po-relative hash-linked" id="Home">
                            <div className="container">
                                <nav className="navbar navbar-expand-xl h1-nav">
                                    <div>
                                        <a className="navbar-brand" href="/index.html">
                                            <img src={logo} className="Logo" width={120} alt="logo" />
                                        </a>
                                        <div className="btn-group languages">
                                            <a className="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <img src="images/flags/Flag_of_the_United_Kingdom.svg" width="30px" /> UK
                                            </a>
                                            <div className="dropdown-menu bg-light">
                                                <a className="dropdown-item" href="#"><img src="images/flags/Flag_of_the_United_Kingdom.svg" width="30px" /> UK</a>
                                                <a className="dropdown-item" href="#"><img src="images/flags/Flag_of_Russia.svg" width="30px" /> Russia</a>
                                                <a className="dropdown-item" href="#"><img src="images/flags/Flag_of_South_Korea.svg" width="30px" /> Korea</a>
                                                <a className="dropdown-item" href="#"><img src="images/flags/Flag_of_Vietnam.svg" width="30px" /> Vietnam</a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="navbar-toggler" type="button"
                                            data-toggle="collapse"
                                            data-target="#header1"
                                            aria-controls="navbarTogglerDemo02"
                                            aria-expanded="false"
                                            aria-label="Toggle navigation">
                                        <span className="ti-menu"></span>
                                    </button>

                                    <div className="collapse navbar-collapse" id="header1">
                                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                                            <li className="nav-item">
                                                <NavLink className="nav-item" exact to="/" activeClassName="active">Home</NavLink>
                                            </li>

                                            <li className="nav-item">
                                                <NavLink className="nav-item" activeClassName='active' to='/about'>About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-item" to="/team" activeClassName="active">Team</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-item" to="/timeline" activeClassName="active">Timeline</NavLink>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#Referral">Referral</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#News">News</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Solution">Solution</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Tokens">Tokens</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Roadmap">Roadmap</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Timeline">Timeline</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Team">Team</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#Investors">Investors</a></li>
                                            <li className="nav-item"><a className="btn btn-outline-info" href="http://t.me/zeewgroup"
                                                                    target="_blank"><i className="fa fa-telegram"></i> Telegram</a></li>
                                            <li className="nav-item"><a className="btn btn-outline-zeew" href="/wallet"><i
                                                className="fa fa-lock"></i>
                                                Zeew Wallet</a></li>
                                        </ul>
                                    </div>
                                </nav>
                                {/*End Header 1 code*/}
                            </div>
                        </div>
                        {/*END OF HEADER*/}
                        {/*END OF HEADER*/}
                        {/*END OF HEADER*/}
                        {/*END OF HEADER*/}
                    </div>
                </div>
            </div>
        );
    }
}
