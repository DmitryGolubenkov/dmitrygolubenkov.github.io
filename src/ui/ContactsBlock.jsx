import React, { Component } from "react";
import FeatherIcon from "feather-icons-react";
import ContactIcon from "./ContactIcon";
import "./ContactsBlock.css";

export default class ContactsBlock extends Component {
  render() {
    const size = 15;
    const mailIcon = <FeatherIcon icon="mail" size={size} />;
    const githubIcon = <FeatherIcon icon="github" size={size} />;
    const telegramIcon = <FeatherIcon icon="send" size={size} />;

    return (
      <div className="iconGrid">
        <ContactIcon
          content={mailIcon}
          link="mailto:dmitry.golubenkov@gmail.com"
        />
        <ContactIcon
          content={mailIcon}
          link="mailto:golubenkov.d.a@yandex.ru"
        />
        <ContactIcon
          content={githubIcon}
          link="https://github.com/DmitryGolubenkov"
        />
        <ContactIcon content={telegramIcon} link="https://t.me/alwics" />
      </div>
    );
  }
}
