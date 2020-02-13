import React from "react";
import ScrollHOC from "../hoc";

import Scroll from "react-scroll";
var Events = Scroll.Events;
var scroll = Scroll.animateScroll;
var scrollSpy = Scroll.scrollSpy;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.scrollToTop = this.scrollToTop.bind(this);
  }

  componentDidMount() {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }

  scrollToTop() {
    scroll.scrollToTop();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove("begin");
    Events.scrollEvent.remove("end");
  }

  render() {
    let { Link } = this.props;
    return (
      <>
        <div className={this.props.styleHeader ? "fixed" : "header"}>
          <div id="logo" onClick={this.scrollToTop}>
            <span>Just a layout</span>
          </div>
          <div id="about">
            <a href="#" title="Opportunities" onClick={this.scrollToTop}>
              <Link
                activeClass="active"
                className="main"
                to="main"
                spy={true}
                smooth={true}
                duration={500}
              >
                Opportunities
              </Link>
            </a>

            <a href="#" title="Advantages" onClick={this.scrollToTop}>
              <Link
                activeClass="active"
                className="overviev"
                to="overviev"
                spy={true}
                smooth={true}
                duration={500}
              >
                Advantages
              </Link>
            </a>
            <a href="#" title="contacts" onClick={this.scrollToTop}>
              <Link
                activeClass="active"
                className="contacts"
                to="contacts"
                spy={true}
                smooth={true}
                duration={500}
              >
                Contacts
              </Link>
            </a>
            <a href="#" title="faq" onClick={this.scrollToTop}>
              <Link
                activeClass="active"
                className="faq"
                to="faq"
                spy={true}
                smooth={true}
                duration={500}
              >
                FAQ
              </Link>
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default ScrollHOC(Header);
