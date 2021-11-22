import React from "react";
import { Link } from "react-router-dom";
import './header.scss';
import ThemeContext from "../../Context/ThemeContext";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isNavOpen: false }
    }
    navToggle = () => {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }
    selectTheme = (theme) => {
        localStorage.setItem('theme', theme);
        window.location.reload(false);
    }
    render() {
        return (
            <header>
                <div className="container row">
                    <div class="logo-and-theme">
                        <div class="mobile-nav">
                            <button class="nav-toggle" onClick={this.navToggle}>
                                <span class="hamburger"></span>
                                <span class="hamburger"></span>
                                <span class="hamburger"></span>
                            </button>
                        </div>
                        <Link to="/hotels-app" className="logo">🏠</Link>
                        <div class="theme">
                            <label id="theme-icon" class="theme-icon"></label>
                            <select class="select-theme" id="select-theme">
                                <option value="select-theme">Theme:</option>
                                <option value="auto" onClick={() => this.selectTheme('theme-auto')}>Auto</option>
                                <option value="light" onClick={() => this.selectTheme('theme-light')}>Light</option>
                                <option value="dark" onClick={() => this.selectTheme('theme-dark')}>Dark</option>
                            </select>
                        </div>

                    </div>
                    
                    
                    <nav className={`nav row ${this.state.isNavOpen ? 'nav--visible' : ''}`}>
                        <ul class="nav__list nav--primary row">
                            <li class="nav__item"><Link to="/hotels-app" className="nav__link">Home</Link></li>
                            <li class="nav__item"><a href="#" class="nav__link">Analytics</a></li>
                            <li class="nav__item"><a href="#" class="nav__link">Dashboard</a></li>
                        </ul>
                        <ul class="nav__list nav--secondary row">
                            <li class="nav__item"><a href="#" class="nav__link" id="log-in-link">Log In</a></li>
                            <li class="nav__item"><a href="#" id="sign-up-link" class="nav__link link--button">Sign Up</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

Header.contextType = ThemeContext;

export default Header;