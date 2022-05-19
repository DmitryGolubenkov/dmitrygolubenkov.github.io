import React, { Component } from "react";
import NavbarButton from "./NavbarButton";
import "./Navbar.css";
import ContactsBlock from "./ContactsBlock";
import FeatherIcon from "feather-icons-react";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isMenuShown: false,
    };
  }

  closeMenu = () => {
    this.setState({ isMenuShown: false });
  };

  render() {
    const menuStateClass = this.state.isMenuShown
      ? "navbar-menu-mobile"
      : "navbar-menu";
    console.log(menuStateClass);
    return (
      <div className="navbar-main">
        <button
          className="navbar-mobile-button"
          onClick={() =>
            this.state.isMenuShown
              ? this.setState({ isMenuShown: false })
              : this.setState({ isMenuShown: true })
          }
        >
          <FeatherIcon icon="menu" />
        </button>
        <div className="logo">{document.title}</div>
        <div className={menuStateClass}>
          <div>
            <NavbarButton
              text="Главная"
              linkto="/"
              icon="home"
              closeMenu={this.closeMenu}
            />
            <NavbarButton
              text="Обо мне"
              linkto="/about"
              icon="user"
              closeMenu={this.closeMenu}
            />
            <NavbarButton
              text="Проекты"
              linkto="/projects"
              icon="terminal"
              closeMenu={this.closeMenu}
            />
            <NavbarButton
              text="Блог"
              linkto="/blog"
              icon="book"
              closeMenu={this.closeMenu}
            />
          </div>
          <ContactsBlock />
        </div>
      </div>
    );
  }
}

export default Navbar;
