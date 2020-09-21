import React from 'react';

export default class Foo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHidden: false
    };
  }

  showHide() {
    this.setState(currenState => ({
      isHidden: !currenState.isHidden
    }));
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.showHide() }>
          Toggle
        </button>
        <p>{ !this.state.isHidden && this.props.text }</p>
      </div>
    );
  }
}
