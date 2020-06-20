import React from "react";

class Overviev extends React.PureComponent {
    render() {
      return <h1>Привет, {this.props.name}</h1>;
    }
};

export default Overviev;