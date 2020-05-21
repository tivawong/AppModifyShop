import React from "react";
import App from "../App";


class BootSetup extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    console.disableYellowBox = true;
  }
  render() {
    return <App />;
  }
}

export default BootSetup;
