import React from "react";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

const ScrollHOC = View => {
  return class extends React.Component {
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
    scrollTo() {
      scroller.scrollTo("scroll-to-element", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart"
      });
    }
    componentWillUnmount() {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    }

    render() {
      return (
        <>
          <View
            {...this.props}
            scrollToTop={this.scrollToTop}
            scrollTo={this.scrollTo}
            Element={Element}
            Link={Link}
          />;
        </>
      );
    }
  };
};
export default ScrollHOC;
