import React from 'react';


class Controller extends React.Component {
  static propTypes = {
    enabled: React.PropTypes.bool
  };

  state = {
    enabled: this.props.enabled
  };

  constructor(props) {
    super(props);

  }

  onEnabledToggle(event) {
    this.setState({
      enabled: !this.state.enabled
    });
  }

  render() {
    return (
      <div>
        <Display enabled={this.state.enabled}/>
        <button onClick={this.onEnabledToggle.bind(this)}>toggle</button>
      </div>
    );
  }
}


export default class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  onchange() {
    let node = this.refs.myCheckbox;
    console.log(node);
  }

  render() {
    return (
      <input type="checkbox" checked={this.props.enabled} ref="myCheckbox" onChange={this.onchange.bind(this)}/>
    );
  }
}