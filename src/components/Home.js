import React, { Component } from "react";
//import { NavLink } from "react-router-dom";
import Nav from "./Nav";
import bg from "../bg.jpg";
import PropTypes from "prop-types";
import axios from "axios";

import Tech from "./cards/Tech";
import Services from "./cards/Services";
import Lsp from "./cards/Lsp";
import Spleeter from "./cards/Spleeter";
import Fb from "./cards/Fb";
import Rv from "./cards/Rv";

import { Textbox, Textarea } from "react-inputs-validation";
import "react-inputs-validation/lib/react-inputs-validation.min.css";

import { css } from "@emotion/core";
import SkewLoader from "react-spinners/SkewLoader";

// npm - react-switch-lang
import { translate } from "react-switch-lang";
import CookieConsent from "react-cookie-consent";

// npm - react-messenger-customer-chat
// import MessengerCustomerChat from "react-messenger-customer-chat";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      mess: "",
      nameValidation: false,
      emailValidation: false,
      messValidation: false,
      loading: false,
      success: false,
      error: false,
      status: undefined,
    };

    this.topRef = React.createRef();
    this.stackRef = React.createRef();
    this.proRef = React.createRef();
    this.conRef = React.createRef();
  }

  componentDidMount() {}
  componentWillUnmount() {}

  handleSubmit = (e) => {
    e.preventDefault();

    this.setState({
      loading: false,
      success: false,
      error: false,
    });

    const re = /\S+@\S+\.\S+/;

    if (re.test(this.state.email) === false) {
      this.setState({
        loading: false,
      });
    } else if (this.state.nameValidation === false) {
      this.setState({
        loading: false,
      });
    } else if (this.state.emailValidation === false) {
      this.setState({
        loading: false,
      });
    } else if (this.state.messValidation === false) {
      this.setState({
        loading: false,
      });
    } else {
      this.setState({
        loading: true,
      });
      let { name, email, mess } = this.state;
      axios
        .post("https://spleeter.co.uk/email", {
          email,
          name,
          text: mess,
        })
        .then((res) => {
          this.setState({
            name: "",
            email: "",
            mess: "",
          });
          if (res.data.status === "true") {
            this.setState({
              success: true,
              loading: false,
            });
            setTimeout(() => {
              this.setState({
                success: false,
              });
            }, 5000);
          } else {
            this.setState({
              error: true,
              loading: false,
            });
            setTimeout(() => {
              this.setState({
                error: false,
              });
            }, 5000);
          }
        })
        .catch((err) => {
          this.setState({
            error: true,
            loading: false,
          });
          setTimeout(() => {
            this.setState({
              error: false,
            });
          }, 5000);
        });
    }
  };

  render() {
    const { t } = this.props;
    let { name, email, mess } = this.state;

    const override = css`
      width: auto;
      height: auto;
      display: block;
      margin: 15px auto;
    `;

    let currentYear = new Date().getFullYear();

    return (
      <>
        {/* <MessengerCustomerChat
          pageId="106105690995533"
          appId="3127150517308819"
          themeColor="#0084ff"
        /> */}
        <CookieConsent
          acceptOnScroll={true}
          acceptOnScrollPercentage={25}
          location="bottom"
          buttonText={t("home.accept")}
          cookieName="cookie-consent"
          style={{
            backgroundColor: "grey",
            color: "white",
            fontSize: "3vw",
            textAlign: "left",
            textShadow: "1px 1px black",
          }}
          buttonClasses="cookie-btn"
          containerClasses="cookie-container"
          expires={365}
        >
          {t("home.cookie")}
        </CookieConsent>
        <div className="background">
          <Nav />
          <div className="body">
            <div className="darken"></div>
            <img src={bg} alt="Background Art" />
            <span ref={this.topRef}></span>
            <div className="intro">
              <div className="text-container">
                <p className="hello">
                  {t("home.p1")}
                  <span id="span1">{t("home.p2")}</span>.
                  <br />
                  {t("home.p3")}
                </p>
              </div>
              <div className="refs">
                <span
                  onClick={() =>
                    window.scrollTo(0, this.stackRef.current.offsetTop)
                  }
                  className="btn-5"
                >
                  <span>{t("home.stack")}</span>
                </span>
                <span
                  onClick={() =>
                    window.scrollTo(0, this.proRef.current.offsetTop)
                  }
                  className="btn-4"
                >
                  <span>{t("home.pro")}</span>
                </span>
                <span
                  onClick={() =>
                    window.scrollTo(0, this.conRef.current.offsetTop)
                  }
                  className="btn-6"
                >
                  <span>{t("home.contact")}</span>
                </span>
              </div>
            </div>
            <div
              ref={this.stackRef}
              id="stack-page"
              className="projects-container"
            >
              <div className="stack-container">
                <p id="title">{t("home.stackCont")}</p>
                <Tech />
                <Services />
              </div>
            </div>
            <div
              ref={this.proRef}
              id="proj-cont"
              className="projects-container"
            >
              <div className="proj-container">
                <p id="title">{t("home.proCont")}</p>
                <Lsp />
                <Spleeter />
                <Fb />
                <Rv />
              </div>
            </div>
            <div
              ref={this.conRef}
              id="contact-page"
              className="projects-container"
            >
              <div className="cont-container">
                <p id="title">{t("home.contCont")}</p>
                <form>
                  <div className="form-group">
                    <label>{t("contact.name")}</label>
                    <Textbox
                      attributesInput={{
                        id: "Name",
                        name: "Name",
                        type: "text",
                        placeholder: t("contact.pl1"),
                      }}
                      value={name} // Optional.[String].Default: "".
                      onChange={(name, e) => {
                        this.setState({ name });
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      onBlur={(e) => {
                        if (this.state.name === "") {
                          this.setState({
                            nameValidation: false,
                          });
                        } else {
                          this.setState({
                            nameValidation: true,
                          });
                        }
                      }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      validationOption={{
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        msgOnError: t("contact.nameErr"),
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t("contact.email")}</label>
                    <Textbox
                      attributesInput={{
                        id: "email",
                        placeholder: t("contact.pl2"),
                        type: "text",
                      }}
                      value={email}
                      onChange={(email, e) => {
                        this.setState({ email });
                      }}
                      onBlur={(e) => {
                        if (this.state.email === "") {
                          this.setState({
                            emailValidation: false,
                          });
                        } else {
                          this.setState({
                            emailValidation: true,
                          });
                        }
                      }} //Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      validationOption={{
                        check: true, //Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, //Optional.[Bool].Default: true. To determin if it is a required field.
                        msgOnError: t("contact.emailErr"),
                        customFunc: (email) => {
                          const reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                          if (reg.test(String(email).toLowerCase())) {
                            return true;
                          } else {
                            return t("contact.emailWrong");
                          }
                        },
                      }}
                    />
                  </div>
                  <div className="form-group">
                    <label>{t("contact.mess")}</label>
                    <Textarea
                      attributesInput={{
                        id: "mess",
                        name: "Mess",
                        type: "text",
                        placeholder: t("contact.pl3"),
                      }}
                      value={mess} // Optional.[String].Default: "".
                      onChange={(mess, e) => {
                        this.setState({ mess });
                      }} // Required.[Func].Default: () => {}. Will return the value.
                      onBlur={(e) => {
                        if (this.state.mess === "") {
                          this.setState({
                            messValidation: false,
                          });
                        } else {
                          this.setState({
                            messValidation: true,
                          });
                        }
                      }} // Optional.[Func].Default: none. In order to validate the value on blur, you MUST provide a function, even if it is an empty function. Missing this, the validation on blur will not work.
                      validationOption={{
                        check: true, // Optional.[Bool].Default: true. To determin if you need to validate.
                        required: true, // Optional.[Bool].Default: true. To determin if it is a required field.
                        msgOnError: t("contact.messErr"),
                      }}
                    />
                  </div>
                  <div className="contact-response">
                    {this.state.loading ? (
                      <SkewLoader
                        css={override}
                        size={40}
                        color={"white"}
                        loading={true}
                      />
                    ) : null}
                    {this.state.success ? (
                      <p>
                        <i className="fas fa-check-circle"></i>
                        {t("contact.success")}
                      </p>
                    ) : null}
                    {this.state.error ? (
                      <p>
                        <i className="fas fa-exclamation-circle"></i>
                        {t("contact.fail")}
                      </p>
                    ) : null}
                  </div>
                  <div onClick={this.handleSubmit} className="btn-10">
                    {t("contact.send")}
                  </div>
                  <div
                    onClick={() =>
                      window.scrollTo(0, this.topRef.current.offsetTop)
                    }
                    className="up-cont"
                  >
                    <span
                      onClick={() =>
                        window.scrollTo(0, this.topRef.current.offsetTop)
                      }
                      className="btn-up"
                    >
                      <i className="fas fa-caret-up"></i>
                    </span>
                    <label>{t("home.back")}</label>
                  </div>
                </form>
              </div>
              <div className="copy">{currentYear} &copy; BADERproductions</div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

Home.propTypes = {
  t: PropTypes.func.isRequired,
};

export default translate(Home);
