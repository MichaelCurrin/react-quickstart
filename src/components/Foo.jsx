import React from "react";

export default class Foo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false,
    };
  }

  showHide() {
    this.setState((currentState) => ({
      isHidden: !currentState.isHidden,
    }));
  }

  render() {
    return (
      <div>
        <h2>Toggle component</h2>

        <p>A simple class component.</p>

        <button onClick={() => this.showHide()}>Toggle</button>

        <p>{!this.state.isHidden && this.props.text}</p>
      </div>
    );
  }
}
