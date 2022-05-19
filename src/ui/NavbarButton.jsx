import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import "./NavbarButton.css";
import { NavLink } from "react-router-dom";

export class NavbarButton extends Component {
  render() {
    return (
      <NavLink
        to={this.props.linkto}
        className={({ isActive }) =>
          isActive ? "navbar-button-chosen" : "navbar-button"
        }
        onClick={this.props.closeMenu}
      >
        <div className="navbar-icon-outer">
          <FeatherIcon
            icon={this.props.icon}
            size="28"
            className="navbar-icon-inner"
          />
        </div>
        <div className="navbar-text">{this.props.text}</div>
      </NavLink>
    );
  }
}

export default NavbarButton;
