import React from "react";

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
   
    return (
      <>
        <div className={this.props.styleHeader ?  'fixed':'header'}>
          <div id="logo"  onClick={this.scrollToTop}>
            <span>Just a layout</span>
          </div>
          <div id="about">
            <a href="#" title="Opportunities" onClick={this.scrollToTop}>
              Opportunities
            </a>
            <a href="#" title="Advantages" onClick={this.scrollToTop}>
              Advantages
            </a>
            <a href="#" title="Contacts" onClick={this.scrollToTop}>
              Contacts
            </a>
            <a href="#" title="FAQ" onClick={this.scrollToTop}>
              FAQ
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
